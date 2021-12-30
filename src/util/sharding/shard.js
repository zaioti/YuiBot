const GetGuildByID = async (bot, guildId) => {
  const req = await bot.shard.broadcastEval((c, id) => c.guilds.cache.find(x => x.id == id), {
    context: guildId
  });
  return req.find(res => !!res) || null
}

const GetEmojiByName = async (bot, emojiName) => {
  const req = await bot.shard.broadcastEval((c, name) => c.emojis.cache.find(x => x.name == name), {
    context: emojiName
  });
  return req.find(res => !!res) || null
}

const GetEmojiByID = async (bot, emojiId) => {
  const req = await bot.shard.broadcastEval((c, id) => c.emojis.cache.find(x => x.id == id), {
    context: emojiId
  });
  return req.find(res => !!res) || null
}

const GetUserByID = async (bot, userId) => {
  const req = await bot.shard.broadcastEval((c, id) => c.users.cache.find(x => x.id == id), {
    context: userId
  });
  return req.find(res => !!res) || null
}

const GetUserByTag = async (bot, userTag) => {
  const req = await bot.shard.broadcastEval((c, tag) => c.users.cache.find(x => x.tag == tag), {
    context: userTag
  });
  return req.find(res => !!res) || null
}

module.exports = { GetGuildByID, GetEmojiByName, GetEmojiByID, GetUserByID, GetUserByTag }
