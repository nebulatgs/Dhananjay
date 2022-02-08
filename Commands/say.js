exports.run = (client, message, args) => {
    const toSay = args.join(" ");
    if(!toSay) return message.channel.send({content: "Please provide something to say"});
    message.channel.send({content: toSay});
}

module.exports.name = "say"