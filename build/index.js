/*
 * @Descripttion: 编译配置
 * @version: 
 * @Author: Andy
 * @Date: 2020-05-05 17:43:38
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-05 17:55:30
 */

const {run} = require('runjs')
const chalk = require('chalk')
const config = require('../vue.config.js')

/**
 * http://nodejs.cn/api/process/process_argv.html
 */
const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')
if (process.env.npm_config_preview || rawArgv.includes('--preview')) {
  const report = rawArgv.includes('--report')

  run(`vue-cli-service build ${args}`)

  const port = 8080
  const publicPath = config.publicPath

  var connect = require('connect')
  var serveStatic = require('serve-static')
  const app = connect()

  app.use(
    publicPath,
    serveStatic('./dist', {
      index: ['index.html', '/']
    })
  )

  app.listen(port, function () {
    console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}report.html`))
  })
} else {
  run(`vue-cli-service build ${args}`)
}