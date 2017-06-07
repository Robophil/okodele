'use strict';
const BootBot = require('bootbot')
const config = require('config')

const bot = new BootBot({
  accessToken: config.get("pageAccessToken"),
  verifyToken: config.get("validationToken"),
  appSecret: config.get("appSecret")
})