const Discord = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: 'ban',
    aliases: [],
    usage: ["%ban <user>"],
    description: "This command ban a member!",
    run(client, message, args){

        const GuildMember = message.member;
        if(!GuildMember.permissions.has("BAN_MEMBERS")) return message.channel.send({ content: "You do not have permissions to do that!", })

        const target = message.mentions.users.first();
        if(!target) return message.reply({ content: "Who are trying to ban? the chat?" })
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            message.delete();
            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId("2")
                .setLabel("Approve Ban")
                .setStyle("SUCCESS")
                .setEmoji("✅"),
                new MessageButton()
                .setCustomId("1")
                .setEmoji("🚫")
                .setLabel("Disallow Ban")
                .setStyle("DANGER"),
            )
            const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId("1")
                .setEmoji("🚫")
                .setLabel("Disallow Ban")
                .setDisabled(true)
                .setStyle("DANGER")
            )
            const filter1 = i => i.customId === "2" && i.user.id;

            const collector = message.channel.createMessageComponentCollector({ filter1 });

            collector.on('collect', async i => {
                if (i.customId === "2") {
                    i.update({ content: "**Member Banned**", components: [] })
                    memberTarget.ban();
                }
            })
            const filter2 = b => b.customId === "1" && i.user.id;

            const collectorr = message.channel.createMessageComponentCollector({ filter2 });
            
            collectorr.on('collect', async b => {
                if (b.customId === "1") {
                    b.update({ content: "**Member Not Banned**", components: [] })
                }
            })
            message.channel.send({ content: "**Ban!!**", components: [row] })
        }
        }
    }