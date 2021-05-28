const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "this is the mute command!",
    execute(message, args) {

        // only I or server admins can mute for safety reasons
        if (message.author.id != '233159054736883712'
            && !message.member.hasPermission({ checkOwner: true })
            && !message.member.hasPermission({ checkAdmin: true })) {
            message.react('❎');
            message.channel.send('You are not the server admin / creator!');
            return;
        }

        const target = message.mentions.users.first();
        if (!target) {
            message.react('❎');
            message.channel.send('Can\'t find member!');
            return;
        }

        let mainRole = message.guild.roles.cache
            .find(r => r.name === 'Everyone Else');
        let muteRole = message.guild.roles.cache
            .find(r => r.name === 'chat restricted hAHA');

        let memberTarget = message.guild.members.cache.get(target.id);

        if (!mainRole || !muteRole) {
            message.react('❎');
            message.channel.send('Can\'t find roles!');
            return;
        }

        if (!args[1] || isNaN(ms(args[1]))) {
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.react('✅');
            message.channel.send(`<@${memberTarget.user.id}> has been muted indefinitely!`);
            return;
        }

        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        message.react('✅');
        message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}!`);
        setTimeout(function () {
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted!`);
        }, ms(args[1]));
    }
}