const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const money = require('discord-money'); 
const ms = require('parse-ms')
const config = require("./config.json");
const db = require('quick.db');
const prefix = '?'
const ms2 = require('ms');
const func = require('./function.js'); 
const m3u8stream = require('m3u8stream');
const parseTime   = require('m3u8stream/dist/parse-time');
const ownerID =  "246395977450258432"


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
  
  });
  

  client.on("message", async message => {
    if (message.content === "?help") {


            let pages = ['Menu','─▻Rolplay','─▻Utilitaire','─▻Argent','─▻Jeux','─▻Random','─▻Autre','─▻Admin'];
            let page = 1;
            const embetest = new Discord.RichEmbed()
            .setTitle(pages[page-1])
            .setFooter(`Page ${page} sur ${pages.length}`)
            .setDescription(`
        
        ─▻__**Catégorie**__
        2 Rolplay 

        3 Utilitaire
        
        4 Argent
        
        5 Jeux
        
        6 Random
        
        7 Autre
        
        8 Admin
        `)  
            message.channel.send(embetest).then(message =>{
                message.react("⏪").then( r =>{
                    message.react("⏩")
            
            
                    client.on('messageReactionAdd',async (reaction, user) =>{
            
            if(reaction.emoji.name === '⏪' && user.id !== client.user.id){
            
            reaction.remove(user)
                        if (page ===1) return;
                        page--;
            
                        if(page ===1){ 
                            embetest.setTitle(pages[page-1])
                            embetest.setDescription(`
                            ─▻__**Catégorie**__
  
                            2 Rolplay 
                        
                            3 Utilitaire
                            
                            4 Argent
                            
                            5 Jeux
                            
                            6 Random
                            
                            7 Autre
                            
                            8 Admin`)  
                            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                            message.edit(embetest) 
                        };
                        if(page ===2){ 
                            embetest.setTitle(pages[page-1])
                            embetest.setDescription(`
                            <<wink
                            <<wave  
                            <<sleep
                            <<wake-up 
                            <<slap 
                            <<punch
                            <<poke
                            <<pat
                            <<kiss
                            <<kill
                            <<hug`)  
                            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                            message.edit(embetest) 
                         };
                         if(page ===3){ 
                            embetest.setTitle(pages[page-1])
                            embetest.setDescription(`
                    **<<sondage : **Fait un sondage pour avoir l'avie d'autre personne
                    **<<timer : **Pour avoir un timer qui peut durer quelque seconde comme plusieur jour
                    **<<info kagura : **Toute les infos a propo de Kagura
                    **<<info discord : **Les info du serveur
                    **<<infos : **Donne les infos d'un utilisateur ou de toi meme
                    **<<secret : **Les prochain ajout sur le bot
                    **<<avatar : **Recupere l'avatar pour l'afficher plus grand 
                    **<<ping : **Pour connaitre son ping
                    **<<say : **Fait dir ce que tu veut au bot 
                    **<<invite : **Envoie un mp pour inviter le bot dans d'autre serveur
                    **<<message :** Donne le nombre de message envoyer 
                    **<<a-f :**traduit d'Anglais à Français
                    **<<f-a :**Traduit du Français à l'Anglais
                    **<<dico :** Cherche le mot dans le dictionnaire 
                    **<<syntaxe-b :** Pour savoir **comment** ~~ne pas~~ *fair* __ça__ ||et d'autre chose||
                    **<<syntaxe-c :** Pour savoir comment écrire en couleur **__NE FONCTIONNE PAS SUR PORTABLE__**`)  
                            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                            message.edit(embetest) 
                         };
                         if(page ===4){ 
                            embetest.setTitle(pages[page-1])
                            embetest.setDescription(`
                            **<<inventaire : **Pour voir son inventaire
                            **<<shop : **Pour fair des achat avec la THUNE que tu as acquis
                            **<<pay : **pour donner de l'argent à d'autre utilisateur
                            **<<compt : **pour voir à combien s'élève ton compt
                            **<<daily : **pour recevoir 250$ par jour
                            **<<pierre / ?papier / ?ciseaux : **pour gagnier 50 $ ou perdre 25$
                            **<<roulette[montant de $] :**Test ta chance pour gagnier des $!`)  
                            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                            message.edit(embetest) 
                         };
                         if(page ===5){ 
                            embetest.setTitle(pages[page-1])
                            embetest.setDescription(`
                            **<<8ball : **Pose n'importe quelle question
                            **<<refjeux : **trouve à quelle jeux appartien la référence 
                            **<<refanime : **trouve à quelle anime appartien la référence 
                            **<<quiz : **Test ton intelligence`)  
                            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                            message.edit(embetest) 
                         };
                         if(page ===6){ 
                            embetest.setTitle(pages[page-1])
                            embetest.setDescription(`
                            **<<pile : **1 chance sur 2
                            **<<face : **1 chance sur 2
                            **<<lancer6 : **imite un lancer de dé à 6 face 
                            **<<lancer12 : **imite un lancer de dé à 12 face 
                            **<<lancer20 :** imite un lancer de dé à 20 face`)  
                            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                            message.edit(embetest) 
                         };
                         if(page ===7){ 
                            embetest.setTitle(pages[page-1])
                            embetest.setDescription(`
                            **<<waifu : **Montre ta nouvelle waifu
                            **<<monstre : **Dévoile le monstre en toi
                            **<<del : **Delet this (meme)
                            **<<hack : **Pour hacké une personne choisit
                            **<<love : **Pour connaitre ton "âme soeur"
                            **<<fusion : **FUUUUUUUUSION !!(fusionne des pseudos)`)  
                            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                            message.edit(embetest) 
                         };
                         if(page ===8){ 
                            embetest.setTitle(pages[page-1])
                            embetest.setDescription(`
                            **<<help admin** Si BIEN EVIDEMENT tu possèdes les droit Administrateur
                            `)  
                            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                            message.edit(embetest) 
                         };
            }
            
             
            
            if(reaction.emoji.name === '⏩' && user.id !== client.user.id){
            
            reaction.remove(user)
                if (page === pages.length) return;
                page++;
            
                if(page ===1){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`     
                    ─▻__**Catégorie**__
  
                    2 Rolplay 
                
                    3 Utilitaire
                    
                    4 Argent
                    
                    5 Jeux
                    
                    6 Random
                    
                    7 Autre
                    
                    8 Admin`)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                };
                if(page ===2){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    <<wink
                    <<wave  
                    <<sleep
                    <<wake-up 
                    <<slap 
                    <<punch
                    <<poke
                    <<pat
                    <<kiss
                    <<kill
                    <<hug`)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                 };
                 if(page ===3){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    **<<sondage : **Fait un sondage pour avoir l'avie d'autre personne
                    **<<timer : **Pour avoir un timer qui peut durer quelque seconde comme plusieur jour
                    **<<info kagura : **Toute les infos a propo de Kagura
                    **<<info discord : **Les info du serveur
                    **<<infos : **Donne les infos d'un utilisateur ou de toi meme
                    **<<secret : **Les prochain ajout sur le bot
                    **<<avatar : **Recupere l'avatar pour l'afficher plus grand 
                    **<<ping : **Pour connaitre son ping
                    **<<say : **Fait dir ce que tu veut au bot 
                    **<<invite : **Envoie un mp pour inviter le bot dans d'autre serveur
                    **<<message :** Donne le nombre de message envoyer 
                    **<<a-f :**traduit d'Anglais à Français
                    **<<f-a :**Traduit du Français à l'Anglais
                    **<<dico :** Cherche le mot dans le dictionnaire 
                    **<<syntaxe-b :** Pour savoir **comment** ~~ne pas~~ *fair* __ça__ ||et d'autre chose||
                    **<<syntaxe-c :** Pour savoir comment écrire en couleur **__NE FONCTIONNE PAS SUR PORTABLE__**`)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                 };
                 if(page ===4){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    **<<inventaire : **Pour voir son inventaire
                    **<<shop : **Pour fair des achat avec la THUNE que tu as acquis
                    **<<pay : **pour donner de l'argent à d'autre utilisateur
                    **<<compt : **pour voir à combien s'élève ton compt
                    **<<daily : **pour recevoir 250$ par jour
                    **<<pierre / ?papier / ?ciseaux : **pour gagnier 50 $ ou perdre 25$
                    **<<roulette[montant de $] :**Test ta chance pour gagnier des $!`)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                 };
                 if(page ===5){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    **<<8ball : **Pose n'importe quelle question
                    **<<refjeux : **trouve à quelle jeux appartien la référence 
                    **<<refanime : **trouve à quelle anime appartien la référence 
                    **<<quiz : **Test ton intelligence`)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                 };
                 if(page ===6){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    **<<pile : **1 chance sur 2
                    **<<face : **1 chance sur 2
                    **<<lancer6 : **imite un lancer de dé à 6 face 
                    **<<lancer12 : **imite un lancer de dé à 12 face 
                    **<<lancer20 :** imite un lancer de dé à 20 face`)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                 };
                 if(page ===7){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    **<<waifu : **Montre ta nouvelle waifu
                    **<<monstre : **Dévoile le monstre en toi
                    **<<del : **Delet this (meme)
                    **<<hack : **Pour hacké une personne choisit
                    **<<love : **Pour connaitre ton "âme soeur"
                    **<<fusion : **FUUUUUUUUSION !!(fusionne des pseudos)`)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                 };
                 if(page ===8){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    **<<help admin** Si BIEN EVIDEMENT tu possèdes les droit Administrateur
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                 };
            }
                    })
            })
                                })
                            };



    
      if (message.content === "?help admin") {
        if(!message.member.permissions.has('ADMINISTRATOR') )
        return message.reply("Désoler, tu n'as pas la permission d'utiliser cette commande!" );
        message.react('🤖')
          let helpad = new Discord.RichEmbed()
      .setTitle(`Requested By | ${message.author.username}`)
          .setDescription(`
==========🤖**Admin**🤖==========
**<<addrole: **Crée un embed avec le role pingé et réaction emote pour avoir le role /!/ doit être réutiliser apres chaque down du bot
**<<purge: **Peut suprimer de 2 a 100 message 
**<<kick:** Peut être accompagner d'une raison
**<<ban:** Peut etre accompagner d'une raison
==========🤖**Admin**🤖==========
`)
      .setFooter(`created by ๖̶̶̶ۣۣۜۜζ͜͡Arkaxii#5194 `)
  message.channel.send(helpad);
      }
    

 
    
    
    })


  
  client.on("message", async message => {
  
         if(message.content.startsWith(prefix + `invite`)) {
             if(!message.channel.guild) return;
                   message.react('🤖')
             var embed = new Discord.RichEmbed()
             .setTitle(">> ClickHere To Add" + `${client.user.username}` + " ?")
             .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
             .setTimestamp()
             .setFooter(`Requested By | ${message.author.username}`)
             .setColor("RANDOM")
             message.author.send({embed})
         }
               const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  
  
  if(message.content.startsWith(prefix + `mp`)) {
     let sayMessage = args.join(" ");
      if(!message.channel.guild) return;
    
      message.react('🤖')
 
      var embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.id , message.author.avatarURL )
      .setTitle("Suggestion")
      .setDescription(sayMessage)
      .setFooter(`Requested By | ${message.author.username}`)
      .setColor("RANDOM")
      client.fetchUser("246395977450258432",false).then(user => {
        user.send(embed) 
});
  }

let event = ['kagura'];
let fondintext = false;
for (var i in event){
    if (message.content.toLocaleLowerCase().includes(event[i].toLocaleLowerCase()))
    fondintext = true;
    if(fondintext){
        message.react(`👀`);
    }
}
let eventr = ['respect ?'];
let fondintextr = false;
for (var i in eventr){
    if (message.content.toLocaleLowerCase().includes(eventr[i].toLocaleLowerCase()))
    fondintextr = true;
    if(fondintextr){
        let respect = new Discord.RichEmbed()
        .setTitle(`Il est bon`)
        .setImage("https://i.imgur.com/J2qrXHK.gif")

                      message.channel.send(respect);
    }
    }
/*
    let eventt = ['👆'];

    if(message.author.id !== "635547572983037970")return;
var kanna = [
    "https://i.imgur.com/btYFdDL.png",
    "https://i.imgur.com/2hr6Bt7.png",
    "https://i.imgur.com/8BcgdaJ.png"
    ]
var kana = kanna[Math.floor(Math.random() * kanna.length)] ;





let fondintextt = false;
for (var i in eventt){
if (message.content.toLowerCase().includes(eventt[i].toLowerCase()))
fondintextt = true;
if(fondintextt){
    await message.channel.send({files: [
        {
          attachment: kana
        }
      ]});
}
}
*/






     });
 
  client.on ("ready", () => {
  answered = true;
  cAnswer = "";
  userAnswer = "";
  });
  
  client.on ("ready", () => {
    answeredJ = true;
    cAnswerJ = "";
    userAnswerJ = "";
    });

    client.on ("ready", () => {
        answeredA = true;
        cAnswerA = "";
        userAnswerA = "";
        });





  client.on("message", async message => {

    let user = message.author;
    msg = message.content.toLocaleLowerCase();
    let goodrep = await db.fetch(`quizgood_${user.id}`);
    let falsrep = await db.fetch(`quizfalse_${user.id}`);



             if (answered == false && message.author == quizUser) {
                 userAnswer = msg;


                 if (userAnswer == cAnswer) {
                    db.add(`quizgood_${message.author.id}`, 1)

                    let qbo = new Discord.RichEmbed()
                    .setTitle(`Bonne réponse!`)
                    .setThumbnail("https://i.imgur.com/TgVQZ7C.jpg")
                    .setDescription(`
                    ✅:cookie::cookie::cookie::cookie:✅
                    
                    Bonne réponses!
                    `)
                    message.channel.send(qbo);     
                            }
                   

                            else{
                                db.add(`quizfalse_${message.author.id}`, 1)

                                let qufa = new Discord.RichEmbed()
                    
                                .setTitle(`Mauvaise réponse`)
                                .setThumbnail("https://i.imgur.com/NXPa3av.png")
                                .setDescription(`
                                ❌¯\\_(ツ)_/¯¯\\_(ツ)_/¯¯\\_(ツ)_/¯❌   

                                Mauvaise réponse.
                                `)
                                message.channel.send(qufa);
                
                            }
                            answered = true; cAnswer = ""; userAnswer = "";
                        }
          
           
             if (msg.startsWith(prefix + "quiz" )){
                 number = 18;
                 var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                 switch(random){
                     case 1: message.channel.send ("Que ce qu'es le mot Tellurique: \n1 - Qualifie des planètes similaires a la Terre \n2 - Un minerai extrait de roche \n3 - Un mouvement spirituelle \n4 - Obi wan kenobi "); cAnswer = "1";  break; 
                     case 2: message.channel.send ("Quel est l'auteur de la citation « Je n’ai pas échoué. J’ai simplement trouvé 10 000 solutions qui ne fonctionnent pas. » ?  \n1 - Benjamin Franklin. \n2 - Albert Einstein. \n3 - Thomas Edison. \n4 - Emmanuel Macron.");cAnswer = "3"; break;
                     case 3: message.channel.send ("Parmis ces anime quelle l'anime avec le plus d'épisodes ? \n1 - Detective Conan \n2 - One Piece \n3 - Doraemon \n4 - C'est l'anime le plus long"); cAnswer = "3"; break;
                     case 4: message.channel.send ("D’où vient Vasco de Gama ? \n1 - Du Portugal \n2 - De Venise \n3 - De l'Espagne \n4 - Du Taboulistan " );cAnswer = "1"; break;
                     case 5: message.channel.send ("Quelle année a suivi l’an 1 avant J.C ? \n1 - L'an 0 \n2 - L'an 1 aprés J.C \n3 - L'an 0 avant J.C \n4 Le nouvelle an");cAnswer = "2"; break;
                     case 6: message.channel.send ("Combien de nouvelles chaînes sont apparus grâce à la TNT ? \n1 - 11 \n2 - 15 \n3 - 12 \n4 - 69");cAnswer = "3" ;break;
                     case 7: message.channel.send ("Quel l’équivalent du pape au Tibet ? \n1 - Le dalalama \n2 - L'Alpaga \n3 - L'Alpagïatelle \n4 - Le dallai lama");cAnswer = "4" ; break;
                     case 8: message.channel.send ("De combien de syllabes est composé un alexandrin ? \n1 - 4 \n2 - 8 \n3 - 6 \n4 - 12");cAnswer = "4" ;break;
                     case 9: message.channel.send ("Comment appelle-t-on la lumière qui se rapproche le plus de la lumière du soleil ?  \n1 - La lumière jaune \n2 - Les UV \n3 - La lumière blanche \n4 - La lumière ");cAnswer = "3" ; break ;
                     case 10: message.channel.send ("Quel était le nom du programme spatial qui visait à envoyer le premier homme sur la lune ? \n1 - Spoutnik  \n2 - Voyager 1 \n3 - Apollo 11 \n4 - L'Homme n'a jamais marché sur la lune, c'est un mensonge de la NASA !");cAnswer = "3" ;break;
                     case 11: message.channel.send ("Quel révolutionnaire et grand orateur a déclaré en 1792 : “De l’audace, encore de l’audace, toujours de l’audace.” \n1 - Saint-Juste \n2 - Danton \n3 - Robespierre \n4 - Marat");cAnswer = "2" ;break;
                     case 12: message.channel.send ("Selon la légende, comment le pape Adrien IV est mort en 1159 ?\n1 - En avalant une mouche \n2 - En se cognant contre une porte \n3 - En tombant d'un balcon \n4 - En chutant de chevale");cAnswer = "1" ;break;
                     case 13: message.channel.send ("Qui est le dieu du Soleil dans l'ancienne Egypte ? \n1 - Seth \n2 - Ramsès \n3 - Reshep  \n4 - Râ / Rê");cAnswer = "4" ;break;
                     case 14: message.channel.send ("Quel a été le premier nom du jeu de boules ? \n1 - Le por███ 👀 \n2 - La pétanque \n3 - Le Boulingrins \n4 - Bocce");cAnswer = "3" ;break;
                     case 15: message.channel.send ("Les champignons compte plus de 50 000 espèces. Combient sont comestible?\n1 - Quelque dizaine \n2 - Quelque centaine \n3 - Quelque miliers \n4 - La réponse 4");cAnswer = "2" ;break;
                     case 16: message.channel.send ("Sur quelle échelle est éxprimée l'intensité des tremblement de terre? \n1 - L'échelle de Trilling \n2 - L'échelle de Richter \n3 - L'échelle de Beaufort \n4 - L'échelle de Chuck norris");cAnswer = "2" ;break;
                     case 17: message.channel.send ("En Ecosse un lac porte le nom de:  \n1 - Lake \n2 - See \n3 - Loch \n4 - Water");cAnswer = "3" ;break;
                     case 18: message.channel.send ("Les habitant de la Nouvelle-Guinée s'appellent: \n1 - Les Massaïs \n2 - Les Maoris \n3 - Les Papous \n4 - Les Gilnéen");cAnswer = "3" ;break;
                 
             }
  
                  answered = false;
                 quizUser = message.author;
             }
  
          
  


            msg = message.content.toLocaleLowerCase();
            


            if (answeredJ == false && message.author == quizUserJ) {
                userAnswerJ = msg;




                if (userAnswerJ == cAnswerJ) {
                    db.add(`quizgood_${message.author.id}`, 1)


                    let sjb = new Discord.RichEmbed()
                    .setTitle(`Bonne réponse!`)
                    .setThumbnail("https://i.imgur.com/TgVQZ7C.jpg")
                    .setDescription(`
                    ✅:cookie::cookie::cookie::cookie:✅

                    Bonne réponses!
                    `)
                    message.channel.send(sjb);
                }



                if(userAnswerJ !== cAnswerJ){
                    db.add(`quizfalse_${message.author.id}`, 1)


                    let sjc = new Discord.RichEmbed()
                    .setTitle(`Mauvaise réponse`)
                    .setThumbnail("https://i.imgur.com/NXPa3av.png")
                    .setDescription(`
                    ❌¯\\_(ツ)_/¯¯\\_(ツ)_/¯¯\\_(ツ)_/¯❌    

                    Mauvaise réponse. 

                    Regarde si tu as oublier le numéro (pas de chiffre romain) après le nom / 
                    bien orthographier le nom et bien sur PAS d'abréviation!
                    `)
                    message.channel.send(sjc);
                }
                
                answeredJ = true; cAnswerJ = ""; userAnswerJ = "";
            }
            
            
            
            if(message.content.startsWith(prefix + "refjeux")){
                number = 23;
                var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                switch(random){
               
                    case 1: message.channel.send ("« c'est une vrai dent de requin faite en résine!»"); cAnswerJ = "world of warcraft";break; 
                    case 2: message.channel.send ("« je ne voi que les ténèbre...»"); cAnswerJ = "world of warcraft";break; 
                    case 3: message.channel.send ("« The cake is a lie»"); cAnswerJ = "portal";break; 
                    case 4: message.channel.send ("« La folie c’est refaire sans arrêt exactement la même connerie qu’on répète sans arrêt, en espérant que ça change»"); cAnswerJ = "far cry 3";break; 
                    case 5: message.channel.send ("« La guerre, la guerre ne meurt jamais »"); cAnswerJ = "fallout";break; 
                    case 6: message.channel.send ("« Rien n’est vrai. Tout est permis »"); cAnswerJ = "Assassin's Creed";break; 
                    case 7: message.channel.send ("« Avant j’étais un aventurier comme toi. Et puis je me suis pris une flèche dans le genou »"); cAnswerJ = "skyrim";break; 
                    case 8: message.channel.send ("« Mes couilles sur ton nez, t’auras l’air d’un dindon »"); cAnswerJ = "duke nukem forever";break; 
                    case 9: message.channel.send ("« It’s me, Mario ! »"); cAnswerJ = "super mario 64";break; 
                    case 10: message.channel.send ("« L’Homme choisit. L’esclave obéit »"); cAnswerJ = "bioshock";break; 
                    case 11: message.channel.send ("« Il y a des gens qui vous attaquent délibérément ??? »"); cAnswerJ = "dragon age";break; 
                    case 12: message.channel.send ("« Travail terminé ! »"); cAnswerJ = "warcraft 3";break; 
                    case 13: message.channel.send ("« Encore du travail ? »"); cAnswerJ = "warcraft 3";break; 
                    case 14: message.channel.send ("« PAR LE FEU SOYEZ PURIFIES »"); cAnswerJ = "world of warcraft";break; 
                    case 15: message.channel.send ("« Vous êtes rempli de détermination »"); cAnswerJ = "undertale";break; 
                    case 16: message.channel.send ("« this cannot continue »"); cAnswerJ = "nier automata";break; 
                    case 17: message.channel.send ("« Est-ce que tu pleures ? C'est seulement la pluie. Le Diable ne pleure jamais »"); cAnswerJ = "devil may cry 3";break; 
                    case 18: message.channel.send ("« Tu veux qu'on se tire l'oreille ? »"); cAnswerJ = "metale gear solid 5";break; 
                    case 19: message.channel.send ("« OBJECTION ! »"); cAnswerJ = "phoenix wright";break; 
                    case 20: message.channel.send ("« Je ne suis pas un héros, jamais je ne l'ai été, jamais je ne le serai. »"); cAnswerJ = "metal gear solid 4";break; 
                    case 21: message.channel.send ("« J'mets les pieds où j'veux ! Et c'est souvent dans la gueule ! »"); cAnswerJ = "halo 2";break; 
                    case 22: message.channel.send ("« Ceci n'est pas ton tombeau. Mais tu es le bienvenu »"); cAnswerJ = "halo 2";break; 
                    case 23: message.channel.send ("« Tue un Déchu, j'en ferai un Infâme. Tue un Infâme, j'en dressera dix de plus »"); cAnswerJ = "destiny 2";break; 

            
                }
                answeredJ = false;
                quizUserJ = message.author;
            }
            


                msg = message.content.toLocaleLowerCase();

                
                if (answeredA == false && message.author == quizUserA) {
                    userAnswerA = msg;


                    if (userAnswerA == cAnswerA) {
                        db.add(`quizgood_${message.author.id}`, 1)

    
    
                        let sab = new Discord.RichEmbed()
                        .setTitle(`Bonne réponse!`)
                        .setThumbnail("https://i.imgur.com/TgVQZ7C.jpg")
                        .setDescription(`
                        ✅:cookie::cookie::cookie::cookie:✅

                        Bonne réponses!
                        `)
                        message.reply(sab);
                        
                    }



                        if(userAnswerA !== cAnswerA){
                            db.add(`quizfalse_${message.author.id}`, 1)

        
                            let sam = new Discord.RichEmbed()
                            .setTitle(`Mauvaise réponse`)
                            .setThumbnail("https://i.imgur.com/NXPa3av.png")
                            .setDescription(`
                            ❌¯\\_(ツ)_/¯¯\\_(ツ)_/¯¯\\_(ツ)_/¯❌    

                            Mauvaise réponse. 

                            Regarde si tu as oublier le numéro (pas de chiffre romain) après le nom / 
                            bien orthographier le nom et bien sur PAS d'abréviation!
                            `)
                            message.reply(sam);
                    }
                    



                    answeredA = true; cAnswerA = ""; userAnswerA = "";
                }




            if(message.content.startsWith(prefix + "refanime")){
                number = 21;
                var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                switch(random){
               
                    case 1: message.channel.send ("«T'es con naturellement où t'as pris des cours?»"); cAnswerA = "great teacher onizuka";break; 
                    case 2: message.channel.send ("«Interdit de mourir sous mon commandement. T'es déjà pas un cadeau, pas besoin de paperasse»"); cAnswerA = "fullmetal alchimiste";break; 
                    case 3: message.channel.send ("«Les gens meurent si ils sont tués»"); cAnswerA = "fate stay night";break; 
                    case 4: message.channel.send ("«Tu ne le sais pas encore, mais tu es déjà mort»"); cAnswerA = "ken le survivant";break; 
                    case 5: message.channel.send ("«Ne crois pas en moi qui crois en toi, ne crois pas en toi qui crois en moi, crois en toi, c'est tout»"); cAnswerA = "gurren lagann";break; 
                    case 6: message.channel.send ("«la seule chose qui nous est permis de faire, c'est de ne pas regretter les choix que l'on a fait»"); cAnswerA = "shingeki no kyojin";break; 
                    case 7: message.channel.send ("«La vérité puni l'arrogance humaine par le desespoir»"); cAnswerA = "fullmetal alchimiste brotherhood";break; 
                    case 8: message.channel.send ("«Ce que je dis est bien trop subtil pour tes 2 neurones qui se battent en duel»"); cAnswerA = "rosario vampire";break; 
                    case 9: message.channel.send ("«Je ne suis pas stupide. Je suis juste trop paresseux pour vous montrer à quel point je suis intelligent»"); cAnswerA = "hyouka";break; 
                    case 10: message.channel.send ("«Si la vérité est une maîtresse cruelle, le mensonge doit être une gentille fille»"); cAnswerA = "oregairu";break; 
                    case 11: message.channel.send ("«lelolelolelolelo»"); cAnswerA = "jojo's bizarre adventure";break; 
                    case 12: message.channel.send ("«Ok»"); cAnswerA = "one punch man";break; 
                    case 13: message.channel.send ("«L'être humain est lâche par nature. Il jalouse celui qui n'a ne serait-ce qu'un peu plus que lui, et au contraire méprise celui qui possède moins. Pour une légère différence, il craint et il hait. Et c'est dur à admettre, mais spécialement lorsqu'il s'agit de parias comme nous»"); cAnswerA = "berserk";break; 
                    case 14: message.channel.send ("«tu pense qu'être faible est un problème ? Tu te trompe. Le problème c'est de le rester.»"); cAnswerA = "black clover";break; 
                    case 15: message.channel.send ("«Ciaossu !»"); cAnswerA = "katekyoshi hitman reborn";break; 
                    case 16: message.channel.send ("«Mon trésor ? Je vous le laisse, si vous voulez. Trouvez-le ! Je l'ai laissé quelque part dans ce monde»"); cAnswerA = "one piece";break; 
                    case 17: message.channel.send ("«Tous les hommes sans exception, même les plus corrompus, au fond de le cœur ne cherchent nul autre que la considération»"); cAnswerA = "naruto shippuden";break; 
                    case 18: message.channel.send ("«Le roi des Pirates, ce sera moi !»"); cAnswerA = "one piece";break; 
                    case 19: message.channel.send ("«Yes, my Lord»"); cAnswerA = "black butler";break; 
                    case 20: message.channel.send ("«Pour qui vous me prenez ?!»"); cAnswerA = "gurren lagann";break; 
                    case 21: message.channel.send ("«Pousse de soja»"); cAnswerA = "d.gray man";break; 
 

            
                }
                answeredA = false;
                quizUserA = message.author;
            }
            
            });







