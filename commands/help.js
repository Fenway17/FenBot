module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args, Discord) {
        message.react('✅');

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#728EF0')
        .setTitle('List of commands: ')
        .setDescription('Use "-f" to execute commands')
        .addFields(
            {name: 'Music bot:', 
            value: `<Play music from Youtube!>
            play <title> : play video from Youtube in voice channel.
            stop : stop the music bot. \n`},
            {name: 'Useful commands:', 
            value: `<For server owners / admins>
            clear <number> : clear <number> messages.
            kick @member : kick member.
            ban @member : ban member.
            mute @member : mute member indefinitely.
            mute @member <number><time> : mute member for <number> <time>. (eg: 10h)
            unmute @member : ummute member. \n`},
            {name: 'Non-essential commands:', 
            value: `<These are commands for fun>
            reactionrole : become yellow or blue lol.
            ping : play ping-pong with the bot!
            nice : nice.
            Rahim / Zhiyang / Poh : OMEGALUL
            restart : Attempt to restart bot.
            shutdown : Attempt to shutdown bot.`},
        )
        .attachFiles(['./assets/popcatsmile.png'])
        .setImage('attachment://popcatsmile.png')
        .attachFiles(['./assets/me.png'])
        .setFooter('Made by: FenwayYR#1077. (alpha.v.1.0.0)', 
        'attachment://me.png');
        // .setTimestamp();

        message.channel.send(newEmbed);
    }
}