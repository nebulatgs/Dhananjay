const { MessageEmbed, Message, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
 name: 'avatar',
 description: "Displays user's avatar",
 aliases: ['av'], //aliases
 run: async(client, message, args) => {
 const AvatarButtons = new MessageActionRow()
 .addComponents(
 new MessageButton()
 .setLabel('PNG')
 .setURL(message.author.displayAvatarURL({ size: 4096, dynamic: true, format: "png"}), true)
 .setStyle('LINK'),
 new MessageButton()
 .setLabel('JPG')
 .setURL(message.author.displayAvatarURL({ size: 4096, dynamic: true, format: "jpg"}), true)
 .setStyle("LINK"),
 new MessageButton()
 .setLabel('WEBP')
 .setURL(message.author.displayAvatarURL({ size: 4096, dynamic: true, format: "webp"}), true)
 .setStyle("LINK")
 );
 let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

 let embed = new MessageEmbed()
 .setAuthor(`${user.username}'s Avatar`, message.author.displayAvatarURL())

 .addField('PNG', `\n[\`LINK\`](${user.displayAvatarURL({ size: 4096, dynamic: true, format: "png" })})`, true, true)
 .addField('JPG', `\n[\`LINK\`](${user.displayAvatarURL({ size: 4096, dynamic: true, format: "jpg" })})`, true, true)
 .addField('WEBP', `\n[\`LINK\`](${user.displayAvatarURL({ size: 4096, dynamic: true, format: "webp" })})`, true, true)

 .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
 .setThumbnail(message.guild.iconURL())
 .setTimestamp()
 message.channel.send({ embeds: [embed], components:[AvatarButtons] })
 }
}