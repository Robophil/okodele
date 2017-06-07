'use strict';
const BootBot = require('bootbot')
const config = require('config')

//create new instant of bot
const bot = new BootBot({
  accessToken: config.get("pageAccessToken"),
  verifyToken: config.get("validationToken"),
  appSecret: config.get("appSecret")
})


bot.on('message', (payload, chat) => {
	const text = payload.message.text;
	console.log(`The user said: ${text}`)
})

bot.start()