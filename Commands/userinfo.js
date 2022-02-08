const { Client, MessageEmbed , MessageActionRow, MessageButton} = require("discord.js");
module.exports = {
    name: "userinfo",
    run: async (client, message, args) => {

        const u = message.mentions.users.first() || message.author
        const uu = message.guild.members.cache.get(u.id)
        const ee = new MessageActionRow().addComponents(
            new MessageButton()
        .setLabel(`Main info`)
        .setEmoji(`ℹ`)
        .setCustomId(`main`)
        .setDisabled(true)
        .setStyle(`PRIMARY`),
        new MessageButton()
             .setLabel(`Roles info`)
             .setStyle(`PRIMARY`)
             .setEmoji(`ℹ`)
             .setCustomId(`roles`),
             new MessageButton()
             .setLabel(`Permissions`)
             .setStyle(`PRIMARY`)
             .setEmoji(`ℹ`)
             .setCustomId(`permissions`)
        
          ); 
       const e = new MessageEmbed()
       .setAuthor(`${u.username}`,`${u.avatarURL({dynamic : true}) }`)
       .addField(`Name : `,`${u.username}`,true)
       .addField(`Id : `,`${u.id}`,true)
       .addField(`User created at : `,`<t:${parseInt(u.createdAt / 1000)}:R>`,true)
       .addField(`User joined at : `,`<t:${parseInt(uu.joinedAt / 1000)}:R>`,true)
       .addField(`Nickname : `,`${uu.nickname || `None`}`,true)
       .addField(`Presence : `,`${uu.presence?.status || `offline`}`,true)
       .setColor(`RANDOM`)
       .setThumbnail(`${u.displayAvatarURL({size : 1024 , dynamic : true})}`)
       message.channel.send({embeds : [e] , components : [ee]})
       const f = i => i.customId === `main` || i.customId === `roles`  && i.u.id === message.author.id
       const c = message.channel.createMessageComponentCollector({ f, time: 30000 });
       c.on(`collect`, i => {
           i.deferUpdate()
        if (i.customId === 'main') {
            message.channel.send({embeds : [e] , components : [ee]})
        }
        if(i.customId === `roles`) {
            const eeee = new MessageActionRow().addComponents(
                new MessageButton()
            .setLabel(`Main info`)
            .setEmoji(`ℹ`)
            .setCustomId(`main`)
            .setDisabled(false)
            .setStyle(`PRIMARY`),
            new MessageButton()
                 .setLabel(`Roles info`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`ℹ`)
                 .setDisabled(true)
                 .setCustomId(`roles`),
                 new MessageButton()
                 .setLabel(`Permissions`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`ℹ`)
                 .setCustomId(`permissions`)
              ); 
            const eee = new MessageEmbed()
            .setAuthor(`${u.username}`,`${u.avatarURL({dynamic : true}) }`)
          .addField(`Roles : `,`${uu.roles.cache.map(r => r).sort((first, second) => second.position - first.position).join(`, `)}`,true)
          .addField(`Highest role : `,`${uu.roles.highest}`,true)
            .setColor(`RANDOM`)
            .setThumbnail(`${u.displayAvatarURL({size : 1024 , dynamic : true})}`)
            message.channel.send({embeds : [eee] , components : [eeee]})
        }
        if(i.customId === `permissions`) {
            const eeeee = new MessageActionRow().addComponents(
                new MessageButton()
            .setLabel(`Main info`)
            .setEmoji(`ℹ`)
            .setCustomId(`main`)
            .setStyle(`PRIMARY`),
            new MessageButton()
                 .setLabel(`Roles info`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`ℹ`)
                 .setCustomId(`roles`),
                 new MessageButton()
                 .setLabel(`Permissions`)
                 .setStyle(`PRIMARY`)
                 .setEmoji(`ℹ`)
                 .setDisabled(true)
                 .setCustomId(`permissions`)
              ); 
              const eee2= new MessageEmbed()
              .setAuthor(`${u.username}`,`${u.avatarURL({dynamic : true}) }`)
            .addField(`Permissions : `,`\`\`\`${uu.permissions.toArray().join(` | `)}\`\`\``,true)
              .setColor(`RANDOM`)
              .setThumbnail(`${u.displayAvatarURL({size : 1024 , dynamic : true})}`)
              message.channel.send({embeds : [eee2] , components : [eeeee]})
        }
       })
    }
}