client.on("message", async message => {

     db.add(`globalMessages_${message.author.id}`, 1);
     db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1);

     const config = require("./config.json");

    if (message.content.indexOf(config.prefix) !== 0) return;

	  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	
















  if(command === "paradoxe"){
    const para1 = new Discord.RichEmbed() 
    .setTitle('Paradoxe du frommage à trous || paradoxe du gruyère')
    .setFooter("Paradoxe: Logique")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Plus il y a de fromage, plus il y a de trous; or plus il y a de trous, moins il y a de fromage; donc plus il y a de fromage, moins il y a de fromage`)
    
    const para2 = new Discord.RichEmbed() 
    .setTitle('Paradoxe socratique')
    .setFooter("Paradoxe: Auto référence")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`« je sais que je ne sais rien »`)
    
    const para3 = new Discord.RichEmbed() 
    .setTitle('Paradoxe sorite || paradoxe du tas')
    .setFooter("Paradoxe: Imprécision")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Si vous enlevez un seul grain de sable à un tas, vous avez toujours un tas. En continuant d'enlever des grains, le tas disparaît. Un seul grain fait-il disparaître un tas ?`)
    
    const para4 = new Discord.RichEmbed() 
    .setTitle('Hôtel de Hilbert')
    .setFooter("Paradoxe: Infini et infinitésimaux")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Un hôtel complet comportant une infinité de chambre peut encore accepter une infinité de nouveaux clients`)
    
    const para5 = new Discord.RichEmbed() 
    .setTitle('Paradoxe de Banach-Tarski')
    .setFooter("Paradoxe: Géométrie et topologie")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Il est possible de couper une boule en un nombre fini de morceaux et de réassembler ces morceaux pour former deux boules identiques à la première`)
    
    const para6 = new Discord.RichEmbed() 
    .setTitle('Paradoxe de la tolérance')
    .setFooter("Paradoxe: Théorie de la décision || Philosophie")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Nous devrions revendiquer, au nom de la tolérance, le droit de ne pas tolérer l'intolérant`)
    
    const para7 = new Discord.RichEmbed() 
    .setTitle('Paradoxe des feuilles de thé')
    .setFooter("Paradoxe: Mécanique classique")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`En remuant un thé, les feuilles au fond de la tasse se rassemblent au centre, alors que la force centrifuge les pousse au bord`)
    
    const para8 = new Discord.RichEmbed() 
    .setTitle('Chat de Schrödinger ')
    .setFooter("Paradoxe: Mécanique quantique")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Selon l'interprétation de Copenhague de la physique quantique, un chat pourrait être à la fois vivant et mort tant qu'il reste non observé`)
    
    const para9 = new Discord.RichEmbed() 
    .setTitle('Effet Mpemba')
    .setFooter("Paradoxe: Thermodynamique")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Dans certaines conditions l’eau chaude gèle plus vite que de l’eau froide`)

    const para10 = new Discord.RichEmbed() 
    .setTitle('Bateau de Thésée')
    .setFooter("Paradoxe: Imprécision ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Si on avait gardé les planches du bateau et qu'avec, on en avait reconstruit un autre, lequel serait le vrai bateau ?`)

    const para11 = new Discord.RichEmbed() 
    .setTitle('Paradoxe de la flèche')
    .setFooter("Paradoxe: Infini et infinitésimaux ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Paradoxe de Zénon qui affirme qu'une flèche lancée est toujours immobile`)

    const para12 = new Discord.RichEmbed() 
    .setTitle('Trompette de Gabriel || solide hyperbolique aigu')
    .setFooter("Paradoxe: Géométrie et topologie ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Simple figure possédant une aire infinie mais un volume fini`)

    const para13 = new Discord.RichEmbed() 
    .setTitle("Paradoxe d'Abilène")
    .setFooter("Paradoxe: Théorie de la décision || Psycologie ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Aucun des quatre membres d'un groupe ne souhaitait se rendre à Abilene mais, par crainte de s’offenser et de se contredire mutuellement, ils y finissent tous !`)

    const para14 = new Discord.RichEmbed() 
    .setTitle(`Théorème d'impossibilité d'Arrow`)
    .setFooter("Paradoxe: Science politique")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Si l'on a plus que deux choix, il n'existe pas de système de vote idéal pour effectuer ce choix`)

    const para15 = new Discord.RichEmbed() 
    .setTitle('Paradoxe du jeune Soleil faible')
    .setFooter("Paradoxe: Astrophysique ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Contradiction entre l'observation d'eau liquide tôt dans l'histoire de la Terre et les estimations suggérant que le Soleil ne brillait pas assez pour fondre la glace, au début de la création du Système solaire`)

    const para16 = new Discord.RichEmbed() 
    .setTitle("Paradoxe de l'acher")
    .setFooter("Paradoxe: Mécanique classique ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Un archer doit viser avec un décalage pour atteindre sa cible`)

    const para17 = new Discord.RichEmbed() 
    .setTitle('Paradoxe des pesticides')
    .setFooter("Paradoxe: Biologie ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`L'application d'un pesticide pour combattre un ravageur peut, en réalité, augmenter son abondance`)

    const para18 = new Discord.RichEmbed() 
    .setTitle('Paradoxe de Liem')
    .setFooter("Paradoxe: Biologie ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`La denture de certains animaux ne semblent pas être adaptée à leur régime alimentaire réel`)

    const para19 = new Discord.RichEmbed() 
    .setTitle('Paradoxe temporel')
    .setFooter("Paradoxe: Temps ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Que se passe-t-il si un voyageur du temps effectue des actions dans le passé qui altère ce qu'il vient de faire ?`)

    const para20 = new Discord.RichEmbed() 
    .setTitle('Couteau de Lichtenberg')
    .setFooter("Paradoxe: Divers ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`Un couteau sans lame auquel ne manque que le manche`)

    const para21 = new Discord.RichEmbed() 
    .setTitle("Paradoxe de l'omnipotence || paradoxe de la toute-puissance")
    .setFooter("Paradoxe: Mysticisme ")
    .setThumbnail('https://i.imgur.com/91NE3ht.jpg')
    .setDescription(`
    **Je précise que c'est un PARADOXE sa ne vien pas de moi ** 
    
    Un être tout-puissant pourrait-il créer une pierre **si lourde qu'il ne puisse pas lui-même la porter** ? S'il le peut, il cesserait d'être tout-puissant ; s'il ne le peut pas, c'est qu'il n'est pas tout-puissant.`)
    
    var randparad = [
        para1,
        para2,
        para3,
        para4,
        para5,
        para6,
        para7,
        para8,
        para9,
        para10,
        para11,
        para12,
        para13,
        para14,
        para15,
        para16,
        para17,
        para18,
        para19,
        para20,
        para21
    ]
    var randpara = randparad[Math.floor(Math.random() * randparad.length)] 
    message.channel.send(randpara)
}

            if(command === "set"){
                const acti = args.join(" ");
                if(message.author.id !== ownerID) return;
                 message.channel.send("la phrase est maintenant: ``"+acti+"``");
                client.user.setActivity(acti);
            };

if(command ==="set-psd"){

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    const pse = args.slice(1).join(' ');

    if(!message.member.permissions.has('ADMINISTRATOR') )return;
    member.setNickname(pse);
}

{
    function random(min, max){
       min = Math.ceil(1);
       max = Math.floor(4);
       randnum = Math.floor(Math.random() * (max - min +1) +min);
   }
    if(command ==="kick_roulette"){
        const reson = "A perdu à la roulette"
        const user = message.author;
        const member = message.guild.member(user);

       random()
       if (randnum == 1){
        const loose = await message.channel.send("Charge le pistolet et");
        loose.edit("Charge le pistolet et.");
        loose.edit("Charge le pistolet et..");
        loose.edit("Charge le pistolet et...");
        loose.edit("Charge le pistolet et...PAN! Désolé mais j'ai pas visée le genou ");
        if(member){
        await member.kick(reson)
        .catch(error => message.reply(`Désoler le jeux est cassé à cause de l'erreur suivant: ${error}`));
        }
       }

       if (randnum == 2){
          const win = await message.channel.send("Charge le pistolet et");
          win.edit("Charge le pistolet et.");
          win.edit("Charge le pistolet et..");
          win.edit("Charge le pistolet et...");
          win.edit("Charge le pistolet et...Clik! GG Tu gagne le droit de refaire une roulette jusqua que tu perde!  ");
       }
       if (randnum == 3){
        const win = await message.channel.send("Charge le pistolet et");
        win.edit("Charge le pistolet et.");
        win.edit("Charge le pistolet et..");
        win.edit("Charge le pistolet et...");
        win.edit("Charge le pistolet et...Clik! GG Tu gagne le droit de refaire une roulette jusqua que tu perde!  ");
     }
     if (randnum == 4){
        const win = await message.channel.send("Charge le pistolet et");
        win.edit("Charge le pistolet et.");
        win.edit("Charge le pistolet et..");
        win.edit("Charge le pistolet et...");
        win.edit("Charge le pistolet et...Clik! GG Tu gagne le droit de refaire une roulette jusqua que tu perde!  ");
     }

    }}




















  
  if (command === "dico"){
    const chepasécriree = args.join(" ");
    if(!chepasécriree)  
    return message.reply("Je ne peut pas t'aider si tu ne met rien");
    message.channel.send(`https://www.larousse.fr/dictionnaires/francais/${chepasécriree}`);
}

if (command === "chercher"){
    const search = args.join(" ");
    if(!search)  
    return message.reply("Je ne peut pas t'aider si tu ne met rien");
    message.channel.send(`http://www.google.fr/#q=${search}`);
}

if (command === "a-f"){
    const chepasdir = args.join(" ");
    if(!chepasdir)  
    return message.reply("Je ne peut pas t'aider si tu ne met rien");
    message.channel.send(`https://www.larousse.fr/dictionnaires/anglais-francais/${chepasdir}`);
}

if (command === "f-a"){
    const chepasdire = args.join(" ");
    if(!chepasdire)  
    return message.reply("Je ne peut pas t'aider si tu ne met rien");
    message.channel.send(`https://www.larousse.fr/dictionnaires/francais-anglais/${chepasdire}`);
}

if(command ==="q-stat"){
    let user = message.author;
    let falsrep = await db.fetch(`quizfalse_${user.id}`);
    let goodrep = await db.fetch(`quizgood_${user.id}`);


    if (falsrep === null) falsrep = 0;
    if (goodrep === null) goodrep = 0;



    let st = new Discord.RichEmbed()
    .setTitle(`**Stat**`)
    .setDescription(`

    **Stat de ${message.author.username} **

    Bonne réponses: \`${goodrep}\`✅
    Mauvaise réponses: \`${falsrep}\`❌
    
    `)
    message.channel.send(st)
}
  

   if(command ==="syntaxe-b"){
    let syntb = new Discord.RichEmbed()
    .setTitle(`Requested By | ${message.author.username}`)
        .setDescription(`

Syntaxe Basique:

0) **Salut, ce message est en gras!**

1) *je me sens penché*

2) __Je suis souligné... Meh__

3) ~~Nan mais ok je me barre~~

4) Bloc ==> 4⃣  pour plus d'info

5) || Pourquoi as-tu cliquer ? ||

`)
    .setFooter(` on peut mixer plusieur syntaxe `)
message.channel.send(syntb)
.then(async function (message ) {

   await message.react("0⃣")
   await message.react("1⃣")
   await message.react("2⃣")
   await message.react("3⃣")
   await message.react("4⃣")
   await message.react("5⃣")


   client.on('messageReactionAdd',async (reaction, user) =>{
       if (reaction.emoji.name === "0⃣" && user.id !== client.user.id) {
           reaction.remove(user)
           reaction.remove()
           await message.delete(syntb)
           
           var gr = new Discord.RichEmbed()
           .setAuthor("Gras")
           .setImage("https://i.imgur.com/bFbRwsL.png")
           message.channel.send(gr);

        }
    })

    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "1⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntb)
            
            var ita = new Discord.RichEmbed()
            .setAuthor("Italique")
            .setImage("https://i.imgur.com/Lt7TM69.png")
            message.channel.send(ita);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "2⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntb)
            
            var souli = new Discord.RichEmbed()
            .setAuthor("Souligné")
            .setImage("https://i.imgur.com/WHB7BzJ.png")
            message.channel.send(souli);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "3⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntb)
            
            var barre = new Discord.RichEmbed()
            .setAuthor("Barré")
            .setImage("https://i.imgur.com/s1YxfdD.png")
            message.channel.send(barre);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "4⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntb)
            
            var bl = new Discord.RichEmbed()
            .setAuthor("Bloc")
            .setDescription(" ``C'est un bloc``  ")
            .setImage("https://i.imgur.com/0OlUjKp.png")
            message.channel.send(bl);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "5⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntb)
            
            var ats = new Discord.RichEmbed()
            .setAuthor("anti-spoil")
            .setDescription(" || tu aime te faire spoil ? ||  ")
            .setImage("https://i.imgur.com/hI3nOOb.png")
            message.channel.send(ats);
 
         }
     })

})
}
    


if(command ==="syntaxe-c"){

    const syntc =  "Syntaxe coloré\n```\nUn message\n```\n```css\nUn message\n```\n```fix\nUn message\n```\n```md\n# Un message\n```\n```py\n# Un message\n```\n```cs\n# Un message\n```\n```diff\n- Un message\n```\n```xl\n'Un message'\n```\n```tex\n$ Un message\n```\n```md\n[Un](message)\n``` "

 message.channel.send(syntc)

.then(async function (message ) {

     await message.react("0⃣")
     await message.react("1⃣")
     await message.react("2⃣")
     await message.react("3⃣")
     await message.react("4⃣")
     await message.react("5⃣")
     await message.react("6⃣")
     await message.react("7⃣")
     await message.react("8⃣")
     await message.react("9⃣")


   client.on('messageReactionAdd',async (reaction, user) =>{
       if (reaction.emoji.name === "0⃣" && user.id !== client.user.id) {
           reaction.remove(user)
           reaction.remove()
           await message.delete(syntc)
           
           var bg = new Discord.RichEmbed()
           .setAuthor("Change la couleur suivant la version du discord")
           .setImage("https://miro.medium.com/max/189/0*Ge9j3pIqe0yLp24w")
           message.channel.send(bg);

        }
    })

    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "1⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntc)
            
            var VB = new Discord.RichEmbed()
            .setAuthor("Change la couleur suivant la version du discord")
            .setImage("https://miro.medium.com/max/174/0*9aDweOZLf9UA6J4J")
            message.channel.send(VB);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "2⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntc)
            
            var J = new Discord.RichEmbed()
            .setAuthor("Jaune")
            .setImage("https://miro.medium.com/max/191/0*UUjVqgsQGDAsIK2c")
            message.channel.send(J);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "3⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntc)
            
            var BC = new Discord.RichEmbed()
            .setAuthor("Bleu clair")
            .setImage("https://miro.medium.com/max/196/0*w1erI-mlSsLS-UAo")
            message.channel.send(BC);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "4⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntc)
            
            var G = new Discord.RichEmbed()
            .setAuthor("Gris")
            .setImage("https://miro.medium.com/max/209/0*ByksHgPVmf_R4WSt")
            message.channel.send(G);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "5⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntc)
            
            var O = new Discord.RichEmbed()
            .setAuthor("Orange")
            .setImage("https://miro.medium.com/max/201/0*IePOTWeVqNh8Xi6v")
            message.channel.send(O);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "6⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntc)
            
            var r = new Discord.RichEmbed()
            .setAuthor("Rouge")
            .setImage("https://miro.medium.com/max/203/0*oyJvdUGzNoXIHNFf")
            message.channel.send(r);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "7⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntc)
            
            var bs = new Discord.RichEmbed()
            .setAuthor("Bleu sarcelle")
            .setImage("https://miro.medium.com/max/183/0*Wjl5GfS3bnfmduUd")
            message.channel.send(bs);
 
         }
     })

     client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "8⃣" && user.id !== client.user.id) {
            reaction.remove(user)
            reaction.remove()
            await message.delete(syntc)
            
            var sur = new Discord.RichEmbed()
            .setAuthor("Surligner")
            .setImage("https://miro.medium.com/max/193/0*X_zV6R7wBAlLSs5u")
            message.channel.send(sur);
 
         }
     })


client.on('messageReactionAdd',async (reaction, user) =>{
    if (reaction.emoji.name === "9⃣" && user.id !== client.user.id) {
        reaction.remove(user)
        reaction.remove()
        await message.delete(syntc)
        
        var bi = new Discord.RichEmbed()
        .setAuthor("bicolore")
        .setImage("https://miro.medium.com/max/202/0*e77nVHYRVK8khWcv")
        message.channel.send(bi);

     }
 })
})



}
	

	
	if(command == "timer"){
     let Timer = args[0];

     if(!args[0]){
       return message.channel.send(":x: " + "| Entré une valeur suivi de \"s ou m ou h ou d\"");
     }

     if(args[0] <= 0){
       return message.channel.send(":x: " + "| Entré une valeur suivi de \"s ou m ou h\"");
     }

     message.channel.send(":white_check_mark: " + "| Timer lancer pour: " + `${ms2(ms2(Timer), {long: true})}`)

     setTimeout(function(){
       message.channel.send(message.author.toString() + ` le temp est fini!, it lasted: ${ms2(ms2(Timer), {long: true})}`)

     }, ms2(Timer));
   }





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


    if(command === "ping") {
    const m = await message.channel.send("▇═══ 25%");
	    m.edit(`▇▇══ 50%`);
        m.edit(`▇▇▇═ 75%`);
        m.edit(`▇▇▇▇ 100%`);
	  m.edit(`Ping de: \` ${new Date().getTime() - message.createdTimestamp} \` ms \n API Latence de: \` ${Math.round(client.ping)} \` ms`);    
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
       let cooldown = 8.64e+7,
          amount = 250;
       let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
       if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0){
         let timeObj = ms(cooldown - (Date.now() - lastDaily));
         message.channel.send(`Patiente encore **${timeObj.hours}h ${timeObj.minutes}m**!`);

       }else{message.channel.send(`Tu as reçu $${amount}`);
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
           message.channel.send(`**Tu as donner $${amount} à ${target.user.tag}!**`)

     }
	if(command === "arkapay"){
      if(message.author.id !== config.ownerID)            
      return message.reply("Tu t'attendais a quoi? Cette commande est reserver à mon créateur");
      let target = message.mentions.members.first() || message.member; 
      let amount = parseInt(args.join('').replace(target, ''));
       if(isNaN(amount)) 
       return message.channel.send("Tu n'as pas mis de montant!");
       let targetBalance = await db.fetch(`userBalance_${target.id}`);
       if (targetBalance === null) targetBalance = 0;
       db.add(`userBalance_${target.id}`,amount);
       message.channel.send(`**Tu as donner $${amount} à ${target.user.tag}!**`)

	}

    {
        function random(min, max){
           min = Math.ceil(1);
           max = Math.floor(3);
           randnum = Math.floor(Math.random() * (max - min +1) +min);
       }
        if(command ==="roulette"){
           selfBalance = await db.fetch(`userBalance_${message.author.id}`);
           let amount = parseInt(args.join(''));
           if(isNaN(amount))
           return message.channel.send("**Fait pas ton radin et défini un montant!**");
           if (selfBalance === null) selfBalance = 0;
   
           if (amount > selfBalance) 
           return message.channel.send("**Ne parie pas plus que ce que tu as!**");
           random();
   
           if (randnum == 1){
               message.reply("Charge le pistolet et...PAN! Heureusement que tu avais une casserolle blindée sur la tête! ")
               db.subtract(`userBalance_${message.author.id}`, amount);
   
           }
           if (randnum == 2){
               message.reply("Charge le pistolet et...Click. Tu as eu de la chance!")
               db.add(`userBalance_${message.author.id}`, amount);
           }
           if (randnum == 3){
               message.reply("Charge le pistolet et...PAN! Heureusement que tu avais une casserolle blindée sur la tête! ")
               db.subtract(`userBalance_${message.author.id}`, amount);
   
           }
        }}
   




       







