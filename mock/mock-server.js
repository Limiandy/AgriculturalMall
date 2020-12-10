/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 21:44:52
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 21:44:52
 */
const chokidar = require('chokidar') // 监听目录内以及目录内文件的变化做出响应
const bodyParser = require('body-parser') // 解析请求 body 体
const chalk = require('chalk') // 改变terminal输出样式
const path = require('path')

// process.cwd() 返回当前node.js进程执行时的工作目录
const mockDir = path.join(process.cwd(), 'mock')
/**
 * @name: registerRoutes
 * @msg: 遍历index生成的mocks数组，注册后端路由
 * @param { Function } app express 方法
 * @returns { Number } 返回注册路由的总数和第一个路由的下标
 */
function registerRoutes(app) {
  let mockLastIndex
  const { default: mocks } = require('./index.js')
  for (const mock of mocks) {
    // app.get | post ('/url', callback | files) === express 注册路由
    app[mock.type](mock.url, mock.response)
    // app._router.stack express路由数组 返回mock最后一个路由的位置
    mockLastIndex = app._router.stack.length
  }
  // Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  const mockRoutesLength = Object.keys(mocks).length
  return {
    // 一共有多少个 mock 路由
    mockRoutesLength: mockRoutesLength,
    // 第一个 mock 路由的位置
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}

// 从require缓存中清除已注册好的路由
function unregisterRoutes() {
  Object.keys(require.cache).forEach(i => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}

module.exports = app => {
  // es6 polyfill 兼容之后引入的非es6语法文件
  require('@babel/register')

  // parse app.body
  // https://expressjs.com/en/4x/api.html#req.body
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  const mockRoutes = registerRoutes(app)
  var mockRoutesLength = mockRoutes.mockRoutesLength
  var mockStartIndex = mockRoutes.mockStartIndex

  // watch files, hot reload mock server
  // https://www.npmjs.com/package/chokidar
  chokidar.watch(mockDir, {
    ignored: /mock-server/,
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add') {
      try {
        // remove mock routes stack
        app._router.stack.splice(mockStartIndex, mockRoutesLength)

        // clear routes cache
        unregisterRoutes()

        const mockRoutes = registerRoutes(app)
        mockRoutesLength = mockRoutes.mockRoutesLength
        mockStartIndex = mockRoutes.mockStartIndex

        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
}
