const { MessageEmbed } = require("discord.js")
const ShardData = require("../../util/sharding/shard.js");
    
module.exports = {
  name: "emoji",
  aliases: ['emojis', 'emojisearch', 'searchemoji', 'em'],
  run: async (bot, message, args) => {
    if (!args[0]) {
      message.reply(`• É necessário informar um parâmetro de pesquisa.`);
      return;
    }
    
    const emojiObj = await ShardData.GetEmojiByName(bot, args[0]) || await ShardData.GetEmojiByID(bot, args[0]);
    
    
    if (emojiObj === null) {
      message.reply(`• Esse emoji não está em nenhum servidor que eu estou.`);
      return;
    }
    
    message.channel.send(emojiObj.url);
    
  }
}
