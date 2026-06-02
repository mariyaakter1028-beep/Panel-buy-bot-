import { Telegraf, Markup } from "telegraf";
import fs from "fs";

import { BOT_TOKEN, ADMIN_ID } from "./config.js";

const bot = new Telegraf(BOT_TOKEN);

const panels = JSON.parse(
  fs.readFileSync("./data/panels.json")
);

bot.start(async (ctx) => {

  const buttons = panels.map(panel => [
    Markup.button.callback(
      `${panel.name} - $${panel.price}`,
      `buy_${panel.name}`
    )
  ]);

  await ctx.reply(
    "Welcome To Panel Shop",
    Markup.inlineKeyboard(buttons)
  );

});

bot.action(/buy_(.+)/, async (ctx) => {

  const panel = ctx.match[1];

  await ctx.reply(

`Panel: ${panel}

Payment Methods

Binance:
YOUR_BINANCE

bKash:
YOUR_BKASH

Nagad:
YOUR_NAGAD

After payment send:

1. Transaction ID
2. Gmail
3. Telegram Username`

  );

  await bot.telegram.sendMessage(
    ADMIN_ID,

`🛒 New Buy Request

User:
@${ctx.from.username}

User ID:
${ctx.from.id}

Panel:
${panel}`
  );

});

bot.launch();

console.log("Bot Running");
