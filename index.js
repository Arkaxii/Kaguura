const token = process.env.token;
const Discord = require('discord.js');
const client = new Discord.Client();
const money = require('discord-money'); 
const db = require('quick.db');
const config = require("./config.json");
const prefix = '?'

//information about the bot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('+[-----------------------------------------------------------------]+')
  console.log(`[Start] ${new Date()}`);
  console.log('+[-----------------------------------------------------------------]+')
  console.log('')
  console.log('+[-------------------------------------]+');
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
  console.log('+[------------------------------------]+')
  console.log('')
  console.log('+[------------]+')
  console.log(`${client.user.username} Is Online`)
  console.log('+[------------]+')
  console.log('')
  console.log('+[------------]+')
  console.log('Created By: Revenge')
  console.log('+[------------]+')
client.user.setActivity("r#help | By Revenge",{type: 'WATCHING'});
console.log('Done The Watching Setup Completed')

});


 client.on("message", message => {
  if (message.content === "?help") {
      message.react('??')
        let helpem = new Discord.RichEmbed()
	.setTitle(`Requested By | ${message.author.username}`)
        .setDescription(`**
=====================?? KaguraHelp+ ??=====================

**Admin**
?help admin

**Rolplay:**
?wink
?wave  
?sleep
?wake-up 
?slap 
?punch
?poke
?pat
?kiss
?kill
?hug

**utilitaire:**
?sondage: **Fait un sondage pour avoir l'avie d'autre personne**
?info kagura: **Toute les infos a propo de Kagura**
?info discord: **Les info du serveur**
?secret: **Les prochain ajout sur le bot**
?avatar: **Recupere l'avatar pour l'afficher plus grand **
?ping: **Pour connaitre son ping**
?say: **Fait dir ce que tu veut au bot **
?inv: **Envoie un mp pour inviter le bot dans d'autre serveur**
?mes infos: **Donne des infos comme le pseudo avec # la pp et quant le compte a été crée**
?info: ** Donne les info de la personne pinger** 

**Argent:** (qui ne sert a rien pour l'instant)
?compt: **pour voir à combien s'élève ton compt**
?daily: **pour recevoir 500$ par jour**
?pierre / ?papier / ?ciseaux : **pour gagnier 50 $ ou perdre 10$**

**Jeux:**
?8ball: **Pose n'importe quelle question**
?refjeux: **trouve à quelle jeux appartien la référence **
?refanime: **trouve à quelle anime appartien la référence **
??quiz: **Tester votre QI **

**Random:**
?pile: **1 chance sur 2**
?face: **1 chance sur 2**
?lancer6: **imite un lancer de dé à 6 face **
?lancer12: **imite un lancer de dé à 12 face **
?lancer20:** imite un lancer de dé à 20 face**

=====================?? KaguraHelp+ ??=====================
**`)
	.setFooter(`created by ???????????Arkaxii#5194 `)
message.channel.send(helpem);
  }

    if (message.content === "?help admin") {
        if(!message.member.permissions.has('ADMINISTRATOR') )
        return message.reply("Désoler, tu n'as pas la permission d'utiliser cette commande!" );
        message.react('??')
          let helpem = new Discord.RichEmbed()
      .setTitle(`Requested By | ${message.author.username}`)
          .setDescription(`**
  =====================?? KaguraHelp+ ??=====================
  
?rainbow: **Change la couleur d'un role en random**
?purge: **Peut suprimer de 2 a 100 message **
?kick
?ban

SI LE RAINBOW NE FONCTIONNE PAS:
Assurez-vous que le role rainbow soit le plus haut possible
il change de couleur toute les minutes

  =====================?? KaguraHelp+ ??=====================
  **`)
      .setFooter(`created by ???????????Arkaxii#5194 `)
  message.channel.send(helpem);
      }})

   client.on('message', message => {
	   if(message.content.startsWith(prefix + `inv`)) {
		   if(!message.channel.guild) return;
                 message.react('??')
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " ?")
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
		   message.author.send({embed})
	   }
   });

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

client.on ("ready", () => {
answered = true;
cAnswer = "";
userAnswer = "";
});

