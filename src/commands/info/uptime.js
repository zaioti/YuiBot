module.exports = {
    name: "uptime",
    aliases: ['u', 'ut'],
    run: async (bot, message) => {
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        
        message.reply(`Eu estou online há:\n• ${days} dia(s), ${hours} hora(s), ${minutes} minuto(s) e ${seconds} segundo(s).`);

    }
}