if(command ==="test"){
         if (message.author.presence.clientStatus = 'desktop') {
    message.channel.send("Tu es sur PC")
    };
         if (message.author.presence.clientStatus = 'mobile') {
        message.channel.send("Tu es sur mobile")
    };
         if (message.author.presence.clientStatus = 'web') {
        message.channel.send("Tu es sur web")
    };


}


            if(command ==="psd"){

            
                const pse = args.join(" ");
            
                message.member.setNickname(pse);
            } 



            

            






            if(command === "love"){
                var l = await message.channel.send(message.author.username)
                l.edit(message.author.username+" 25% "+message.guild.members.random().displayName)
                l.edit(message.author.username+" 50% "+message.guild.members.random().displayName)
                l.edit(message.author.username+" 75% "+message.guild.members.random().displayName)
                l.edit(message.author.username+" 100% ton âme soeur est "+message.guild.members.random().displayName+". Oula j'aimerai pas étre toi...")
            
            }
            
            if(command === "fusion"){
            
                            mom = message.guild.members.random().displayName
                            dad = message.guild.members.random().displayName;
                                        
                            baby = dad.substring(0, 4);
                            newBaby = baby + (mom.substring(4, 10))
                            message.channel.send(newBaby)
            
                            };

        if(command === "monstre") {
            if(message.author.id == config.ownerID)     

            

            var monstO_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Le monstre en toi est:')
            .setImage("https://i.imgur.com/vwRsUBW.jpg")
            .setFooter("")
            message.channel.send(monstO_embed);



            if(message.author.id !== config.ownerID)     

            var monstu = [
                "https://i.imgur.com/pXfJGC9.png",
                "https://i.imgur.com/vgoPbC9.jpg",
                "https://i.imgur.com/CvsIaOX.jpg",
                "https://i.imgur.com/86ovEZu.jpg",
                "https://i.imgur.com/IzJTScd.png",
                "https://i.imgur.com/LAZgBCw.jpg",
                "https://i.imgur.com/ydZbrqF.jpg",
                "https://i.imgur.com/tymTI95.jpg",
                "https://i.imgur.com/nCoZH8x.jpg",
                "https://i.imgur.com/oVPl8ex.jpg",
                "https://i.imgur.com/rmXcUWb.jpg",
                "https://i.imgur.com/qjQ9sJk.png",
                "https://i.imgur.com/ZxfUHdk.jpg",
                "https://i.imgur.com/PhNsGnH.png"

            ];

            var mt = monstu[Math.floor(Math.random() * monstu.length)] ;
            var monst_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Le monstre en toi est:')
            .setImage(mt)
            .setFooter("")
            message.channel.send(monst_embed);





        };

        if(command === "del") {            
            
            var dellet = [
"https://i.imgur.com/vSO0Pha.jpg",
"https://i.imgur.com/GfH98IF.jpg",
"https://i.imgur.com/qwDCQYZ.jpg",
"https://i.imgur.com/uEDzLaJ.jpg",
"https://i.imgur.com/72SU3St.jpg",
"https://i.imgur.com/ZkjzyM4.jpg",
"https://i.imgur.com/T5t9ktB.jpg",
"https://i.imgur.com/87lQKGz.png",
"https://i.imgur.com/jLsfggt.png",
"https://i.imgur.com/AAJ27hj.png",
"https://i.imgur.com/BwJNUHX.jpg",
"https://i.imgur.com/XJlzkbw.jpg",
"https://i.imgur.com/XvWi3YG.png",
"https://i.imgur.com/x92xI1U.png",
"https://i.imgur.com/9peb6vE.png",
"https://i.imgur.com/xIE4Dlw.png",
"https://i.imgur.com/YumxR4S.png",
"https://i.imgur.com/sNiUYEQ.png",
"https://i.imgur.com/o2MFwv1.png",
"https://i.imgur.com/adXzvr2.gif",
"https://i.imgur.com/QUMShn2.png",
"https://i.imgur.com/WLu4MBw.png",
"https://i.imgur.com/2C1DGMQ.png",
"https://i.imgur.com/PgpRywN.jpg",
"https://i.imgur.com/e2II9gv.jpg",
"https://i.imgur.com/uwC9F4h.png",
"https://i.imgur.com/h8MmOgR.jpg"
];

            var del = dellet[Math.floor(Math.random() * dellet.length)] ;
            var delt_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('DELETE SAAAA')
            .setImage(del)
            .setFooter("")
            message.channel.send(delt_embed);


        };



        if(command === "waifu") {            
            
            var wa_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Ta nouvelle waifu')
            .setImage("https://i.imgur.com/6uWVkVn.jpg")
            .setFooter("je te laisse fair connaissance")
            message.channel.send(wa_embed);


        };


        if (command === "yt"){
            const chepasdire = args.join(" ");
            if(!chepasdire)  
            return message.reply("met ce que tu veux rechercher");
            message.channel.send(`https://www.youtube.com/results?search_query=${chepasdire}`);
        }