client.on("message", async message => {
 
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	
	 msg = message.content.toLocaleLowerCase();

 if(command === "rainbow") {
    if(!message.member.permissions.has('ADMINISTRATOR') )
    return message.reply("Cette commande est réserver aux Admin");
    let rolerain = message.mentions.roles.first();
if(!rolerain)
  return message.reply("Veuiller mentionner un role valide");
        setInterval(function(){
       rolerain.setColor('RANDOM')
 }, 1000);
	     message.channel.send(`le role ${rolerain} a été definit comme rainbow`)
}

if(command ==="cancel"){
    if(!message.member.permissions.has('ADMINISTRATOR') )
    return message.reply("Cette commande est réserver aux Admin");
    let rolerain = message.mentions.roles.first();
    if(!rolerain)
      return message.reply("Veuiller mentionner un role avec le rainbow actif");
           rolerain.setColor('RANDOM')
           message.channel.send(`le role ${rolerain} n'a plus le rainbow actif`)
}

    if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latence de ${m.createdTimestamp - message.createdTimestamp}ms. API Latence de ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    if(!message.member.permissions.has('ADMINISTRATOR') )
      return message.reply("Désoler, tu n'as pas la permission d'utiliser cette commande!" );
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
    if(!message.member.permissions.has('ADMINISTRATOR') )
      return message.reply("Désoler, tu n'as pas la permission d'utiliser cette commande!" );
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Veuiller mentionner un utilisateur valide");
    if(!member.bannable) 
      return message.reply("Je ne peut pas le ban ! As-tu un role moin haut que le sien, as-tu la permission pour le ban? ");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Pour aucune raison";
    
    await member.ban(reason)
      .catch(error => message.reply(`Désoler ${message.author} je ne peut pas le ban car : ${error}`));
    message.reply(`${member.user.tag} a été ban par ${message.author.tag} car: ${reason}`);
  }
  
  if(command === "purge") {
    if(!message.member.permissions.has('ADMINISTRATOR') )
    return message.reply("Désoler, tu n'as pas la permission d'utiliser cette commande!");
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Veuillez selectionner un nombre entre 2 et 100 pour procéder à la purge");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Impossible de purger car: ${error}`));
  } 
	
         if(command ==="compt"){
     let user = message.mentions.users.first() || message.author;
     let balance = await db.fetch(`userBalance_${user.id}`);
     if (balance === null) balance = 0;
     message.channel.send(`${user.username} - Balance: $${balance}`);
     }

     if(command ==="daily"){
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
	
     if(command ==="pay"){
       if(!message.mentions.members.first())
       return message.channel.send("Mentionne un utilisateur!");
       let target = message.mentions.members.first(),
       amount = parseInt(args.join('').replace(target, ''));
       if(isNaN(amount)) 
       return message.channel.send("**Fait pas ton radin et défini un montant!**");
       let targetBalance = await db.fetch(`userBalance_${target.id}`),
           selfBalance = await db.fetch(`userBalance_${message.author.id}`);
           if (targetBalance === null) targetBalance = 0;
           if (selfBalance === null) selfBalance = 0;
           if (amount > selfBalance) 
           return message.channel.send("**Ne donne pas plus que ce que tu as!**");
           db.add(`userBalance_${target.id}`,amount);
           db.subtract(`userBalance_${message.author.id}`, amount);
           message.channel.send(`**Tu as donner $${amount} a ${target.user.tag}!**`)

     }
	
	if(command === "arkapay"){
      if(message.author.id !== config.ownerID)            
      return message.reply("Tu t'attendais a quoi? Cette commande est reserver à mon créateur");
      let target = message.mentions.members.first();
      if(!target)
        return message.reply("Faut mentionner quelqu'un!");
      let amount = parseInt(args.join('').replace(target, ''));
       if(isNaN(amount)) 
       return message.channel.send("Tu n'as pas mis de montant!");
       let targetBalance = await db.fetch(`userBalance_${target.id}`);
       if (targetBalance === null) targetBalance = 0;
       db.add(`userBalance_${target.id}`,amount);
       message.channel.send(`**Tu as donner $${amount} a ${target.user.tag}!**`)


     }


            if(command === "wink") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner un utilisateur valide, sauf si tu n'as pas d'amis pour fair cette commande *touss touss*");

                var wiink = [
                    "https://i.imgur.com/5n9LYXg.gif",
                    "https://imgur.com/eRv5luq.gif",
                    "https://imgur.com/jGDdgkW.gif",
                    "https://imgur.com/kobSUlH.gif",
                    "https://imgur.com/lRhpexU.gif",
                    "https://imgur.com/Rejo99g.gif",
                    "https://imgur.com/nufEMto.gif"
                    
                ];
            
                var gif = wiink[Math.floor(Math.random() * wiink.length)] ;
                var wink_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
		        .setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** fait un clin d'oeil à **${member.displayName}**._`)
                message.channel.send(wink_embed);
            };

            if(command === "wave") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Mentionne un utilisateur valide, sauf si tu n'as pas d'amis pour fair cette commande *touss touss*");

                var waave = [
                    "https://imgur.com/3WiKvti.gif",
                    "https://imgur.com/Jj6OGE5.gif",
                    "https://imgur.com/ZZNqt61.gif",
                    "https://imgur.com/xBqcMMi.gif",
                    "https://imgur.com/7fBOonX.gif",
                    "https://imgur.com/l6l863y.gif",
                    "https://imgur.com/uOt1pQu.gif"      
                            ];
             
                var gif = waave[Math.floor(Math.random() * waave.length)] ;
                var wave_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
		        .setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** fait un coucou à **${member.displayName}**._`)
                message.channel.send(wave_embed);
            };

            if(command === "sleep") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner un coussin eu je voulai dire un utilisateur valide");

                var sleeep = [
                    "https://imgur.com/2gskFDV.gif",
                    "https://imgur.com/OWzHrK8.gif",
                    "https://imgur.com/hy96rog.gif",
                    "https://imgur.com/mvWsLSR.gif",
                    "https://imgur.com/3dvv35R.gif",
                    "https://imgur.com/f8TdAv2.gif",
                    "https://imgur.com/gnXArt6.gif"
      
                            ];
             
                var gif = sleeep[Math.floor(Math.random() * sleeep.length)] ;
                var sleep_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
		        .setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** dort sur **${member.displayName}**._Attention aux filet de bave!`)
                message.channel.send(sleep_embed);
            };

            if(command === "wake-up") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner un utilisateur valide");

                var waake = [
                    "https://imgur.com/DmlqHdo.gif",
                    "https://imgur.com/pMqMuG9.gif",
                    "https://imgur.com/SGxUKOO.gif",
                    "https://imgur.com/3XtI1o0.gif",
                    "https://imgur.com/XxvPtMl.gif",
                    "https://imgur.com/UzI7m3R?gif"
      
                            ];
             
                var gif = waake[Math.floor(Math.random() * waake.length)] ;
                var wake_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
	        	.setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** réveille **${member.displayName}**._`)
                message.channel.send(wake_embed);
            };

            if(command === "slap") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner une victi... un utilisateur valide");

                var slaap = [
                    "https://imgur.com/ihi7y0U.gif",
                    "https://imgur.com/juJH8mr.gif",
                    "https://imgur.com/JUVQqKk.gif",
                    "https://imgur.com/zAgmwZg.gif",
                    "https://imgur.com/kbroB2h.gif",
                    "https://imgur.com/tMeekWB.gif",
                    "https://imgur.com/sQsdSEF.gif",
                    "https://imgur.com/xsl1mfm.gif"
      
                            ];
             
                var gif = slaap[Math.floor(Math.random() * slaap.length)] ;
                var slap_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
	         	.setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** écrase les moustiques qui sont sur **${member.displayName}**._`)
                message.channel.send(slap_embed);
            };

            if(command === "punch") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner un punching... un utilisateur valide");

                var puunch = [
                    "https://imgur.com/HyMjVgS.gif",
                    "https://imgur.com/x3AFwHJ.gif",
                    "https://imgur.com/acMxPWB.gif",
                    "https://imgur.com/7ZuHTId.gif",
                    "https://imgur.com/QTUJ6UF.gif",
                    "https://imgur.com/VxVNgya.gif"

      
                            ];
             
                var gif = puunch[Math.floor(Math.random() * puunch.length)] ;
                var punch_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
		        .setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** met une bonne grosse patate à **${member.displayName}**._`)
                message.channel.send(punch_embed);
            };

            if(command === "poke") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner un utilisateur valide, sauf si tu n'as pas d'amis pour fair cette commande *touss touss*");

                var pooke = [
                    "https://imgur.com/hFby4cs.gif",
                    "https://imgur.com/n6U8lZG.gif",
                    "https://imgur.com/IfhivGM.gif",
                    "https://imgur.com/ShoP93K.gif",
                    "https://imgur.com/57b84sF.gif",
                    "https://imgur.com/iGFsH0w.gif",
                    "https://imgur.com/vjfKWYp.gif"
                    
                            ];
             
                var gif = pooke[Math.floor(Math.random() * pooke.length)] ;
                var poke_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
		        .setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** poke **${member.displayName}**._`)
                message.channel.send(poke_embed);
            };

            if(command === "pat") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner un utilisateur valide, sauf si tu n'as pas d'amis pour fair cette commande *touss touss*");

                var paat = [
                    "https://imgur.com/AvUkatg.gif",
                    "https://imgur.com/Q9J7XNn.gif",
                    "https://imgur.com/vYL0xZb.gif",
                    "https://imgur.com/yKCYGiM.gif",
                    "https://imgur.com/IZU5Rdz.gif",
                    "https://imgur.com/Tg6pP7n.gif"
                    
                            ];
             
                var gif = paat[Math.floor(Math.random() * paat.length)] ;
                var pat_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
		        .setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** fait pat pat à **${member.displayName}**._`)
                message.channel.send(pat_embed);
            };            

            if(command === "kiss") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner un utilisateur valide, sauf si tu n'as pas d'amis pour fair cette commande *touss touss*");

                var kiiss = [
                    "https://imgur.com/b5gws2K.gif",
                    "https://imgur.com/9dEzPYo.gif",
                    "https://imgur.com/m3muv2n.gif",
                    "https://imgur.com/b437Iyw.gif",
                    "https://imgur.com/rl3qDwX.gif",
                    "https://imgur.com/RLbtpje.gif"
                    
                            ];
             
                var gif = kiiss[Math.floor(Math.random() * kiiss.length)] ;
                var kiss_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
		        .setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** fait un bisou à **${member.displayName}**._`)
                message.channel.send(kiss_embed);
            };  

            if(command === "kill") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner une victi... un utilisateur valide");

                var kiill = [
                    "https://imgur.com/i05JQHj.gif",
                    "https://imgur.com/asPls9q.gif",
                    "https://imgur.com/UtxhqRL.gif",
                    "https://imgur.com/RBYYTXS.gif",
                    "https://imgur.com/HbuNUeF.gif",
                    "https://imgur.com/MYBZTuL.gif"
                    
                            ];
             
                var gif = kiill[Math.floor(Math.random() * kiill.length)] ;
                var kill_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
	        	.setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** veut fair un "massage" à **${member.displayName}**._`)
                message.channel.send(kill_embed);
            };  

            if(command === "hug") {

                let member = message.mentions.members.first();
            if(!member)
              return message.reply("Veuiller mentionner un utilisateur valide, sauf si tu n'as pas d'amis pour fair cette commande *touss touss*");

                var huug = [
                    "https://imgur.com/YdjuHIr.gif",
                    "https://imgur.com/aEdAZYc.gif",
                    "https://imgur.com/ix4pgEJ.gif",
                    "https://imgur.com/mAklRRg.gif",
                    "https://imgur.com/6D4XKIq.gif",
                    "https://imgur.com/j21DTlV.gif",
                    "https://imgur.com/cSg1o6L.gif",
                    "https://imgur.com/MCAueOW.gif"
                    
                ];
            
                var gif = huug[Math.floor(Math.random() * huug.length)] ;
                var hug_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
		        .setTitle('Roleplay')
                .setImage(gif)
                .addField(`_**${message.author.username}** fait un clin d'oeil à **${member.displayName}**._`)
                message.channel.send(hug_embed);
            };

