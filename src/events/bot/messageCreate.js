const { MessageEmbed } = require('discord.js');

module.exports = async (bot, message) => {
  if (message.author.bot) return;
  if (message.webhookID) return;
  if (message.channel.type == "dm") return;
  // cache
  if (!message.member) {
    await message.guild.members.fetch(message.author.id);
  }
  var prefixo;
  prefixo = { default: true, value: ">" }; // troque o prefixo aqui
  //mention prefix
  const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const prefixRegex = new RegExp(`^(<@!?${bot.user.id}>|${escapeRegex(prefixo.value)})\\s*`);
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  //--
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) {
    if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) {
      let embPrefix = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`Meu prefixo é: \`${prefixo.value}\``)
      message.channel.send({ embeds: [embPrefix] });
      return;
    }
    return;
  }
  var command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));
  if (command) command.run(bot, message, args, prefixo);
  if (!command) {
    const emb = new MessageEmbed()
      .setColor("RED")
      .setDescription(`Comando \`${cmd}\` não encontrado.`);
    message.channel.send({ embeds: [emb] });
    return;
  }
  
}
