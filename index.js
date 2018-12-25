const token = process.env.token;
const Discord = require("discord.js");


const client = new Discord.Client();
const prefix = '?';

const config = require("./config.json");


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    
    if(message.content.startsWith(prefix + "ping")){
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latence de ${m.createdTimestamp - message.createdTimestamp}ms. API Latence de ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Désoler, tu n'as pas la permission d'utiliser cette commande!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Veuiller mentionner un utilisateur valide");
    if(!member.kickable) 
      return message.reply("Je ne peut pas le kick ! As-tu un role moin haut que le sien, as-tu la permission pour le kick?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Pour aucune raison";
    
    await member.kick(reason)
      .catch(error => message.reply(`Désoler ${message.author} je ne peut pas le ban car : ${error}`));
    message.reply(`${member.user.tag} a été ban par ${message.author.tag} car: ${reason}`);

  }
  
  if(command === "ban") {
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Désoler, tu n'as pas la permission d'utiliser cette commande!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Veuiller mentionner un utilisateur valide");
    if(!member.bannable) 
      return message.reply("Je ne peut pas le ban ! As-tu un role moin haut que le sien, as-tu la permission pour le ban?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Pour aucune raison";
    
    await member.ban(reason)
      .catch(error => message.reply(`Désoler ${message.author} je ne peut pas le ban car : ${error}`));
    message.reply(`${member.user.tag} a été ban par ${message.author.tag} car: ${reason}`);
  }
  
  if(command === "purge") {
    
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Veuillez selectionner un nombre entre 2 et 100 pour procéder à la purge");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Impossible de purger car: ${error}`));
  }
});
client.login(token);
