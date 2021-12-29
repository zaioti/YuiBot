const { Client, Collection } = require("discord.js");
const fs = require("fs");
const bot = new Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES',
    'GUILD_MEMBERS',
    'GUILD_PRESENCES'
  ]
});

bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = new fs.readdirSync('./src/commands');

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["commands", "events"].forEach(x => require(`./start/${x}`)(bot));

// set status
bot.on('ready', (bot) => {
  bot.user.setStatus("dnd");
  console.log(`[@] Logado como: ${bot.user.tag}`);
});

bot.login(process.env.TOKEN);
