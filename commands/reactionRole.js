module.exports = {
    name: 'reactionrole',
    description: "this sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '844869423893708850';
        const yellowRole = message.guild.roles.cache.find(r => r.name === 'yellow');
        const blueRole = message.guild.roles.cache.find(r => r.name === 'blue');
        const yellowEmoji = '🍋';
        const blueEmoji = '🍇';

        if (!yellowRole || !blueRole) {
            message.react('❎');
            message.channel.send('Can\'t find roles!');
        }

        let embed = new Discord.MessageEmbed()
            .setColor('')
            .setTitle('Choose a color!')
            .setDescription('Choose a color lmao \n'
                + `${yellowEmoji} for yellow `
                + `${blueEmoji} for blue`);

        message.react('✅');
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowEmoji);
        messageEmbed.react(blueEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowRole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueRole);
                }
            } else {
                return;
            }
        })

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowRole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueRole);
                }
            } else {
                return;
            }
        })
    }
}