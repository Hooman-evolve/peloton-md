require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Replace with your token in .env
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🚴 Welcome to Peloton.md bot! More features coming soon.");
});