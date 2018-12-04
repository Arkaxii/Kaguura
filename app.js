const token = process.env.token;
const Discord = require('discord.js');
const client = new Discord.Client();
const money = require('discord-money'); 

client.on("message", message => {
 
           const moment = require('moment');

          var prefix = '?';
          if(message.content.startsWith(prefix + "compt")){
 
            money.fetchBal(message.author.id).then((i) => {  
                message.channel.send(`**Tu as:** ${i.money}`);
            })
 
        }
        var prefix = '?';      
        if(message.content.startsWith(prefix + "payadm")){
 
            money.updateBal(message.author.id, 500 ).then((i) => {  
                message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
            })
        }
       var prefix = '?';   
        if(message.content.startsWith(prefix + "payfine1")){
           
            if(  money.fetchBal(message.author.id).then((i) => { `${i.money} `< `499 `})) {
                    message.channel.send(`not enough`);
             
            

            }else{
                    money.updateBal(message.author.id, -500).then((i) => { 
                        message.channel.send(`**You paid your fine of $500!**\n**New Balance:** ${i.money}`);
                    }) 
                }
            
            }
        var prefix = '?';
        if(message.content.startsWith(prefix + "daily")){
               
        
         if (money[message.author.username + message.guild.name] != moment().format('L')) {
                    money[message.author.username + message.guild.name] = moment().format('L')
                    money.updateBal(message.author.id, 500).then((i) => {
                        message.channel.send({embed: {
                            color: 3447003,
                            description: 'Tu as reçu **$500** \`?daily`\. => \`?compt\`.',
                            author: {
                                name: `${message.author.username}#${message.author.discriminator}`,
                                icon_url: message.author.avatarURL 
                            }
                        }});
                    })
                } else {
                    message.channel.send({embed: {
                        color: 3447003,
                        description: 'Tu as deja reçu ton\`?daily`\. Retente dans **' + moment().endOf('day').fromNow() + '**.', 
                        author: {
                            name: `${message.author.username}#${message.author.discriminator}`,
                            icon_url: message.author.avatarURL 
                        }
                    }});
                }
            }



var prefix = '?';
    if(message.content.startsWith(prefix + "ping")){
    message.channel.send("Chuut tu a rien dit");
};

var prefix = '?';

if(message.content.startsWith(prefix + "help")){

    var image_embed = new Discord.RichEmbed()
    .setColor('#0000cc')
    .setTitle('image:')
    .setDescription('[`wtf / autistic / ty / exactly / pcmr / cat`] ')
    .setFooter('image')
    message.channel.send(image_embed);

    var random_embed = new Discord.RichEmbed()
    .setColor('#0000cc')
    .setTitle('random:')
    .setDescription('[`pile / face / lancer6 / lancer12 / lancer20`] ')
    .setFooter('random')
    message.channel.send(random_embed);

    var jeux_embed = new Discord.RichEmbed()
    .setColor('#0000cc')
    .setTitle('jeux:')
    .setDescription('[`refjeux / refanime`] ')
    .setFooter('jeux')
    message.channel.send(jeux_embed);

    var argent_embed = new Discord.RichEmbed()
    .setColor('#0000cc')
    .setTitle('argent:')
    .setDescription('[`daily / compt`] ')
    .setFooter('argent')
    message.channel.send(argent_embed);

    var autre_embed = new Discord.RichEmbed()
    .setColor('#0000cc')
    .setTitle('autre:')
    .setDescription('[`secret / help`] ')
    .setFooter('autre')
    message.channel.send(autre_embed);

};   

var prefix = '?';

if(message.content.startsWith(prefix + "wtf")){
    message.channel.send("https://i.pinimg.com/originals/87/1f/3a/871f3afd6d0b5fdc14ecae612dd57bd1.jpg")
};

var prefix = '?';

if(message.content.startsWith(prefix + "autistic")){
    message.channel.send("https://i.imgur.com/3D0XEV5.png")
};

var prefix = '?';

if(message.content.startsWith(prefix + "ty")){
    message.channel.send("https://memegenerator.net/img/instances/48502183/thanks-bro.jpg")
};

var prefix = '?';

if(message.content.startsWith(prefix + "exactly")){
    message.channel.send("https://i.imgur.com/B4oPi2u.jpg")
};

var prefix = '?';

if(message.content.startsWith(prefix + "pcmr")){
    message.channel.send("https://ctl.s6img.com/society6/img/oGIy9Ox-_WKYk_952j5pyZAyDcA/w_700/duvet-covers/swatch/~artwork,fw_6000,fh_6000,iw_6000,ih_6000/s6-0028/a/13776406_8169003/~~/glorious-pc-gaming-master-race-feels-good-man-duvet-covers.jpg?wait=0&attempt=0")
};

var prefix = '?';

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

var prefix = '?';

if(message.content.startsWith(prefix + "secret")){
    message.channel.send("Ajout prochain: jeux de cart et collection / peut etre une commande permettant de sauvgarder un serv (pour avoir un rollback du serv) au cas ou de raid ")
}
{
function random(min, max){
    min = Math.ceil(1);
    max = Math.floor(2);
    randnum = Math.floor(Math.random() * (max - min +1) +min);
}

var prefix = '?';

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

var prefix = '?';

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
    
    var prefix = '?';
    
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
        
        var prefix = '?';
        
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
                    
    var prefix = '?';
                    
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
 var prefix = '?';

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




        
});
client.login(token);
