const fs = require('fs')

module.exports = (bot) => {
  console.log('[*] Carregando eventos...');

  const c = local => {
    const events = fs.readdirSync(`./src/events/${local}/`).filter(x => x.endsWith('.js'));
    for (let file of events) {
      const l = require(`../events/${local}/${file}`);
      let name = file.split('.')[0];
      bot.on(name, l.bind(null, bot));
    }
  }

  ["bot"].forEach(x => c(x));
  console.log('[/] Eventos carregados!');
}
