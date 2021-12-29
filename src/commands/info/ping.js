module.exports = {
    name: "ping",
    aliases: ['p'],
    run: async (bot, message) => {
        const m = await message.channel.send("• Ping?");
        
        const info = `• Shard: **#${Number(bot.shard.ids) + 1}**\n• Latência do servidor: **${m.createdTimestamp  - message.createdTimestamp}ms**\n• Latência da API: **${Math.round(bot.ws.ping)}ms**`
        
        m.edit(info);
    }
}
