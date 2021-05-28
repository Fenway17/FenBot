const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const fs = require('fs');
client.commands = new Discord.Collection();

// define prefix to start a command
const prefix = '-f ';

const memberCounter = require('./counters/member-counter');

const commandFiles = fs.readdirSync('./commands/')
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('FenBot is online!');
    memberCounter(client);
})

// adding welcome role and welcome message
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Everyone Else');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('159634951912947712').send(`Welcome <@${guildMember.user.id}>!`);
})

// checking for commands in the messages
client.on('message', message => {
    // check for prefix
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // find command
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // command checker
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } if (command === 'restart') {
        client.commands.get('restart').execute(message, args, client);
    } else if (command === 'rahim' || command === 'zhiyang') {
        client.commands.get('gay').execute(message, args);
    } else if (command === 'poh') {
        client.commands.get('godsWork').execute(message, args);
    } else if (command === 'nice') {
        client.commands.get('giveAdmin').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command === 'shutdown') {
        client.commands.get('shutdown').execute(message, args, client);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'stop') {
        client.commands.get('stop').execute(message, args);
    }
})


// DO NOT SHARE THE KEY
client.login(
    'ODQ0ODUzODQ0MzExNDA4NjUw.YKYddQ.kmTIsqxXCt41jLRJarYy4lzy9MA');