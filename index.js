const token = process.env.token;
const {Client} = require('discord.js');
const client = new Client({ disableEveryone: true});
const prefix = '?'
const fs = require('fs');
const ytdl = require('ytdl-core');

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message' , async  msg =>{

    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');

    if (msg.content.startsWith(`${prefix}play`)){
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('Tu dois te connecter a un vocal');
        const permission = voiceChannel.permissionsFor(msg.client.user);
        if (!permission.has('CONNECT')){
            return msg.channel.send(`Je ne peut pas me connecter a ce salon`);
        }
        if (!permission.has('SPEAK')){
            return msg.channel.send(`Je ne peut pas parler dans ce salon`);
        }
        try{
            var connection = await voiceChannel.join();
        } catch (error){
            console.error(`Impossible de rejoindre le voice channel car: ${error}`);
            return msg.channel.send(`je ne peut pas rejoindre le salon: ${error}`);
        }
        const dispatcher = connection.playStream(ytd(args[1]))
        .on('end' , () => {
            console.log('song ended');
        })
        .on('error' , error => {
            console.error(error);
        });
        dispatcher.setVolumeLogarithmic(5 / 5);
    }


});

client.login(token); 
