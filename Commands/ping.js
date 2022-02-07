module.exports.run = (client, message, args) => {
    message.channel.send("Pinging...").then(msg => {
        msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms`);
    });
}

module.exports.name = "ping"