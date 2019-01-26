const token = process.env.token;
const Discord = require('discord.js');
const client = new Discord.Client();
const money = require('discord-money'); 
const config = require("./config.json");
const prefix = '?'
const db = require('quick.db');



client.on("message", async message => {
 
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	
     msg = message.content.toLocaleLowerCase();
     
     if(command ==="compt"){
     let user = message.mentions.users.first() || message.author;
     let balance = await db.fetch(`userBalance_${user.id}`);
     if (balance === null) balance = 0;
     message.channel.send(`${user.username} - Balance: $${balance}`);
     }

     if(commande ==="daily"){
       let cooldown = 8.64+7,
          amount = 250;
       let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
       if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0){
         let timeObj = ms(cooldown - (Date.now() - lastDaily));
         message.channel.send(`Patiente encore **${timeObj.hour}h ${timeObj.minutes}m**!`);

       }else{message.channel.send(`Tu as ressu $${amount}`);
      db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250);
         
            }

     }

	 
});
client.login(token);
