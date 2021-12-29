const { MessageEmbed } = require("discord.js");
const mention = require("../../util/getUserFromMention.js");
const request = require("../../util/getUser.js");
  
module.exports = {
    name: "banner",
    aliases: ['b', 'ba'],
    run: async (bot, message, args) => {
      let users = mention(bot, args[0]) || await request.obj(args[0]) || message.author;
      let user = await request.obj(users.id);
        
      if (user.banner === null) {
        message.reply("• O usuário informado não tem um banner!");
        return;
      } else {
          message.channel.send(await request.banner(user.id, 2048));
      }
    }
}