if (command === "hack"){
    let victime = message.mentions.members.first();

if(!victime)
message.reply("Tu as oublier de metre le nom de la victime");

var ha = [

"👀 Tous les fichiers compromettant! ah... oups c'est les tiens" + ` ${message.author.username}`  ,
"Mais dit moi c'est quoi tous ces fichiers ? 🤔",
"FBI OPEN UP!",
"POURQUOI TU AS DES IMAGES DE BOCU NO PICO !? 😱 ",
`${victime.displayName} il essaie de te hacké ! Wouaa ça m'aurais pas plu`,
"aaah, c'est sa ton mot de passe ?",
"bip boup bip bip hack interompu pour cause de flemme ",
"Tien du café. Oups trompé de fonctionnalité ",
`Hack fini. ${victime.displayName} utilise bien un compte Discord!`
]
var hac = ha[Math.floor(Math.random() * ha.length)] ;

    const m = await message.channel.send("Récupération des données ● ");
    m.edit(`Récupération des données ● ● `);
    m.edit(`Récupération des données ● ● ● `);
    m.edit(`Tape au pif sur le clavier ● `);
    m.edit(`Tape au pif sur le clavier ● ●`);

    m.edit(hac);


}







if(command === "useless") {
   
    var situ = [
        "http://www.leduchamp.com/",
        "http://r33b.net/",
        "http://adultcatfinder.com/",
        "http://catcordion.sergethew.com/",
        "http://www.papertoilet.com/",
        "http://www.ouaismaisbon.ch/",
        "http://eelslap.com/",
        "http://www.koalastothemax.com/",
        "https://www.pointerpointer.com/",
        "http://seoi.net/penint/",
        "http://www.patience-is-a-virtue.org/",
        "https://cant-not-tweet-this.com/",
        "https://trypap.com/",
        "http://www.trashloop.com/",
        "http://dogs.are.the.most.moe/",
        "http://endless.horse/",
        "http://make-everything-ok.com/",
        "https://findtheinvisiblecow.com/",
        "http://hackertyper.com/",
        "https://thisissand.com/",


    ];

    var sit = situ[Math.floor(Math.random() * situ.length)] ;
    var sit_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('>> _Inutile donc indispensable!_ <<')
    .setURL(sit)
    .setDescription("Ce qui est inutile est utile car c'est inutile! N'oublie jamais sa!")
    message.channel.send(sit_embed);
};









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
                   .setDescription(`_**${message.author.username}** fait un clin d'oeil à **${member.displayName}**._`)
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
                   .setDescription(`_**${message.author.username}** fait un coucou à **${member.displayName}**._`)
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
                   .setDescription(`_**${message.author.username}** dort sur **${member.displayName}**._Attention aux filet de bave!`)
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
                   .setDescription(`_**${message.author.username}** réveille **${member.displayName}**._`)
                   message.channel.send(wake_embed);
               };
   
               if(command === "slap") {
                let member = message.mentions.members.first();

                if(member.id == config.ownerID)     
                return message.reply("🖕");
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
                   .setDescription(`_**${message.author.username}** écrase les moustiques qui sont sur **${member.displayName}**._`)
                   .setFooter("Slapping the 🅱ass")
                   message.channel.send(slap_embed);
               };
   
               if(command === "punch") {
                let member = message.mentions.members.first();

                if(member.id == config.ownerID)     
                return message.reply("🖕");
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
                   .setDescription(`_**${message.author.username}** met une bonne grosse patate à **${member.displayName}**._`)
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
                   .setDescription(`_**${message.author.username}** poke **${member.displayName}**._`)
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
                   .setDescription(`_**${message.author.username}** fait pat pat à **${member.displayName}**._`)
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
                   .setDescription(`_**${message.author.username}** fait un bisou à **${member.displayName}**._`)
                   message.channel.send(kiss_embed);
               };  
   
               if(command === "kill") {
                let member = message.mentions.members.first();

                if(member.id == config.ownerID)     
                return message.reply("🖕");
   
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
                   .setDescription(`_**${message.author.username}** veut fair un "massage" à **${member.displayName}**._`)
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
                   .setDescription(`_**${message.author.username}** fait un clin d'oeil à **${member.displayName}**._`)
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
   
   if(message.content.startsWith(prefix + "secret")){
    let secret = new Discord.RichEmbed()
    .setTitle(`Requested By | ${message.author.username}`)
    .setDescription(`
===================**Ajout prochain**===================
    
__**V1**__
    
**-commandes en pagaille**
    
    
__**V2**__
    
**-Commande vocale**
    
**-Changement d'hébergeur**
Base de donnée 
sauvegarde de donnée comme l'argent / carte / ...
    
    
__**V3**__
   
**-RollBack de serveur à triple sécuritée** 
(requieres 2 modo et le propriétaire du serveur )
             
===================**Ajout prochain**===================
`)
    .setFooter(`created by ๖̶̶̶ۣۣۜۜζ͜͡Arkaxii#5194 `)
    message.channel.send(secret);
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
    
        if(message.content.startsWith(prefix + "lancer20")){
            random();
                message.channel.send("le dé roule et c'est un ``"+randnum+"``");
        }} 
    {
    function random(min, max){
            min = Math.ceil(1);
            max = Math.floor(12);
            randnum = Math.floor(Math.random() * (max - min +1) +min);
            }
    
            if(message.content.startsWith(prefix + "lancer12")){
                random();
                message.channel.send("le dé roule et c'est un ``"+randnum+"``");

            }}
    {
    function random(min, max){
            min = Math.ceil(1);
            max = Math.floor(6);
            randnum = Math.floor(Math.random() * (max - min +1) +min);
            }
    
            if(message.content.startsWith(prefix + "lancer6")){
                random();
                message.channel.send("le dé roule et c'est un ``"+randnum+"``");

            }}

                               {
                                    function random(min, max){
                                        min = Math.ceil(1);
                                        max = Math.floor(3);
                                        randnum = Math.floor(Math.random() * (max - min +1) +min);
                                        }      
                    if(message.content.startsWith(prefix + "papier")){
                        let amount = 25;
        let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
    if(amount > selfBalance )
    return message.channel.send("il te faut un minimum de 25$");
                        random();
                        if (randnum == 1){
                            message.reply("Papier ! Ex aequo retente encore ! ")
                        }
                        if (randnum == 2){
                            message.reply("Pierre ! *Balance la pierre dans ta figure* Tu a gagnier ... ")
                            db.add(`userBalance_${message.author.id}`, 50);
                            message.channel.send(`**Tu as reçue $50!**`);
                        }
                        if (randnum == 3){
                            message.reply("Ciseaux ! ( ͡° ل͜ ͡°) Tu as perdu ! ")
                            db.subtract(`userBalance_${message.author.id}`, 25);
                            message.channel.send(`**Aller 25$ pour moi!**`);
                        } }
                    };
                    {
                            function random(min, max){
                                min = Math.ceil(1);
                                max = Math.floor(3);
                                randnum = Math.floor(Math.random() * (max - min +1) +min);
                                }
            if(message.content.startsWith(prefix + "pierre")){
                let amount = 25;
        let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
    if(amount > selfBalance )
    return message.channel.send("il te faut un minimum de 25$");
                random();
                if (randnum == 1){
                    message.reply("Pierre ! Ex aequo retente encore ! ")
                }
                if (randnum == 2){
                    message.reply("Ciseaux ! Tu a gagnier ...*Prend les ciseaux et ...Déconexion* ");
                    db.add(`userBalance_${message.author.id}`, 50);
                    message.channel.send(`**Tu as reçue $50!**`);
                    }
                    {
                if (randnum == 3){
                    message.reply("papier ! ( ͡° ل͜ ͡°) Tu as perdu ! ")
                    db.subtract(`userBalance_${message.author.id}`, 25);
                    message.channel.send("**Aller 25$ pour moi**")
     }
                } };
            } 
     {
                function random(min, max){
                    min = Math.ceil(1);
                    max = Math.floor(3);
                    randnum = Math.floor(Math.random() * (max - min +1) +min);
                    }
    if(message.content.startsWith(prefix + "ciseaux")){
        let amount = 25;
        let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
    if(amount > selfBalance )
    return message.channel.send("il te faut un minimum de 25$");
    random();
    if (randnum == 1){
        message.reply("Ciseaux ! Ex aequo retente encore ! ")
    }
    if (randnum == 2){
        message.reply("Papier ! Tu a gagnier ...*Mange le papier* ")
        db.add(`userBalance_${message.author.id}`, 50);
        message.channel.send(`**Tu as reçue $50!**`);
    }
    if (randnum == 3){
        message.reply("Pierre ! ( ͡° ل͜ ͡°) Tu as perdu ! ")
        db.subtract(`userBalance_${message.author.id}`, 25);
        message.channel.send("**Aller 25$ pour moi**")
    
     }
    } 
                };
             
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
    
     if(message.content.startsWith(prefix + "infos")){
               let memberInfo = message.mentions.members.first();
    
               if(!memberInfo){
                 var userinf = new Discord.RichEmbed()
                 .setAuthor(message.author.username)
                 .setThumbnail(message.author.avatarURL)
                 .setDescription("Voici les infos!")
                 .setColor(0x00FF00)
                 .addField("Pseudo Discord complet:", `${message.author.username}#${message.author.discriminator}`)
                 .addField("ID:", message.author.id)
                 .addField("Crée le:", message.author.createdAt)
    
                     message.channel.send(userinf);
    
               }else{
    
                 var userinfoo = new Discord.RichEmbed()
                 .setAuthor(memberInfo.displayName)
                 .setThumbnail(memberInfo.user.avatarURL)
                 .setDescription("Voici les infos!")
                 .setColor(0x00FF00)
                 .addField("Pseudo Discord complet:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
                 .addField("ID:", memberInfo.id)
                 .addField("Crée le:", memberInfo.user.createdAt)
    
                     message.channel.send(userinfoo);
               }
             }
    
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
                .setFooter(`Crée par ๖̶̶̶ۣۣۜۜζ͜͡Arkaxii#5194 `)            
    
                message.channel.send(infobot);
                };
    


    if(message.content.startsWith(prefix + "sondage")){
                var sond0 = new Discord.RichEmbed()
                .setTitle("aide Sondage")
                .setAuthor(message.author.username)
                .setDescription(` 
                **ouinon**
-Sondage pouvant être répondu par oui ou non 
                **?choix**
-Sondage avec avec 2 choix 
                `)
                .setColor(0x00FF00)
                .setTimestamp()
                message.channel.send(sond0)
    
                }

if (command == "ouinon" ){

    let tTE = args
var sond1 = new Discord.RichEmbed()
.setDescription("Sondage")
.setAuthor(message.author.username)
.setDescription(tTE)
.setColor(0x00FF00)
.setFooter("✅ pour oui || ❌ pour non ")
.setTimestamp()
message.channel.send(sond1)
.then(function(message){
    message.react("✅")
    message.react("❌")
}).catch(function(){    
});
message.delete()

}

if (command == "choix" ){

    let tTE = args[0]
    let Tte = args[1]
var sond2 = new Discord.RichEmbed()
.setDescription("Sondage")
.setAuthor(message.author.username)
.setDescription("🅰"+tTE+ "\n🅱"+Tte)
.setColor(0x00FF00)
.setTimestamp()
message.channel.send(sond2)
.then(function(message){
    message.react("🅰")
    message.react("🅱")
}).catch(function(){    
});
message.delete()

}


if(command == "either" ){

var RA = [
"Etre intélligent mais pué en permanance (meme avec parfum) ",
"Etre miliardaire mais solitaire",
"Etre invisible mais le rester pour toujours",
"Sauver le monde de la famine mais tu mourras de faim",
"Participer aux Hunger Games",
"Un corps de rêve mais un visage affreux",
"Voir tout nu toutes les personnes que tu regardes",
"Savoir comment tu **VAS** mourir",
"Embrasser Marin Le Pen",
"",
"",
""
]
 
var RB = [
"Etre jeté dans \"Le Labyrinthe\" ",
"Avoir un visage sublime et un corps difforme",
"Lire dans les pensées de tous ceux qui te regardent",
"Etre pauvre en argent mais jamais solitaire",
"Chaque personne que tu regarde meurt instantanément",
"Savoir quand tu vas mourir",
"Roter *burp* entre *burp* chaque *burp* mot",
"Sniffer du tabasco tout les jours",
"Te fair caresser la cuisse (*touss* voir plus *touss*) par Hitler",
"",
"",
""
]
var RAR = RA[Math.floor(Math.random() * RA.length)] ;
var RBR = RB[Math.floor(Math.random() * RB.length)] ;

var eith = new Discord.RichEmbed()
.setDescription("Either")
.setAuthor(message.author.username)
.setDescription("Tu préfères \n🅰"+RAR+"\nou\n🅱"+RBR)
.setColor(0x00FF00)
.setTimestamp()
message.channel.send(eith)
.then(function(message){
    message.react("🅰")
    message.react("🅱")
})

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
                                   "C'est un vrai mystère 🤔",
                                   "Bip boup bip bip 🤖"]
    
                                   var result = Math.floor((Math.random() * reponse.length) + 0);
                                   message.channel.send(reponse[result]);
                }
    
                if(command === prefix +"shop"){
                    var shoop = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setTitle("Badge")
                    .setDescription(`
                    **Badge en terre** - 250$ 
                    **Badge en carton** - 800$
                    **Badge en fer** - 1000$
                    **Badge en bronze** - 2000$
                    **Badge en argent** - 4000$
                    **Badge en or** - 10 000$
                    **Badge en platine** - 20 000$
                    **Badge en diamant** - 50 000$
                    **Badge légende** - 200 000$
                    
                    **Pour plus d'information** ?badge [nom du badge (terre/carton/...)] `)
                    .setFooter(`Badge`)
    
                    message.channel.send(shoop);
                };
    
                if(message.content.startsWith(prefix + "badge terre")){
                    var un = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge en terre')
                    .setDescription(`prix = 250$
                    ** [?buy terre] pour l'achat**
                    `)
                     message.channel.send(un);
                 };
    
                 if(message.content.startsWith(prefix + "badge carton")){
                    var deux = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle("Badge en carton")
                    .setDescription(`prix = 500$
                    **[?buy carton] pour l'achat**
                    `)
                    message.channel.send(deux);
                };
    
                if(message.content.startsWith(prefix + "badge fer")){
                    var troi = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle("Badge en fer")
                    .setDescription(`prix = 1000$
                    **[?buy fer] pour l'achat**
                    `)
                    message.channel.send(troi);
                };
    
                if(message.content.startsWith(prefix + "badge bronze")){
                    var quatre = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle("Badge en bronze")
                    .setDescription(`prix = 2000$
                    **[?buy bronze] pour l'achat**
                    `)
                    message.channel.send(quatre);
                };
    
                if(message.content.startsWith(prefix + "badge argent")){
                    var cinque = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle("Badge en argent")
                    .setDescription(`prix = 4000$
                    **[?buy argent] pour l'achat**
                    `)
                    message.channel.send(cinque);
                };
    
                if(message.content.startsWith(prefix + "badge or")){
                    var six = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle("Badge en or")
                    .setDescription(`prix = 10 000$
                    **[?buy or] pour l'achat**
                    `)
                    message.channel.send(six);
                };
    
                if(message.content.startsWith(prefix + "badge platine")){
                    var sept = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle("Badge en Platine")
                    .setDescription(`prix = 20 000$
                    **[?buy platine] pour l'achat**
                    `)
                    message.channel.send(sept);
                };
    
                if(message.content.startsWith(prefix + "badge diamant")){
                    var huit = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle("Badge en diamant")
                    .setDescription(`prix = 50 000$
                    **[?buy diamant] pour l'achat**
                    `)
                    message.channel.send(huit);
                };
    
                if(message.content.startsWith(prefix + "badge légende")){
                    var neuf = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle("Badge légende")
                    .setDescription(`prix = 200 000$
                    **[?buy légende] pour l'achat**
                    `)
                    message.channel.send(neuf);
                };
                if(message.content.startsWith(prefix + "badge legende")){
                    var neuf = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle("Badge légende")
                    .setDescription(`prix = 200 000$
                    **[?buy légende] pour l'achat**
                    `)
                    message.channel.send(neuf);
                };
    
               if(message.content.startsWith(prefix + "buy terre")){
                   let amount1 = '250';
                   let amountb = '999';
    
                   let testBalance = await db.fetch(`testBalance_${message.author.id}`);
                   let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
    
                    if (selfBalance === null) selfBalance = 0;
                    if (testBalance === null) testBalance = 0;
                    if( testBalance > amountb)
                    return message.channel.send("Tu l'as deja eu !");
    
                    if (amount1 > selfBalance)
                    return message.channel.send("Ah ba non tu n'as pas asser ");
                    db.subtract(`userBalance_${message.author.id}`, amount1);
                    db.add(`testBalance_${message.author.id}`, 1000);
                    db.add(`terreBalance_${message.author.id}`, 1);
    
    
    
                    var b01 = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge en terre')
                    .setDescription(`
                    **Tu as acheter le badge en terre!**
                     Fait gaf de ne pas en metre partout! (Sans aucune arière penser bien entendu :p )
                     Regarde dans ton [?inventaire] pour contempler ton nouveau badge ! `)
                     message.channel.send(b01);
    
    
                }
    
    
                if(message.content.startsWith(prefix + "buy carton")){
                   let amount1 = '500';
                   let amountb = '10999';
                   let amountlim = '1';
    
    
                   let terreBalance = await db.fetch(`terreBalance_${message.author.id}`);
                   let testBalance = await db.fetch(`testBalance_${message.author.id}`);
                   let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
                    if (selfBalance === null) selfBalance = 0;
                    if (testBalance === null) testBalance = 0;
                    if(testBalance > amountb )
                    return message.channel.send("Tu l'as deja eu !");
    
                    if(terreBalance < amountlim )
                    return message.channel.send("tu dois acheter le badge terre avant");
    
                    if (amount1 > selfBalance)
                    return message.channel.send("Ah ba non tu n'as pas asser ");
                    db.subtract(`userBalance_${message.author.id}`, amount1);
                    db.add(`testBalance_${message.author.id}`, 10000);
                    db.add(`cartonBalance_${message.author.id}`, 1);
    
    
                    var b02 = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge en carton')
                    .setDescription(`
                    **Tu as acheter le badge en carton!**
                    Regarde dans ton [?inventaire] pour contempler ton nouveau badge ! `)
                    message.channel.send(b02);
    
    
                }
    
    
                if(message.content.startsWith(prefix + "buy fer")){
                   let amount1 = '1000';
                   let amountb = '110999';
                   let amountlim = '1';
    
                   let testBalance = await db.fetch(`testBalance_${message.author.id}`);
                   let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
                   let cartonBalance = await db.fetch(`cartonBalance_${message.author.id}`);
    
                    if (selfBalance === null) selfBalance = 0;
                    if (testBalance === null) testBalance = 0;
                    if(testBalance > amountb )
                    return message.channel.send("Tu l'as deja eu !");
    
                    if(cartonBalance < amountlim ){
                    return message.channel.send("tu dois acheter le badge carton avant");
                    }
                    if (amount1 > selfBalance)
                    return message.channel.send("Ah ba non tu n'as pas asser ")
                    db.subtract(`userBalance_${message.author.id}`, amount1);
                    db.add(`testBalance_${message.author.id}`, 100000);
                    db.add(`ferBalance_${message.author.id}`, 1);
    
    
                    var b03 = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge en fer')
                    .setDescription(`
                    **Tu as acheter le badge en fer!**
                    Regarde dans ton [?inventaire] pour contempler ton nouveau badge ! `)
                    message.channel.send(b03);
    
                }
    
    
                if(message.content.startsWith(prefix + "buy bronze")){
                    let   amount1 = '2000';
                    let amountb = '1110999';
                    let amountlim = '1';
    
                    let testBalance = await db.fetch(`testBalance_${message.author.id}`);
                    let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
                    let ferBalance = await db.fetch(`ferBalance_${message.author.id}`);
    
                     if (selfBalance === null) selfBalance = 0;
                     if (testBalance === null) testBalance = 0;
                     if(testBalance  > amountb )
                     return message.channel.send("Tu l'as deja eu !");
    
                     if( ferBalance < amountlim ){
                     return message.channel.send("tu dois acheter le badge fer avant");
                     }
                    if (amount1 > selfBalance)
                    return message.channel.send("Ah ba non tu n'as pas asser ")
                    db.subtract(`userBalance_${message.author.id}`, amount1);
                    db.add(`testBalance_${message.author.id}`, 1000000);
                    db.add(`bronzeBalance_${message.author.id}`, 1);
    
                    var b04 = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge en bronze')
                    .setDescription(`
                    **Tu as acheter le badge en bronze!** 
                    Regarde dans ton [?inventaire] pour contempler ton nouveau badge ! `)
                    message.channel.send(b04);
                }
    
                if(message.content.startsWith(prefix + "buy argent")){
                    let amount1 = '4000';
                    let amountb = '11110999';
                    let amountlim = '1';
    
                    let testBalance = await db.fetch(`testBalance_${message.author.id}`);
                    let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
                    let bronzeBalance = await db.fetch(`bronzeBalance_${message.author.id}`);
    
                     if (selfBalance === null) selfBalance = 0;
                     if (testBalance === null) testBalance = 0;
                     if(testBalance > amountb )
                     return message.channel.send("Tu l'as deja eu !");
    
                     if( bronzeBalance < amountlim ){
                     return message.channel.send("tu dois acheter le badge bronze avant");
                     }
                    if (amount1 > selfBalance)
                    return message.channel.send("Ah ba non tu n'as pas asser ")
                    db.subtract(`userBalance_${message.author.id}`, amount1);
                    db.add(`testBalance_${message.author.id}`, 10000000);
                    db.add(`argentBalance_${message.author.id}`, 1);
    
    
                    var b05 = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge en argent')
                    .setDescription(`
                    **Tu as acheter le badge en argent!**
                    Regarde dans ton [?inventaire] pour contempler ton nouveau badge ! `)
                    message.channel.send(b05);
    
    
    
                }
    
    
                if(message.content.startsWith(prefix + "buy or")){
                    let  amount1 = '10000';
                    let amountb = '111110999';
                    let amountlim = '1';
    
                    let testBalance = await db.fetch(`testBalance_${message.author.id}`);
                    let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
                    let argentBalance = await db.fetch(`argentBalance_${message.author.id}`);
    
                     if (selfBalance === null) selfBalance = 0;
                     if (testBalance === null) testBalance = 0;
                     if(testBalance > amountb )
                     return message.channel.send("Tu l'as deja eu !");
    
                     if(argentBalance < amountlim){
                     return message.channel.send("tu dois acheter le badge argent avant");
                     }
                    if (amount1 > selfBalance)
                    return message.channel.send("Ah ba non tu n'as pas asser ")
                    db.subtract(`userBalance_${message.author.id}`, amount1);
                    db.add(`testBalance_${message.author.id}`, 100000000);
                    db.add(`orBalance_${message.author.id}`, 1);
    
    
                    var b06 = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge en or')
                    .setDescription(`
                    **Tu as acheter le badge en or!** 
                    Regarde dans ton [?inventaire] pour contempler ton nouveau badge ! `)
                    message.channel.send(b06);
    
    
    
                }
    
    
                if(message.content.startsWith(prefix + "buy platine")){
                    let   amount1 = '20000';
                    let amountb = '1111110999';
                    let amountlim = '1';
    
                    let testBalance = await db.fetch(`testBalance_${message.author.id}`);
                    let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
                    let orBalance = await db.fetch(`orBalance_${message.author.id}`);
    
                    if (selfBalance === null) selfBalance = 0;
                    if (testBalance === null) testBalance = 0;
                    if(testBalance > amountb )
                    return message.channel.send("Tu l'as deja eu !");
    
                    if(orBalance < amountlim){
                    return message.channel.send("tu dois acheter le badge or avant");
                }
                    if (amount1 > selfBalance)
                    return message.channel.send("Ah ba non tu n'as pas asser ")
                    db.subtract(`userBalance_${message.author.id}`, amount1);
                    db.add(`testBalance_${message.author.id}`, 1000000000);
                    db.add(`platineBalance_${message.author.id}`, 1);
    
    
                    var b07 = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge en platine')
                    .setDescription(`
                    **Tu as acheter le badge en platine!** 
                    Regarde dans ton [?inventaire] pour contempler ton nouveau badge ! `)
                    message.channel.send(b07);
    
    
    
                }
    
    
                if(message.content.startsWith(prefix + "buy diamant")){
                    let  amount1 = '50000';
                    let amountb = '11111110999';
                    let amountlim = '1';
    
                    let testBalance = await db.fetch(`testBalance_${message.author.id}`);
                    let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
                    let platineBalance = await db.fetch(`platineBalance_${message.author.id}`);
    
                    if (selfBalance === null) selfBalance = 0;
                    if (testBalance === null) testBalance = 0;
                    if(testBalance > amountb )
                    return message.channel.send("Tu l'as deja eu !");
    
                    if(platineBalance < amountlim){
                    return message.channel.send("tu dois acheter le badge platine avant");
                    }
                    if (amount1 > selfBalance)
                    return message.channel.send("Ah ba non tu n'as pas asser ")
                    db.subtract(`userBalance_${message.author.id}`, amount1);
                    db.add(`testBalance_${message.author.id}`, 10000000000);
                    db.add(`diamantBalance_${message.author.id}`, 1);
    
    
                    var b08 = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge en diamant')
                    .setDescription(`
                    **Tu as acheter le badge en diamant!** 
                    Regarde dans ton [?inventaire] pour contempler ton nouveau badge ! `)
                    message.channel.send(b08);
    
    
    
                }
    
    
                if(message.content.startsWith(prefix + "buy légende")){
                    let  amount1 = '200000';
                    let amountb = '111111110999';
                    let amountlim = '1';
    
                    let testBalance = await db.fetch(`testBalance_${message.author.id}`);
                    let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
                    let diamantBalance = await db.fetch(`diamantBalance_${message.author.id}`);
    
                     if (selfBalance === null) selfBalance = 0;
                     if (testBalance === null) testBalance = 0;
                     if(testBalance > amountb )
                     return message.channel.send("Tu l'as deja eu !");
    
                     if(diamantBalance < amountlim){
                     return message.channel.send("tu dois acheter le badge diamant avant");
                }
                      if (amount1 > selfBalance)
                      return message.channel.send("Ah ba non tu n'as pas asser ")
                      db.subtract(`userBalance_${message.author.id}`, amount1);
                      db.add(`testBalance_${message.author.id}`, 100000000000);
                      db.add(`legendeBalance_${message.author.id}`, 1);
    
    
                    var b09 = new Discord.RichEmbed()
                    .setColor(0x00FF00)
                    .setThumbnail("https://i.imgur.com/w3w1YRs.png")
                    .setTitle('Badge légende')
                    .setDescription(`
                    **Tu as acheter le badge en légend! GG** 
                    Regarde dans ton [?inventaire] pour contempler ton nouveau badge ! `)
                    message.channel.send(b09); 
    }
    if(message.content.startsWith(prefix + "buy legende")){
        let  amount1 = '200000';
        let amountb = '111111110999';
        let amountlim = '1';
    
        let testBalance = await db.fetch(`testBalance_${message.author.id}`);
        let  selfBalance = await db.fetch(`userBalance_${message.author.id}`);
        let diamantBalance = await db.fetch(`diamantBalance_${message.author.id}`);
    
         if (selfBalance === null) selfBalance = 0;
         if (testBalance === null) testBalance = 0;
         if(testBalance > amountb )
         return message.channel.send("Tu l'as deja eu !");
    
         if(diamantBalance < amountlim){
         return message.channel.send("tu dois acheter le badge diamant avant");
    }
          if (amount1 > selfBalance)
          return message.channel.send("Ah ba non tu n'as pas asser ")
          db.subtract(`userBalance_${message.author.id}`, amount1);
          db.add(`testBalance_${message.author.id}`, 100000000000);
          db.add(`legendeBalance_${message.author.id}`, 1);
    
    
          var b09 = new Discord.RichEmbed()
          .setColor(0x00FF00)
          .setThumbnail("https://i.imgur.com/w3w1YRs.png")
          .setTitle('Badge légende')
          .setDescription(`
          **Tu as acheter le badge en légend! GG** 
          regarde dans ton inventaire pour contempler ton nouveau badge !`)
           message.channel.send(b09); 
    }
    
    if(command === "inventaire"){
        var selfBalance = await db.fetch(`userBalance_${message.author.id}`);
        var  testBalance = await db.fetch(`testBalance_${message.author.id}`);
    
        if((testBalance<999)){ 
            if (selfBalance === null) selfBalance = 0;
    
            var inv = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL  )
            .setThumbnail("https://i.imgur.com/w3w1YRs.png")
            .setDescription(`tu as ${selfBalance}$ 
            ` + desc )
            message.channel.send(inv);
             }
    
         if((testBalance>999 && testBalance<1001)){  
            if (selfBalance === null) selfBalance = 0;
    
        var invt = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL  )
        .setThumbnail("https://i.imgur.com/w3w1YRs.png")
        .setDescription(`tu as ${selfBalance}$ 
        Aucune description`)
        message.channel.send(invt);
         }
    
         if((testBalance>1001 && testBalance<11001)){  
            if (selfBalance === null) selfBalance = 0;
    
            var invc = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL  )
            .setThumbnail("https://i.imgur.com/w3w1YRs.png")
            .setDescription(`tu as ${selfBalance}$ 
            Aucune description`)
            message.channel.send(invc);
        }
    
        if((testBalance>11001 && testBalance<111001)){  
            if (selfBalance === null) selfBalance = 0;
    
        var invf = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL  )
        .setThumbnail("https://i.imgur.com/w3w1YRs.png")
        .setDescription(`tu as ${selfBalance}$ 
        Aucune description`)
        message.channel.send(invf);
        }
    
        if((testBalance>111001 && testBalance<1111001)){  
            if (selfBalance === null) selfBalance = 0;
    
        var invb = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL  )
        .setThumbnail("https://i.imgur.com/w3w1YRs.png")
        .setDescription(`tu as ${selfBalance}$ 
        Aucune description`)
        message.channel.send(invb);
        }
    
        if((testBalance>1111001 && testBalance<11111001)){  
            if (selfBalance === null) selfBalance = 0;
    
       var inva = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL  )
        .setThumbnail("https://i.imgur.com/w3w1YRs.png")
        .setDescription(`tu as ${selfBalance}$ 
        Aucune description`)
        message.channel.send(inva);
        }
    
    if((testBalance>11111001 && testBalance<111111001)){  
            if (selfBalance === null) selfBalance = 0;
    
        var invo = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL  )
        .setThumbnail("https://i.imgur.com/w3w1YRs.png")
        .setDescription(`tu as ${selfBalance}$ 
        Aucune description`)
        message.channel.send(invo);
    }
    
        if((testBalance>111111001 && testBalance<1111111001)){  
            if (selfBalance === null) selfBalance = 0;
    
        var invp = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL  )
        .setThumbnail("https://i.imgur.com/w3w1YRs.png")
        .setDescription(`tu as ${selfBalance}$ 
        Aucune description`)
        message.channel.send(invp);
        }
    
        if((testBalance>1111111001 && testBalance<11111111001)){  
            if (selfBalance === null) selfBalance = 0;
    
        var invd = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL  )
        .setThumbnail("https://i.imgur.com/w3w1YRs.png")
        .setDescription(`tu as ${selfBalance}$ 
        Aucune description`)
        message.channel.send(invd);
        }
    
        if((testBalance>11111111001)){  
            if (selfBalance === null) selfBalance = 0;
    
        var invl = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL  )
        .setThumbnail("https://i.imgur.com/w3w1YRs.png")
        .setDescription(`tu as ${selfBalance}$ 
        Aucune description`)
        message.channel.send(invl);
        }
    
    
        }; 
    
                       if(command ==="compt2"){
                        let user = message.mentions.users.first() || message.author;
                        let balance = await db.fetch(`testBalance_${user.id}`);
                        if (balance === null) balance = 0;
                        message.channel.send(`${user.username} - Balance: $${balance}`);
                        }
    
           if(message.content.startsWith(prefix + "messages")){
         let member = message.mentions.members.first() || message.member; 
         let global = await db.fetch(`globalMessages_${member.id}`);
         let guild = await db.fetch(`guildMessages_${member.guild.id}_${member.id}`);
         message.channel.send(`**Message global: \`${global}\`\nMessage dans la guild: \`${guild}\`**` )
         }

    
        if (command === "setchannel"){
        if (!message.mentions.channels.first() && args.join(" ").toUpperCase() !== 'NONE') 
        return func.embed(message.channel, '**Séléctionne un salon** > *?setchannel #salon*')
        let newChannel;
    if (args.join(" ").toUpperCase() === 'NONE') newChannel = '';
    else newChannel = message.mentions.channels.first().id;
    db.set(`messageChannel_${message.guild.id}`, newChannel)
        func.embed(message.channel, `**le salon a été mis a jour à ${message.mentions.channels.first()} **`)
    }
    
    if (command === "setwelc"){
        if (!args.join(" ") && args.join(" ").toUpperCase() !== 'NONE')
            return func.embed(message.channel, 'Séléctionne un salon** > *?setchannel #salon*')
    
        let newMessage;
        if (args.join(" ").toUpperCase() === 'NONE') newMessage = ''; 
        else newMessage = args.join(" ").trim(); 
        db.set(`joinMessage_${message.guild.id}`, newMessage)
            func.embed(message.channel, `**Le text de bienvenue a été mis a jour :**\n > *${args.join(" ").trim()}*`)
    
    }
    
    if(command === "setleav"){
         if (!args.join(" ") && args.join(" ").toUpperCase() !== 'NONE') 
             return func.embed(message.channel, 'Séléctionne un salon** > *?setchannel #salon*') 
    
        let newMessage;
        if (args.join(" ").toUpperCase() === 'NONE') newMessage = ''; 
        else newMessage = args.join(" ").trim(); 
        db.set(`leaveMessage_${message.guild.id}`, newMessage)
            func.embed(message.channel, `**Le text d'aurevoir a été mis a jour:**\n > *${args.join(" ").trim()}*`)

        }




        if(message.content.startsWith(prefix + "rpg")){
 
            const p1 = new Discord.RichEmbed()
            .setAuthor("Niveaux 1")
            .setImage("https://i.imgur.com/2x8lTdK.jpg")
            .setFooter("niveaux `[2]` ===>")
                message.channel.send(p1)
                .then(message => {
                //    message.react("⏪")
                    message.react("⏩");
    
                    client.on('messageReactionAdd',async (reaction, user) =>{
    
                        if (reaction.emoji.name === "⏩" && user.id !== client.user.id) {
                            reaction.remove(user)
                            await message.delete(p1)
                           
                           var p2 = new Discord.RichEmbed()
                           .setAuthor("Niveaux 2")
                           .setImage("https://i.imgur.com/Z0lJoXU.jpg")
                           .setFooter("niveaux `[3]` ===>")
            
                           message.channel.send(p2).then(message => {
                            message.react("⏩");

                            client.on('messageReactionAdd',async (reaction, user) =>{

                            if (reaction.emoji.name === "⏩" && user.id !== client.user.id) {
                                reaction.remove(user)
                                message.channel.send("Vous attaquer les `3 slimes`")
                              await message.delete(p2)
                            
                                var c2 = new Discord.RichEmbed()
                                .setImage("https://i.imgur.com/s1r84dF.jpg")    
    
                                message.channel.send(c2).then(message => {
                                    message.react("🔪")

                                    client.on('messageReactionAdd',async (reaction, user) =>{

                                    if (reaction.emoji.name === "🔪" && user.id !== client.user.id) {
                                        reaction.remove(user)
        
                                        var deflvl2 = new Discord.RichEmbed()
                                            .setAuthor("Combat contre slime")
                                            .setDescription(`
                                            En tentant d'attaquer, vous glisser sur le slime
                                            0 hp
                                            Les slimes ont gagnier!`)
                                            .setFooter("lvl 1")

                                    message.channel.send(deflvl2)                               
                                }
                            })
                        })
                    }
                })
            })
        }
    })
})
}

























