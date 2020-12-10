/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 21:43:46
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 13:47:24
 */
const fs = require('fs')
const path = require('path')

const tokens = {
  admin: {
    token: 'admin-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  }
}

const isRepeat = (config) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data/user.json'), 'utf8')
  )
  const signUsername = config.body.username
  /** 验证用户名是否重复 */
  const reslt = data.userInfo.find((val, index, arr) => {
    return val.username === signUsername
  })

  if (!reslt) {
    console.log(reslt)
    const stringdata = JSON.stringify(data)
    const users = JSON.stringify(config.body)
    let writeData = ''
    if (stringdata.length <= 15) {
      // 初始值
      writeData = stringdata.replace(/]\}$/g, '').concat(`${users}]}`)
    } else {
      writeData = stringdata.replace(/]\}$/g, '').concat(`,${users}]}`)
    }
    fs.writeFileSync(
      path.join(__dirname, 'data/user.json'),
      writeData,
      { flags: 'a' },
      function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log('ok')
        }
      }
    )
    return false
  } else {
    return true
  }
}

export default [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  // signup
  {
    url: '/vue-admin-template/user/signup',
    type: 'post',
    response: config => {
      const repeat = isRepeat(config)
      if (repeat === true) {
        return {
          code: 20000,
          repeat: 2,
          message: '用户名已被注册'
        }
      } else {
        return {
          code: 20000,
          repeat: 1,
          data: 'success'
        }
      }
    }
  }
]