var prefix = '?'
var randnum = 0; 


if(message.content.startsWith(prefix + "cat")){

    var chat = [

        "https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif",
        "https://media.giphy.com/media/uTCAwWNtz7U2c/giphy.gif",
        "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
        "https://media.giphy.com/media/ziYUNUTpi4SiI/giphy.gif",
        "https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif",
        "https://media.giphy.com/media/W3QKEujo8vztC/giphy.gif"
    ];

    var gif = chat[Math.floor(Math.random() * chat.length)] ;
    var cat_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('chat:')
    .setImage(gif)
    .setFooter('Chaaaaat!!')
    message.channel.send(cat_embed);
};

var prefix = '?'
if(message.content.startsWith(prefix + "secret")){
    message.channel.send("Ajout prochain: Commande de base / jeux de cart et collection / peut etre une commande permettant de sauvgarder un serv (pour avoir un rollback du serv) en cas de raid ")
}
{
function random(min, max){
    min = Math.ceil(1);
    max = Math.floor(2);
    randnum = Math.floor(Math.random() * (max - min +1) +min);
}

var prefix = '?'
if(message.content.startsWith(prefix + "face")){
    random();

    if (randnum == 1){
        message.reply("Face! Vous avez gagné GG");
    }

    if (randnum == 2){
        message.reply("Pile! Vous avez perdu pas de CHANCE");
    }
}}

