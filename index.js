const Discord = require('discord.js');
const colors = require("colors");
const fs = require('fs');
const os = require('os');
const si = require('systeminformation');
const config = require('./config.json');

const prefix = "d!";

const client = new Discord.Client({
    intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS'],
    allowedMentions: ["users"]
});

client.on('ready', () => {
    client.user.setActivity("Zayn < 3", {type: "WATCHING"});
    client.user.setStatus("dnd");
    console.log(`Logged in as ${client.user.tag}!`.bgGreen);
});

client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for(file of commands) {
    const commandName = file.split(".")[0]
    const command = require(`./Commands/${commandName}`)
    client.commands.set(commandName, command)
}


// discordjs on message
client.on('messageCreate', message => {
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const commandName = args.shift()
        const command = client.commands.get(commandName)
        if(!command) return // message.channel.send({content: "Command not found"})
        command.run(client, message, args)
    }
});



client.login(process.env.TOKEN || config.token);