const Telegraf = require('telegraf')
const TelegrafInlineMenu = require('telegraf-inline-menu')

const menu = new TelegrafInlineMenu(ctx => `Hey ${ctx.from.first_name}!`)
menu.setCommand('start')

menu.simpleButton('I am excited!', 'a', {
    doFunc: ctx => {
        ctx.reply('As am I!');
        ctx.answerCbQuery();
    }
})
menu.simpleButton('مهندس میر اسماعیلی سلام', 'b', {
    doFunc: ctx => {
         ctx.reply('چه خبر مهندس به ربات من خوش اومدی!');
         ctx.answerCbQuery();
    }
})


const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(menu.init())

bot.startPolling()
