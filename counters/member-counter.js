const ms = require('ms');
module.exports = async (client) => {
    const guild = client.guilds.cache.get('159634951912947712');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('845212160329646110');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, ms('5m'));
}