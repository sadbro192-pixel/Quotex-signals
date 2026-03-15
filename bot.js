const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Quotex Signals Bot Active!'));
bot.on('text', (ctx) => ctx.reply('Message received: ' + ctx.message.text));

exports.handler = async (event) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: "" };
  } catch (e) {
    return { statusCode: 400, body: "Error" };
  }
};
