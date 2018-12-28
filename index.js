const token = process.env.token;
const Discord = require('discord.js');
const client = new Discord.Client();
/* const money = require('discord-money'); 
const config = require("./config.json"); */

const prefix = '?'

//information about the bot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations About Rainbow bot:')
  console.log('')
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Arch! [ " ${process.arch} " ]`);
  console.log(`Platform! [ " ${process.platform} " ]`);
  console.log(`Node Version! [ " ${process.version}" ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(`Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(`${client.user.username} Is Online`)
  console.log('╚[════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log('Created By: Revenge')
  console.log('╚[════════════]╝')
client.user.setActivity("r#help | By Revenge",{type: 'WATCHING'});
console.log('Done The Watching Setup Completed')
	
});
/*
client.on('message', message => {
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'set')) {
	  let role = message.guild.roles.find('name', 'Rainbow .')
    if(role) return message.channel.send(`Cette étape a deja été accomplis !`)
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow .",
   color: "#000000",
   permissions:[]
})
}
message.channel.send('Le role Rainbow a été crée avec succès! Penser a le metre tout en haut de la liste de roles ! ')
}})
client.on('ready', () => {
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Rainbow .');
                  if (role) {
                      role.edit({color : "RANDOM" });
                  };
      });
  }, 1000);
})

*/

  
  

  client.on("message", async message => {
      
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  if(command === "rainbow") {
    if(!message.member.permissions.has('ADMINISTRATOR') )
    return message.reply("Cette commande est réserver aux Admin");
    let rolerain = message.mentions.roles.first();
if(!rolerain)
  return message.reply("Veuiller mentionner un role valide");
}

client.on('ready', () => {
        setInterval(function(){
            client.guilds.forEach(g => {
                        var rolerain = g.roles.find(rolerain);
                        if (rolerain) {
                            rolerain.edit({color : "RANDOM" });
                        };
            });
        }, 1000);

    })




          
            }); 


client.login(token);
