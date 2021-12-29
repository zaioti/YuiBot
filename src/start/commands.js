const fs = require('fs')

module.exports = (bot) => {
  console.log('[*] Carregando comandos...');

  fs.readdirSync("./src/commands/").forEach(local => {
    const commands = fs.readdirSync(`./src/commands/${local}/`).filter(x => x.endsWith('.js'));
    for (let file of commands) {
      const command = require(`../commands/${local}/${file}`);

      if (command.name) {
        bot.commands.set(command.name, command);
      } else {
        continue;
      }
      if (command.aliases && Array.isArray(command.aliases))
        command.aliases.forEach(x => bot.aliases.set(x, command.name));
    }
  });
  console.log('[/] Comandos carregados!');
}
