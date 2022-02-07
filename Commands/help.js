const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const commands = client.commands.map(command => command.name).join(", ")
    const embed = new Discord.MessageEmbed()
    .setTitle(`<:Bruh_02:931125621617225788> Helpo Menu`)
    .addField("<:PepeHappy:872476990106664970> Fun", "`d!akinator`,`d!say`,`d!coinflip`")
    .addField("<:pepecool:875757067774857296> Moderation", "`d!ban`")
    .addField("<:Ayo_What:931126014459908146> Admin", "`Under Work!!!`")
    .addField("<:Perfect:931125895719157800> Info", "`d!avatar`,`d!ping`,`d!serverinfo`,`d!userinfo`")
    .addField("<:pepelove6:938827118899499038> Developer", "`d!changestatus`,`d!shutdown`")
    .setFooter(`Thanks For Using Me!`)
    .addField(`<:discord_bot_dev:915525441249501207>  Source Code`, `[Click Here](https://github.com/ItsZaynMalik/Dhananjay)`)

    message.channel.send({embeds: [embed]})
}

exports.name = "help"