{
    function randomw(min, max){
        min = Math.ceil(1);
        max = Math.floor(10);
        randwin = Math.floor(Math.random() * (max - min +1) +min);
        
    }



if(command === "tower"){
    let xp = await db.fetch(`xp_${message.author.id}`);
    if (xp === null) xp = 0;

var mob = [
    "https://i.imgur.com/tyJ9t5g.gif",
    "https://i.imgur.com/Z101RC0.gif",
    "https://i.imgur.com/aOJWY5y.gif",
    "https://i.imgur.com/tmwmE94.gif",
    "https://i.imgur.com/zrtdGaY.gif",
    "https://i.imgur.com/zIHanrx.gif",
    "https://i.imgur.com/JfC5Iyp.gif",
    "https://i.imgur.com/ql4orca.gif",
    "https://i.imgur.com/dOrf6cb.gif",
    "https://i.imgur.com/HYr8jk6.gif",
    "https://i.imgur.com/SWl7kvs.gif",
    "https://i.imgur.com/HfSNpeZ.gif",
    "https://i.imgur.com/fu64yop.gif",
    "https://i.imgur.com/eGHVaED.gif",
    "https://i.imgur.com/fyUH1qk.gif",
    "https://i.imgur.com/79YNSbT.gif",
    "https://i.imgur.com/5X2T9jk.gif",
    "https://i.imgur.com/wkQPuwp.gif",
]
var mobs = mob[Math.floor(Math.random() * mob.length)] ;

randomw();
if(randwin <9 )
await db.add(`xp_${message.author.id}`, 0,1,2,3,4,5 );
var niv1 = new Discord.RichEmbed()
.setTitle("Nom du monstre")
.setDescription(`Mettre Carac et présentation du mob`)
.setImage(mobs)
.setFooter("Pour attaquer: ⚔ \n Pour fuire: ↩")
message.channel.send(niv1)
.then(async function (message ) {
    await message.react("⚔")
    await message.react("↩")
        client.on('messageReactionAdd',async (reaction, user) =>{
if (reaction.emoji.name === "⚔" && user.id !== client.user.id) {
await reaction.remove()
niv1.setTitle("a triomphé de {mettre le nom du mob}")
niv1.setDescription("mettre un journale de combat")
niv1.setThumbnail(mobs)
niv1.setImage()
niv1.setFooter("tu as "+xp+"xp")
message.edit(niv1);
}
})  
client.on('messageReactionAdd',async (reaction, user) =>{
if (reaction.emoji.name === "↩" && user.id !== client.user.id) {
await reaction.remove()
await message.delete(niv1)

message.channel.send("Tu t'est enfui avec succes")

}
})
})

if(randwin === 10 )
var niv1 = new Discord.RichEmbed()
.setTitle("Nom du monstre")
.setDescription(`Mettre Carac et présentation du mob`)
.setImage(mobs)
.setFooter("Pour attaquer: ⚔ || Pour fuire: ↩")
db.subtract(`xp_${message.author.id}`,xp);
message.channel.send(niv1)
.then(async function (message ) {
    await message.react("⚔")
    await message.react("↩")

    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "⚔" && user.id !== client.user.id) {

            await reaction.remove()

            niv1.setTitle("a perdu face à {mettre le nom du mob}")
            niv1.setDescription("mettre un journale de combat")
            niv1.setThumbnail(mobs)
            niv1.setImage()
            niv1.setFooter("Tu a perdu TOUT ton xp")
            message.edit(niv1);
        }
    })
client.on('messageReactionAdd',async (reaction, user) =>{
    if (reaction.emoji.name === "↩" && user.id !== client.user.id) {


        await reaction.remove()
        await message.delete(niv1)


message.channel.send("Tu t'est enfui avec succes")

}
})
})

}
    }




