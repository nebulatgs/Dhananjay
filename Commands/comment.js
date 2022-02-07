const { MessageAttachment } = require('discord.js');
const Meme = require("memer-api")
const memer = new Meme('FtjJT4yxjOj')

module.exports = {
    name: 'comment',
   run: async (client, message, args)=> {
        const user1 = message.member;

        const avatar = user1.user.displayAvatarURL({ dynamic: false })

        const text = args.join("")
        if (!text) return message.reply('Please provide a text!');

        const username = user1.user.username;

        memer.youtube(avatar, username, text).then(image => {
            const attachment = new MessageAttachment(image, "comment.png")
    
            message.channel.send(attachment)
        })
    }
}