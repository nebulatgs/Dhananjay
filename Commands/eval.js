const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "eval",
  description: "Evaluate a given code!",
  botPerms: ["EMBED_LINKS"],
  
  run: async (client, message, args) => {

    if(message.author.id === '767627938433597450') {
    try {
      const code = args.join(" ");
      if (!code) {
        return message.channel.send("Pls Provide A code to eval!");
      }
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      let embed = new MessageEmbed()
        .setAuthor("Eval", message.author.avatarURL())
        .addField("Input", `\`\`\`${code}\`\`\``)
        .addField("Output", `\`\`\`${evaled}\`\`\``)
        .setColor("BLUE");

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`js\n${err}\n\`\`\``);
    }
  } else {
      let lol = new MessageEmbed()
      .setDescription('Its Not Your Bot! its Dev Only Command!')
      .setColor('#2F3136')
      let lmao = new MessageEmbed()
      .setDescription('😏')
      .setColor('#2F3136')
      message.channel.send({embeds: [lol, lmao]})
  }
}
}