if (command === "class") {


    let pages = [' Menu des classes','Paladin','Chevalier','Barbare','Moine','Rôdeur','Barde','Mage','Sorcier','Clerc','Druide'];
    let page = 1;
    const embetest = new Discord.RichEmbed()
    .setTitle(pages[page-1])
    .setFooter(`Page ${page} sur ${pages.length}`)
    .setDescription(`
    🛡
    **-Paladin:**
    **-Chevalier:**

    ⚔
    **-Barbare:** 
    **-Moine:**
    **-Rôdeur:**

    🏹
    **-Barde:** 
    **-Mage:**
    **-Sorcier:**

    💊
    **-Clerc:** 
    **-Druide:** 
    `)  
    message.channel.send(embetest).then(message =>{
        message.react("⏪").then( r =>{
            message.react("⏩")
    
    
            client.on('messageReactionAdd',async (reaction, user) =>{
    
    if(reaction.emoji.name === '⏪' && user.id !== client.user.id){
    
    reaction.remove(user)
                if (page ===1) return;
                page--;
    
                if(page ===1){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    🛡
                    **-Paladin:**
                    **-Chevalier:**
                
                    ⚔
                    **-Barbare:** 
                    **-Moine:**
                    **-Rôdeur:**
                
                    🏹
                    **-Barde:** 
                    **-Mage:**
                    **-Sorcier:**
                
                    💊
                    **-Clerc:** 
                    **-Druide:** 
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                };
                if(page ===2){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    Un chevalier à l’armure étincelante, un individu dévoué à la loi ainsi qu'au bien  et à un penchant un peut trop prononcé pour la lumière.

                    Style de combat: Corp à corp/ tank/ support
                    armure: Armure de plate lourde
                    arme: Marteaux/ épée 1(2) main(s)/ livre/ Bouclier
                    type d'attaque utiliser: Lumière/ sacrée/ bénédiction mineur
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };



                 if(page ===3){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    Un maître en matière d’armes et d'armures de toutes sortes à la fois courageux et vaillant.

                    Style de combat: Corp à corp/ tank
                    armure: Armure de plate complet
                    arme: Hache à 2 main/ épée à 1(2) main(s)/ Bouclier
                    type d'attaque utiliser: Coup d'estoc/ taunt/ attaque basique
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };
                 if(page ===4){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    Un combattant brutal qui provient des frontières de la civilisation

                    Style de combat: Corp à corp
                    armure: Armure de plate légère
                    arme: Hache à 2 mains, épée à 2 mains  
                    type d'attaque utiliser: Bourinage, bourinage et euu... BOURINAGE!
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };
                 if(page ===5){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    Qui étudie les arts martiaux et s’entraîne à faire de son corps sa meilleure arme et sa meilleure défense et accessoirement aime la bière.

                    Style de combat: Corp à corp
                    armure: équipement en maille/ cuire
                    arme: Pugilat 
                    type d'attaque utiliser: Art martiaux/ Qi 
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };
                 if(page ===6){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    A la fois pisteur et chasseur, une créature des étendues sauvages qui excelle lorsqu'il s’agit de débusquer ses ennemis jurés.

                    Style de combat: Corp à corp
                    armure: équipement en cuire
                    arme: Dague/ courte épée
                    type d'attaque utiliser: furtivité/ poisons  
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };
                 if(page ===7){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    qui utilise ses capacités ainsi que ses sorts pour donner du courage à ses alliés, troubler ses ennemis et accessoirement tiré des flèches.

                    Style de combat: Distance
                    armure: équipement en cuire/ maille
                    arme: Arc, instrument de musique spécialement ceux avec corde
                    type d'attaque utiliser: tire à l'arc/ musique 
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };
                 if(page ===8){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    Qui, à force d'étudier sans cesse, parvient à maîtriser la magie et acquiert d'incroyables pouvoirs.

                    Style de combat: Distance
                    armure: équipement en tissue
                    arme: Bâton/ sceptre 
                    type d'attaque utiliser: Givre/ feux/ éclair
                     `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };
                 if(page ===9){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    Le puissant lien qu'ils possède avec sa divinité protectrice lui permet de bénéficier d'étranges pouvoirs mystiques par l'intermédiaire d’invocation bien spécial.

                    Style de combat: Distance
                    armure: équipement en tissue
                    arme: Bâton/ sceptre
                    type d'attaque utiliser: Invocation/ maléfice/ sortilège mistérieux 
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };
                 if(page ===10){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    Fidèle et dévoué à son dieu, peut soigner les blessures, ramener les morts à la vie et utiliser le pouvoir sacré pour occire ses ennemis.

                    Style de combat: Support distance
                    armure: équipement en tissue
                    arme: Armes sacré (livres sacré/ bâton sacré)
                    type d'attaque utiliser: Sacré/ bénédiction majeur
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };
                 if(page ===11){ 
                    embetest.setTitle(pages[page-1])
                    embetest.setDescription(`
                    A la fois lanceur de sorts vénérant la nature, ami des animaux et métamorphe doué

                    Style de combat: Distance/ Support 
                    armure: équipement en cuire
                    arme: Bâton
                    type d'attaque utiliser: Faune et flore/ métamorphe
                    `)  
                    embetest.setFooter(`Page ${page} sur ${pages.length}`)  
                    message.edit(embetest) 
                    .then(async function (message ) {
                        await message.react("✅")
                        await message.react("❌")
                            client.on('messageReactionAdd',async (reaction, user) =>{
                    if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                        await message.delete(embetest)
                
                    message.channel.send("et ba nop pas encore terminer")
                }
            })  
            client.on('messageReactionAdd',async (reaction, user) =>{
                if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
                    await message.delete(embetest)
                    message.channel.send("❌A été Annuler")
            
                }
            })
            })
                 };
    }
    
     
    
    if(reaction.emoji.name === '⏩' && user.id !== client.user.id){
    
    reaction.remove(user)
        if (page === pages.length) return;
        page++;
    
        if(page ===1){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            🛡
            **-Paladin:**
            **-Chevalier:**
        
            ⚔
            **-Barbare:** 
            **-Moine:**
            **-Rôdeur:**
        
            🏹
            **-Barde:** 
            **-Mage:**
            **-Sorcier:**
        
            💊
            **-Clerc:** 
            **-Druide:** 
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
        };
        if(page ===2){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            Un chevalier à l’armure étincelante, un individu dévoué à la loi ainsi qu'au bien  et à un penchant un peut trop prononcé pour la lumière.

            Style de combat: Corp à corp/ tank/ support
            armure: Armure de plate lourde
            arme: Marteaux/ épée 1(2) main(s)/ livre/ Bouclier
            type d'attaque utiliser: Lumière/ sacrée/ bénédiction mineur
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
    
        }
    })
    })
         };



         if(page ===3){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            Un maître en matière d’armes et d'armures de toutes sortes à la fois courageux et vaillant.

            Style de combat: Corp à corp/ tank
            armure: Armure de plate complet
            arme: Hache à 2 main/ épée à 1(2) main(s)/ Bouclier
            type d'attaque utiliser: Coup d'estoc/ taunt/ attaque basique
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
    
        }
    })
    })
         };
         if(page ===4){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            Un combattant brutal qui provient des frontières de la civilisation

            Style de combat: Corp à corp
            armure: Armure de plate légère
            arme: Hache à 2 mains, épée à 2 mains  
            type d'attaque utiliser: Bourinage, bourinage et euu... BOURINAGE!
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
    
        }
    })
    })
         };
         if(page ===5){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            Qui étudie les arts martiaux et s’entraîne à faire de son corps sa meilleure arme et sa meilleure défense et accessoirement aime la bière.

            Style de combat: Corp à corp
            armure: équipement en maille/ cuire
            arme: Pugilat 
            type d'attaque utiliser: Art martiaux/ Qi 
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
    
        }
    })
    })
         };
         if(page ===6){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            A la fois pisteur et chasseur, une créature des étendues sauvages qui excelle lorsqu'il s’agit de débusquer ses ennemis jurés.

            Style de combat: Corp à corp
            armure: équipement en cuire
            arme: Dague/ courte épée
            type d'attaque utiliser: furtivité/ poisons  
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
    
        }
    })
    })
         };
         if(page ===7){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            qui utilise ses capacités ainsi que ses sorts pour donner du courage à ses alliés, troubler ses ennemis et accessoirement tiré des flèches.

            Style de combat: Distance
            armure: équipement en cuire/ maille
            arme: Arc, instrument de musique spécialement ceux avec corde
            type d'attaque utiliser: tire à l'arc/ musique 
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
    
        }
    })
    })
         };
         if(page ===8){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            Qui, à force d'étudier sans cesse, parvient à maîtriser la magie et acquiert d'incroyables pouvoirs.

            Style de combat: Distance
            armure: équipement en tissue
            arme: Bâton/ sceptre 
            type d'attaque utiliser: Givre/ feux/ éclair
             `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
    
        }
    })
    })
         };
         if(page ===9){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            Le puissant lien qu'ils possède avec sa divinité protectrice lui permet de bénéficier d'étranges pouvoirs mystiques par l'intermédiaire d’invocation bien spécial.

            Style de combat: Distance
            armure: équipement en tissue
            arme: Bâton/ sceptre
            type d'attaque utiliser: Invocation/ maléfice/ sortilège mistérieux 
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
    
        }
    })
    })
         };
         if(page ===10){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            Fidèle et dévoué à son dieu, peut soigner les blessures, ramener les morts à la vie et utiliser le pouvoir sacré pour occire ses ennemis.

            Style de combat: Support distance
            armure: équipement en tissue
            arme: Armes sacré (livres sacré/ bâton sacré)
            type d'attaque utiliser: Sacré/ bénédiction majeur
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
    
        }
    })
    })
         };
         if(page ===11){ 
            embetest.setTitle(pages[page-1])
            embetest.setDescription(`
            A la fois lanceur de sorts vénérant la nature, ami des animaux et métamorphe doué

            Style de combat: Distance/ Support 
            armure: équipement en cuire
            arme: Bâton
            type d'attaque utiliser: Faune et flore/ métamorphe
            `)  
            embetest.setFooter(`Page ${page} sur ${pages.length}`)  
            message.edit(embetest) 
            .then(async function (message ) {
                await message.react("✅")
                await message.react("❌")
                    client.on('messageReactionAdd',async (reaction, user) =>{
            if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
                await message.delete(embetest)
        
            message.channel.send("et ba nop pas encore terminer")
        }
    })  
    client.on('messageReactionAdd',async (reaction, user) =>{
        if (reaction.emoji.name === "❌" && user.id !== client.user.id) {
            await message.delete(embetest)
            message.channel.send("❌A été Annuler")
        }
    })
})
};
}
})
})
})
};
});
/*client.on("message", async message => {
        
    const ytdl = require('ytdl-core');

if (message.content.indexOf(config.prefix) !== 0) return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    
   db.add(`globalMessages_${message.author.id}`, 1);
   db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1);

   if(command === "play"){
    const streamOptions = {cherche: 0, volume: 1};
    const broadcast = client.createVoiceBroadcast();
    if(!message.member.voiceChannel)
    return message.channel.send("Va dans un vocal avant");

    if(!args[0])
    return message.channel.send("C'est mieux avec l'url :p");
    let validate = await ytdl.validateURL(args[0]);
    if (!validate) 
    return message.channel.send("Un url valid serai mieux :p");
    let info = await ytdl.getInfo(args[0]);
        let voiceConnection = message.member.voiceChannel.join()
        .then(voiceConnection => {
        const stream = ytdl(args[0], { filter : 'audioonly' });
        broadcast.playStream(stream);
        const Dispatcher = Connection.playBroadcast(broadcast);
        })
        .catch(console.error);
    message.channel.send(`en cour: ${info.title}`);

    }
       if(command === "leave"){
        if(!message.member.voiceChannel)
        return message.channel.send("Tu dois te connecter au vocale pour me déconnecter!");
        if(!message.guild.me.voiceChannel)
        return message.channel.send("je ne suis pas connecter");
        message.guild.me.voiceChannel.leave();
        message.channel.send("ok");
    }
        });*/

                client.on('guildMemberAdd', member => {

                    let serverTag = member.guild.name
                    const welcomechannel = member.guild.channels.find("name", "bienvenue")
                    var embed = new Discord.RichEmbed()
                    .setColor('#76D880')
                    .setDescription(`<@${member.user.id}> à rejoint **${serverTag}**! Bienvenue à toi !`)
                    return welcomechannel.send({embed});
                
                });
                
                
                client.on('guildMemberRemove', member => { 
                    let serverTag = member.guild.name
                    const leavechannel = member.guild.channels.find('name', 'bienvenue')
                    var embed = new Discord.RichEmbed()
                    .setColor('#76D880')
                    .setDescription(`<@${member.user.id}> à quitter **${serverTag}**.Tu nous manquera... ou pas ! `)
                    return leavechannel.send({embed})
                }); 


                client.login(token); 