{
function random(min, max){
    min = Math.ceil(1);
    max = Math.floor(2);
    randnum = Math.floor(Math.random() * (max - min +1) +min);
}

var prefix = '?'
if(message.content.startsWith(prefix + "pile")){
    random();

    if (randnum == 1){
        message.reply("Pile! Vous avez gagné GG");
    }

    if (randnum == 2){
        message.reply("Face! Vous avez perdu pas de CHANCE");
    }
}}

{
    function random(min, max){
        min = Math.ceil(1);
        max = Math.floor(20);
        randnum = Math.floor(Math.random() * (max - min +1) +min);
    }
    
    var prefix = '?'
    if(message.content.startsWith(prefix + "lancer20")){
        random();
        if (randnum == 1){
            message.reply("le dé roule et c'est un: 1");
        }
        if (randnum == 2){
            message.reply("le dé roule et c'est un: 2");
        }
        if (randnum == 3){
            message.reply("le dé roule et c'est un: 3");
        }
        if (randnum == 4){
            message.reply("le dé roule et c'est un: 4");
        }
        if (randnum == 5){
            message.reply("le dé roule et c'est un: 5");
        }
        if (randnum == 6){
            message.reply("le dé roule et c'est un: 6");
        }
        if (randnum == 7){
            message.reply("le dé roule et c'est un: 7");
        }
        if (randnum == 8){
            message.reply("le dé roule et c'est un: 8");
        }
        if (randnum == 9){
            message.reply("le dé roule et c'est un: 9");
        }
        if (randnum == 10){
            message.reply("le dé roule et c'est un: 10");
        }
        if (randnum == 11){
            message.reply("le dé roule et c'est un: 11");
        }
        if (randnum == 12){
            message.reply("le dé roule et c'est un: 12");
        }
        if (randnum == 13){
            message.reply("le dé roule et c'est un: 13");
        }
        if (randnum == 14){
            message.reply("le dé roule et c'est un: 14");
        }
        if (randnum == 15){
            message.reply("le dé roule et c'est un: 15");
        }
        if (randnum == 16){
            message.reply("le dé roule et c'est un: 16");
        }
        if (randnum == 17){
            message.reply("le dé roule et c'est un: 17");
        }
        if (randnum == 18){
            message.reply("le dé roule et c'est un: 18");
        }
        if (randnum == 19){
            message.reply("le dé roule et c'est un: 19");
        }
        if (randnum == 20){
            message.reply("le dé roule et c'est un: 20");
        }
            
    }} 
{
function random(min, max){
        min = Math.ceil(1);
        max = Math.floor(12);
        randnum = Math.floor(Math.random() * (max - min +1) +min);
        }
        
        var prefix = '?'
        if(message.content.startsWith(prefix + "lancer12")){
            random();
        if (randnum == 1){
         message.reply("le dé roule et c'est un: 1"); 
        }   
        if (randnum == 2){
            message.reply("le dé roule et c'est un: 2"); 
           } 
           if (randnum == 3){
            message.reply("le dé roule et c'est un: 3"); 
           } 
           if (randnum == 4){
            message.reply("le dé roule et c'est un: 4"); 
           } 
           if (randnum == 5){
            message.reply("le dé roule et c'est un: 5"); 
           } 
           if (randnum == 6){
            message.reply("le dé roule et c'est un: 6"); 
           } 
           if (randnum == 7){
            message.reply("le dé roule et c'est un: 7"); 
           } 
           if (randnum == 8){
            message.reply("le dé roule et c'est un: 8"); 
           } 
           if (randnum == 9){
            message.reply("le dé roule et c'est un: 9"); 
           } 
           if (randnum == 10){
            message.reply("le dé roule et c'est un: 10"); 
           } 
           if (randnum == 11){
            message.reply("le dé roule et c'est un: 11"); 
           } 
           if (randnum == 12){
            message.reply("le dé roule et c'est un: 12"); 
           } 
        }}
{
function random(min, max){
        min = Math.ceil(1);
        max = Math.floor(6);
        randnum = Math.floor(Math.random() * (max - min +1) +min);
        }
                    
 var prefix = '?'                   
        if(message.content.startsWith(prefix + "lancer6")){
            random();
           if (randnum == 1){
           message.reply("le dé roule et c'est un: 1"); 
           }   
           if (randnum == 2){
           message.reply("le dé roule et c'est un: 2"); 
           } 
           if (randnum == 3){
           message.reply("le dé roule et c'est un: 3"); 
           } 
           if (randnum == 4){
           message.reply("le dé roule et c'est un: 4"); 
           } 
           if (randnum == 5){
           message.reply("le dé roule et c'est un: 5"); 
           } 
           if (randnum == 6){
           message.reply("le dé roule et c'est un: 6"); 
           }
        }}
        {
            function World_of_warcraft(){
                message.reply("Et c'etai world of warcraft")
            }
            function Portal(){
                message.reply("Et c'etai Portal")
            }
            function Far_Cry_3(){
                message.reply("Et c'etai Far Cry 3")
            }
            function Fallout(){
                message.reply("Et c'etai Fallout")
            }
            function AC(){
                message.reply("Et c'etai Assassin's Creed")
            }
            function Skyrim(){
                message.reply("Et c'etai Skyrim")
            }
            function Duke_Nukem_Forever(){
                message.reply("Et c'etai Duke Nukem Forever")
            }
            function Bioshock(){
                message.reply("Et c'etai Bioshock")
            }
            function Dragon_Age(){
                message.reply("Et c'etai Dragon Age : Origins")
            }
            function Super_Mario_64(){
                message.reply("Et c'etai Super Mario 64")
            }
            function Warcraft3(){
                message.reply("Et c'etai Warcraft 3")
            }
            function Undertale(){
                message.reply("Et c'etai Undertale")
            }
            function Nier_automata(){
                message.reply("Et c'etai Nier Automata")
            }
            function Devil_may_cry_3(){
                message.reply("Et c'etai Devil may cry 3")
            }
            function metal_gear_solid(){
                message.reply("Et c'etai Metal gear solid")
            }
            function phoenix_wright(){
                message.reply("Et c'etai Phoenix wright")
            }
            function metal_gear_solid_4(){
                message.reply("Et c'etai Metal gear solid 4")
            }
            function Halo_2(){
                message.reply("Et c'etai Halo 2")
            }
            function Super_Mario_64(){
                message.reply("Super Mario 64")
            }
         function Destiny_2(){
                message.reply("Et c'etai Destiny 2")
            }
                 function random(min, max){
                    min = Math.ceil(1);
                    max = Math.floor(23);
                    randnum = Math.floor(Math.random() * (max - min +1) +min);
                    }      
var prefix = '?'
if(message.content.startsWith(prefix + "refjeux")){
    random();
    if (randnum == 1){
        message.reply(" «c'est une vrai dent de requin faite en résine!»  (vous avez 30s)")
        setTimeout( World_of_warcraft , 30000);
    }
    if (randnum == 2){
        message.reply(" «je ne voi que les ténèbre...»  (vous avez 30s)")
          setTimeout( World_of_warcraft , 30000);
            }
    if (randnum == 3){
        message.reply(" «The cake is a lie»  (vous avez 30s)")
        setTimeout( Portal , 30000);
            }
    if (randnum == 4){
        message.reply(" «La folie c’est refaire sans arrêt exactement la même connerie qu’on répète sans arrêt, en espérant que ça change»   (vous avez 30s)")
        setTimeout( Far_Cry_3 , 30000);
            }
    if (randnum == 5){
        message.reply(" « La guerre, la guerre ne meurt jamais »  (vous avez 30s)")
        setTimeout( Fallout , 30000);
            }
    if (randnum == 6){
         message.reply(" « Rien n’est vrai. Tout est permis »  (vous avez 30s)")
        setTimeout( AC , 30000);
                    }
    if (randnum == 7){
         message.reply(" « Avant j’étais un aventurier comme toi. Et puis je me suis pris une flèche dans le genou »  (vous avez 30s)")
        setTimeout( Skyrim , 30000);
                    }
    if (randnum == 8){
        message.reply(" « Mes couilles sur ton nez, t’auras l’air d’un dindon »  (vous avez 30s)")
        setTimeout( Duke_Nukem_Forever , 30000);
                    }
    if (randnum == 9){
        message.reply(" « It’s me, Mario ! » (vous avez 30s)")
        setTimeout( Super_Mario_64 , 30000);
                    }
                    if (randnum == 10){
                        message.reply("  L’Homme choisit. L’esclave obéit » (vous avez 30s)")
                        setTimeout( Bioshock , 30000);
                                         }
                        if (randnum == 11){
                            message.reply(" « Il y a des gens qui vous attaquent délibérément ??? » (vous avez 30s)")
                            setTimeout( Dragon_Age , 30000);
                                          }
                        if (randnum == 12){
                            message.reply(" « Travail terminé ! » (vous avez 30s)")
                            setTimeout( Warcraft3 , 30000);
                                         }
                         if (randnum == 13){
                            message.reply(" « Encore du travail ? » (vous avez 30s)")
                            setTimeout( Warcraft3 , 30000);
                                         }
                         if (randnum == 14){
                             message.reply(" « PAR LE FEU SOYEZ PURIFIES » (vous avez 30s)")
                            setTimeout( World_of_warcraft , 30000);
                                       }
                        if (randnum == 15){
                             message.reply(" « Vous êtes rempli de détermination » (vous avez 30s)")
                            setTimeout( Undertale , 30000);
                                       }
                        if (randnum == 16){
                             message.reply(" « this cannot continue » (vous avez 30s)")
                            setTimeout( Nier_automata , 30000);
                                        }
                        if (randnum == 17){
                            message.reply(" « Est-ce que tu pleures ? C'est seulement la pluie. Le Diable ne pleure jamais » (vous avez 30s)")
                            setTimeout( Devil_may_cry_3 , 30000);
                                        }
                        if (randnum == 18){
                           message.reply(" « Tu veux qu'on se tire l'oreille ? » (vous avez 30s)")
                           setTimeout( metal_gear_solid , 30000);
                                        }
                        if (randnum == 19){
                           message.reply(" « OBJECTION ! » (vous avez 30s)")
                           setTimeout( phoenix_wright , 30000);
                                       }
                        if (randnum == 20){
                           message.reply(" « Je ne suis pas un héros, jamais je ne l'ai été, jamais je ne le serai. » (vous avez 30s)")
                           setTimeout( metal_gear_solid_4 , 30000);
                                       }
                        if (randnum == 21){
                            message.reply(" « J'mets les pieds où j'veux ! Et c'est souvent dans la gueule ! » (vous avez 30s)")
                            setTimeout( Halo_2 , 30000);
                                       }
                        if (randnum == 22){
                            message.reply(" « Ceci n'est pas ton tombeau. Mais tu es le bienvenu » (vous avez 30s)")
                            setTimeout( Halo_2 , 30000);
                                       }
                        if (randnum == 23){
                            message.reply(" « Tue un Déchu, j'en ferai un Infâme. Tue un Infâme, j'en dressera dix de plus » (vous avez 30s)")
                            setTimeout( Destiny_2 , 30000);
                                       }

    };
        }
        {
            function GTO (){
                message.reply(" Et c'est great teacher onizuka")
            }
            function FullmetalAlchimiste (){
                message.reply("Et c'est Fullmetal Alchimiste")
            }
            function FSN (){
                message.reply("Et c'est Fate Stay Night")
            }
            function Ken (){
                message.reply("Et c'est ken le survivant")
            }
            function Gurren_Lagann (){
                message.reply("Et c'est Gurren Lagann")
            }
            function SnK (){
                message.reply("Et c'est Shingeki no kyojin")
            }
            function FullmetalAlchimistebrotherhood (){
                message.reply("Et c'est Fullmetal Alchimiste Brotherhood")
            }
            function  rosario_vampire (){
                message.reply("Et c'est rosario vampire ")
            }
            function Hyouka (){
                message.reply("Et c'est Hyouka")
            }
            function Oregairu (){
                message.reply("Et c'est Oregairu")
            }
            function jojo (){
                message.reply("Et c'est Jojo's Bizarre Adventure: Stardust Crusaders")
            }
            function onepunch (){
                message.reply("Et c'est One Punch Man")
            }
            function Berserk  (){
                message.reply("Et c'est Berserk ")
            }
            function BlackClover (){
                message.reply("Et c'est Black Clover")
            }
            function KHR (){
                message.reply("Et c'est Katekyoshi Hitman Reborn!")
            }
            function Naruto_Shippuden (){
                message.reply("Et c'est Naruto Shippuden")
            }
            function Onepiece(){
                message.reply("Et c'est One Piece")
            }
            function Black_Butler (){
                message.reply("Et c'est Black Butler")
            }
            function  Dgray_Man (){
                message.reply("Et c'est D.gray Man")
            }
                 function random(min, max){
                    min = Math.ceil(1);
                    max = Math.floor(21);
                    randnum = Math.floor(Math.random() * (max - min +1) +min);
                    }      
var prefix = '?'
if(message.content.startsWith(prefix + "refanime")){
    random();
    if (randnum == 1){
        message.reply(" «T'es con naturellement où t'as pris des cours?»  (vous avez 30s)")
        setTimeout( GTO , 30000);
    }
    if (randnum == 2){
        message.reply(" « Interdit de mourir sous mon commandement. T'es déjà pas un cadeau, pas besoin de paperasse »  (vous avez 30s)")
          setTimeout( FullmetalAlchimiste , 30000);
            }
    if (randnum == 3){
        message.reply(" « Les gens meurent si ils sont tués »  (vous avez 30s)")
        setTimeout( FSN , 30000);
            }
    if (randnum == 4){
        message.reply(" « Tu ne le sais pas encore, mais tu es déjà mort »   (vous avez 30s)")
        setTimeout( Ken , 30000);
            }
    if (randnum == 5){
        message.reply(" « Ne crois pas en moi qui crois en toi, ne crois pas en toi qui crois en moi, crois en toi, c'est tout »  (vous avez 30s)")
        setTimeout( Gurren_Lagann , 30000);
            }
    if (randnum == 6){
         message.reply(" « la seule chose qui nous est permis de faire, c'est de ne pas regretter les choix que l'on a fait »  (vous avez 30s)")
        setTimeout( SnK , 30000);
                    }
    if (randnum == 7){
         message.reply(" « La vérité puni l'arrogance humaine par le desespoir »  (vous avez 30s)")
        setTimeout( FullmetalAlchimistebrotherhood , 30000);
                    }
    if (randnum == 8){
        message.reply(" « Ce que je dis est bien trop subtil pour tes 2 neurones qui se battent en duel »  (vous avez 30s)")
        setTimeout(  rosario_vampire , 30000);
                    }
    if (randnum == 9){
        message.reply(" «  Je ne suis pas stupide. Je suis juste trop paresseux pour vous montrer à quel point je suis intelligent » (vous avez 30s)")
        setTimeout( Hyouka , 30000);
                    }
                    if (randnum == 10){
                        message.reply("« Si la vérité est une maîtresse cruelle, le mensonge doit être une gentille fille » (vous avez 30s)")
                        setTimeout( Oregairu , 30000);
                                         }
                        if (randnum == 11){
                            message.reply(" « lelolelolelolelo » (vous avez 30s)")
                            setTimeout( jojo , 30000);
                                          }
                        if (randnum == 12){
                            message.reply(" « Ok » (vous avez 30s)")
                            setTimeout( onepunch , 30000);
                                         }
                         if (randnum == 13){
                            message.reply(" « L'être humain est lâche par nature. Il jalouse celui qui n'a ne serait-ce qu'un peu plus que lui, et au contraire méprise celui qui possède moins. Pour une légère différence, il craint et il hait. Et c'est dur à admettre, mais spécialement lorsqu'il s'agit de parias comme nous » (vous avez 30s)")
                            setTimeout( Berserk , 30000);
                                         }
                         if (randnum == 14){
                             message.reply(" « tu pense qu'être faible est un problème ? Tu te trompe. Le problème c'est de le rester. » (vous avez 30s)")
                            setTimeout( BlackClover , 30000);
                                       }
                        if (randnum == 15){
                             message.reply(" « Ciaossu ! » (vous avez 30s)")
                            setTimeout( KHR , 30000);
                                       }
                        if (randnum == 16){
                             message.reply(" « Tous les hommes sans exception, même les plus corrompus, au fond de le cœur ne cherchent nul autre que la considération » (vous avez 30s)")
                            setTimeout( Naruto_Shippuden , 30000);
                                        }
                        if (randnum == 17){
                            message.reply(" «Le roi des Pirates, ce sera moi !» (vous avez 30s)")
                            setTimeout( Onepiece , 30000);
                                        }
                        if (randnum == 18){
                           message.reply(" « Yes, my Lord » (vous avez 30s)")
                           setTimeout( Black_Butler , 30000);
                                        }
                        if (randnum == 19){
                           message.reply(" « Pour qui vous me prenez ?! » (vous avez 30s)")
                           setTimeout( Gurren_Lagann , 30000);
                                       }
                        if (randnum == 20){
                           message.reply(" « Pousse de soja » (vous avez 30s)")
                           setTimeout(  Dgray_Man , 30000);
                                       }
                        if (randnum == 21){
                            message.reply(" « Mon trésor ? Je vous le laisse, si vous voulez. Trouvez-le ! Je l'ai laissé quelque part dans ce monde » (vous avez 30s)")
                            setTimeout(  Onepiece , 30000);
                                       }               

                                    }
                                };
                                {
                                function random(min, max){
                                    min = Math.ceil(1);
                                    max = Math.floor(3);
                                    randnum = Math.floor(Math.random() * (max - min +1) +min);
                                    }      
         var prefix = '?'       
                if(message.content.startsWith(prefix + "papier")){
                    random();
                    if (randnum == 1){
                        message.reply("Papier ! Ex aequo retente encore ! ")
                    }
                    if (randnum == 2){
                        message.reply("Pierre ! *Balance la pierre dans ta figure* Tu a gagnier ... ")
                     money.updateBal(message.author.id, 50 )
                message.reply(`**Tu as reçue $50!**`);
                    }
                    if (randnum == 3){
                        message.reply("Ciseaux ! ( ?° ?? ?°) Tu as perdu ! ")
                     money.updateBal(message.author.id, -10 )
                message.reply(`**Tu as perdu $10!**`);
                    } }
                };
                {
                        function random(min, max){
                            min = Math.ceil(1);
                            max = Math.floor(3);
                            randnum = Math.floor(Math.random() * (max - min +1) +min);
                            }
     var prefix = '?'   
        if(message.content.startsWith(prefix + "pierre")){
            random();
            if (randnum == 1){
                message.reply("Pierre ! Ex aequo retente encore ! ")
            }
            if (randnum == 2){
                message.reply("Ciseaux ! Tu a gagnier ...*Prend les ciseaux et ...Déconexion* ");
                money.updateBal(message.author.id, 50 )
                message.reply(`**Tu as reçue $50!**`);
                }
                {
            if (randnum == 3){
                message.reply("papier ! ( ?° ?? ?°) Tu as perdu ! ")
             money.updateBal(message.author.id, -10 ).then((i) => {  
                message.reply(`**Tu as perdu $10!**\n**New Balance:** ${i.money}`);
 })
            } };
        } } 
 {
            function random(min, max){
                min = Math.ceil(1);
                max = Math.floor(3);
                randnum = Math.floor(Math.random() * (max - min +1) +min);
                }
var prefix = '?'
if(message.content.startsWith(prefix + "ciseaux")){
random();
if (randnum == 1){
    message.reply("Ciseaux ! Ex aequo retente encore ! ")
}
if (randnum == 2){
    message.reply("Papier ! Tu a gagnier ...*Mange le papier* ")
 money.updateBal(message.author.id, 50 )
                message.reply(`**Tu as reçue $50!**`);
}
if (randnum == 3){
    message.reply("Pierre ! ( ?° ?? ?°) Tu as perdu ! ")
 money.updateBal(message.author.id, -10 ).then((i) => {  
                message.reply(`**Tu as perdu $10!**\n**New Balance:** ${i.money}`);
 })
} }
            };
 
 if(message.content.startsWith(prefix + "test")){
    message.reply( message.author + ` TEEST`);
             }
 
               if(message.content.startsWith(prefix + "avatar")){

             let msg = await message.channel.send("Génération de l'avatar...");
             let target = message.mentions.users.first() || message.author;
           
             await message.channel.send({files: [
               {
                 attachment: target.displayAvatarURL,
                 name: "avatar.png"
               }
             ]});
           
             msg.delete();
           }

           msg = message.content.toLocaleLowerCase();

           if (answered == false && message.author == quizUser) {
               userAnswer = msg;
               if (userAnswer == cAnswer) {
                   message.reply ("Correct");
               }
               else{
                   message.reply("Faux");
               }
               answered = true; cAnswer = ""; userAnswer = "";
           }
           function  time10s (){
            message.reply("Les 10 secondes sont écouler!  ")
        }
         
           if (msg.startsWith(prefix + "quiz" )){
               number = 9;
               var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
               switch(random){
                   case 1: message.channel.send ("Que ce qu'es le mot Tellurique: \n1 - Qualifie des planètes similaires a la Terre \n2 - Un minerai extrait de roche \n3 - Un mouvement spirituelle \n4 - Obi wan kenobi ");setTimeout( time10s , 10000) ; cAnswer = "1";  break; 
                   case 2: message.channel.send ("Quel est l'auteur de la citation « Je n’ai pas échoué. J’ai simplement trouvé 10 000 solutions qui ne fonctionnent pas. » ?  \n1 - Benjamin Franklin. \n2 - Albert Einstein. \n3 - Thomas Edison. \n4 - Emmanuel Macron.");setTimeout( time10s , 10000) ;cAnswer = "3"; break;
                   case 3: message.channel.send ("Parmis ces anime quelle l'anime avec le plus d'épisodes ? \n1 - Detective Conan \n2 - One Piece \n3 - Doraemon \n4 - C'est l'anime le plus long");setTimeout( time10s , 10000); cAnswer = "3"; break;
                   case 4: message.channel.send ("D’où vient Vasco de Gama ? \n1 - Du Portugal \n2 - De Venise \n3 - De l'Espagne \n4 - Du Taboulistan " );setTimeout( time10s , 10000); cAnswer = "1"; break;
                   case 5: message.channel.send ("Quelle année a suivi l’an 1 avant J.C ? \n1 - L'an 0 \n2 - L'an 1 aprés J.C \n3 - L'an 0 avant J.C \n4 Le nouvelle an");setTimeout( time10s , 10000); cAnswer = "2"; break;
                   case 6: message.channel.send ("Combien de nouvelles chaînes sont apparus grâce à la TNT ? \n1 - 11 \n2 - 15 \n3 - 12 \n4 - 69");setTimeout( time10s , 10000); cAnswer = "3" ;break;
                   case 7: message.channel.send ("Quel l’équivalent du pape au Tibet ? \n1 - Le dalalama \n2 - L'Alpaga \n3 - L'Alpagïatelle \n4 - Le dallai lama");setTimeout( time10s , 10000); cAnswer = "4" ; break;
                   case 8: message.channel.send ("De combien de syllabes est composé un alexandrin ? \n1 - 4 \n2 - 8 \n3 - 6 \n4 - 12");setTimeout( time10s , 10000); cAnswer = "4" ;break;
                   case 9: message.channel.send ("Comment appelle-t-on la lumière qui se rapproche le plus de la lumière du soleil ?  \n1 - La lumière jaune \n2 - Les UV \n3 - La lumière blanche \n4 - La lumière ");setTimeout( time10s , 10000); cAnswer = "3" ; break ;
               }

                answered = false;
               quizUser = message.author;
           }


           if(message.content.startsWith(prefix + "mes infos")){

        var infome = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setThumbnail(message.author.avatarURL)
            .setDescription("Voici les infos!")
            .setColor(0x00FF00)
            .addField("Pseudo Discord complet:", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID:", message.author.id)
            .addField("Crée le:", message.author.createdAt)
    
            message.channel.send(infome);
            }
    
            if(command === "infos") {
                let target = message.mentions.members.first();
                if(!target)
                  return message.reply("Veuiller mentionner un utilisateur valide");

        var infoa = new Discord.RichEmbed()
        .setAuthor(target.displayName)
        .setThumbnail(target.user.avatarURL)
        .setDescription("Voici les infos!")
        .setColor(0x00FF00)
        .addField("Pseudo Discord complet:", `${target.user.username}#${target.user.discriminator}`)
        .addField("ID:", target.id)
        .addField("Crée le:", target.user.createdAt)
            message.channel.send(infoa)
            
    };
	
if(message.content.startsWith(prefix + "info discord")){
        var infodisc = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setThumbnail(message.guild.iconURL)
            .setDescription("Voici les infos!")
            .setColor(0x00FF00)
            .addField("Nom :", message.guild.name )
            .addField("Créateur du serveur :", message.guild.owner.user.tag)
            .addField("Roles", message.guild.roles.size )
            .addField("nombre d'utilisateur :", message.guild.memberCount)
            .addField("tu a rejoin le :", message.member.joinedAt)
            .addField("Region :", message.guild.region )
            .addField("Crée le :", message.guild.createdAt)
    
    
            message.channel.send(infodisc);
            };
	
 if(message.content.startsWith(prefix + "info kagura")){

        var infobot = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Voici les infos!")
            .setColor(0x00FF00)
            .addField(`Servers `, client.guilds.size )
            .addField(`Nombre totale d'utilisateur`,client.users.size )
            .addField(`Channels` , client.channels.size )
            .addField(`Node Version`,process.version)
            .addField(`Prefix` , prefix)
            .addField("Language  NodeJS ")
            .addField(`Utilisation de la RAM en MB ` ,(process.memoryUsage().rss / 1048576).toFixed() )
            .setFooter(`Crée par ???????????Arkaxii#5194 `)            
            
            message.channel.send(infobot);
            };

if(message.content.startsWith(prefix + "sondage")){
                let args = message.content.split(" ").slice(1);
                let tTE = args.join(" ")
            var sond = new Discord.RichEmbed()
            .setDescription("Sondage")
            .setAuthor(message.author.username)
            .addField(tTE, "Répondre avec :white_check_mark: ou :x:")
            .setColor(0x00FF00)
            .setTimestamp()
            message.channel.send(sond)
            .then(function(message){
                message.react("?")
                message.react("?")
            }).catch(function(){    
            });
            message.delete()
            
            }
	
	 if(message.content.startsWith(prefix + "8ball")){
                let args = message.content.split(" ").slice(1);
                let question = args.join(" ")
                if (!question)
                message.channel.send("Je répond à tes questions. Faut vraiment être sans amis pour me poser des question ");

		if(question)
                var reponse = ["Très certainement",
                               "Très peut probable",
                               "Définitivement OUI !",
                               "Eeeuuuuuuuuuu non",
                               "Eeeuuuuuuuuuu oui",
                               "Ne compte pas dessu",
                               "Selon internet oui",
                               "Selon internet non",
                               "J'ai été programmé pour dir non",
                               "J'en sais rien demande à quelqu'un d'autre",
                               "¯\_(?)_/¯",
                               "Je dirai oui mais non donc oui et non",
                               "C'est fortement possible",
                               "On ma dit de dire oui",
                               "On ma dit de dire non",
                               "Je savai que tu allais poser cette question ! Hein ? Quoi ? Quelle réponse ?",
                               "C'est douteux",
                               "Sans aucun doute",
                               "Demande au mur en face de toi",
                               "C'est un vrai mystère ??",
                               "Bip boup bip bip ??"]

                               var result = Math.floor((Math.random() * reponse.length) + 0);
                               message.channel.send(reponse[result]);
            }
	 
});
client.login(token);
