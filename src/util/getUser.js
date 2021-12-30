const fetch = require("node-fetch");

module.exports = {
  async obj(id) {
    if(!id){
      return undefined;
    }
    const baseURL = "https://discord.com/api/v8/users/";
    const response = await fetch(`${baseURL}${id}`, {
      method: 'get',
      headers: { 'Authorization': `Bot ${process.env.TOKEN}` }
    })
    return await response.json();
  },
  async avatar(id, size) {
    const hash = await this.obj(id);
    return `https://cdn.discordapp.com/avatars/${id}/${hash.avatar}.${String(hash.avatar).startsWith("a_") ? "gif" : "png"}?size=${size}`;
  },
  async banner(id, size) {
    const hash = await this.obj(id);
    return `https://cdn.discordapp.com/banners/${id}/${hash.banner}.${String(hash.banner).startsWith("a_") ? "gif" : "png"}?size=${size}`;
  }
}
