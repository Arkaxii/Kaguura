const token = process.env.token;
const Discord = require('discord.js');
const client = new Discord.Client();
const money = require('discord-money'); 
const moment = require('moment');


client.on("message", message => {



    function World_of_warcraft(){
        message.reply("Et c'etai world of warcraft")
    }
    function Portal(){
        message.reply("Et c'etai Portal")
    }

    function random(min, max){
        min = Math.ceil(1);
        max = Math.floor(22);
        randnum = Math.floor(Math.random() * (max - min +1) +min);
        }  

    var prefix = '?';

    if(message.content.startsWith(prefix + "refjeux")){
        random();

        if (randnum == 1){
            message.reply(" «c'est une vrai dent de requin faite en résine!»  (vous avez 30s)")
            setTimeout( World_of_warcraft , 30000);
        
        if(message.content.startsWith("world of warcraft")){
            money.updateBal(message.author.id, 500)
            message.reply("gg")
        } }
        if (randnum == 2){
            message.reply(" «The cake is a lie»  (vous avez 30s)")
            setTimeout( Portal , 30000);

            if(message.content.startsWith("portal")){
                money.updateBal(message.author.id, 500)
                message.reply("gg")
            }}
    }
        
});
client.login(token);
