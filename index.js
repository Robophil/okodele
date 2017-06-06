'use strict';
const BootBot = require('bootbot')
const config = require('config')

const bot = new BootBot({
  accessToken: 'FB_ACCESS_TOKEN',
  verifyToken: 'FB_VERIFY_TOKEN',
  appSecret: 'FB_APP_SECRET'
})