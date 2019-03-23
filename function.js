module.exports = {
    embed: function(channel, message, timer){
        channel = channel.channel || channel;
        channel.send({embed:{
            description: message,
        }}).then(msg => {
            if (!isNaN(timer)) msg.delete({timeout: timer})
        })
    }
}
