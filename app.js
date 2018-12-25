const token = process.env.token;
// Charge la bibliothèque discord.js
const  Discord  =  require ( " discord.js " );

// Ceci est votre client. Certaines personnes l'appellent `bot`, d'autres l'appellent` soi-même`,
// certains pourraient l'appeler `cootchie`. De toute façon, quand vous voyez `client.something` ou` bot.something`,
// c'est ce à quoi nous nous référons. Votre client
 client  const =  new  Discord.Client ();

// Ici nous chargeons le fichier config.json qui contient notre jeton et nos valeurs de préfixe.
const  config  =  require ( " ./config.json " );
// config.token contient le jeton du bot
// config.prefix contient le préfixe du message.

client . on ( " prêt " , () => {
  // Cet événement sera exécuté si le bot démarre et se connecte avec succès.
  console . log ( ` Bot a commencé, avec $ { client . utilisateurs . taille } utilisateurs, $ { client . canaux . taille } canaux de $ { client . guildes . taille } guildes. ` );
  // Exemple de changer le jeu du bot en quelque chose d'utile. `client.user` est ce que le
  // docs se réfère à "ClientUser".
  client . utilisateur . setActivity ( ` Au service de $ { client . guildes . taille } serveurs ` );
});

client . sur ( " guildCreate " , guild  => {
  // Cet événement se déclenche lorsque le bot rejoint une guilde.
  console . log ( ` Nouvelle guilde rejoint: $ { guild . name } (id: $ { guild . id }} ). Cette guilde a $ { guild . memberCount } members! ` );
  client . utilisateur . setActivity ( ` Au service de $ { client . guildes . taille } serveurs ` );
});

client . sur ( " guildDelete " , guild  => {
  // cet événement se déclenche lorsque le bot est supprimé d'une guilde.
  console . log ( ` J'ai été retiré de: $ { guild . name } (id: $ { guild . id } ) ` );
  client . utilisateur . setActivity ( ` Au service de $ { client . guildes . taille } serveurs ` );
});


client . on ( " message " , message asynchrone  => { 
  // Cet événement sera exécuté sur chaque message reçu, quel que soit le canal ou le DM.
  
  // C'est une bonne pratique d'ignorer les autres robots. Cela fait aussi que votre bot s'ignore
  // et ne pas entrer dans une boucle de spam (on appelle cela "botception").
  if ( message . author . bot ) return ;
  
  // C'est aussi une bonne pratique d'ignorer tout message qui ne commence pas par notre préfixe,
  // qui est défini dans le fichier de configuration.
  si ( un message . contenu . indexOf ( config . préfixe ) ==!  0 ) retour ;
  
  // Nous séparons ici notre nom de "commande" et nos "arguments" pour la commande.
  // Par exemple, si nous avons le message "+ say Est-ce la vraie vie?" , nous aurons le suivant:
  // commande = dire
  // args = ["Est-ce que", "ceci", "le", "réel", "la vie?"]
  const  args  =  message . contenu . tranche ( config . préfixe . longueur ). trim (). scinder ( /  + / g );
  const  commande  =  args . shift (). toLowerCase ();
  
  // Allons-y avec quelques exemples de commandes courantes! N'hésitez pas à les supprimer ou à les modifier.
  
  if (commande ===  " ping " ) {
    // Calcule le ping entre l'envoi d'un message et sa modification, donnant une belle latence aller-retour.
    // Le second ping est une latence moyenne entre le bot et le serveur websocket (aller simple, pas aller-retour)
    const  m  =  attend le  message . canal . envoyer ( " Ping? " );
    m . modifier ( ` ! Pong est Latence $ { m . createdTimestamp  - un  message . createdTimestamp } . ms Latence API est $ { Math . tour ( client . ping ) } ms ` );
  }
  
  if (commande ===  " dire " ) {
    // fait que le bot dit quelque chose et supprime le message. Par exemple, il est ouvert à tout le monde.
    // Pour obtenir le "message" lui-même, nous rejoignons le `args` dans une chaîne avec des espaces:
    const  sayMessage  =  args . rejoindre ( "  " );
    // Ensuite, nous supprimons le message de commande (sournois, non?). La prise ignore simplement l'erreur avec un truc mignon smiley.
    message . delete (). catch ( O_o => {});
    // Et on demande au bot de dire la chose:
    message . canal . envoyer (direMessage);
  }
  
  if (commande ===  " kick " ) {
    // Cette commande doit être limitée aux mods et aux administrateurs. Dans cet exemple, nous venons de coder en dur les noms de rôle.
    // S'il vous plaît lire sur Array.some () pour comprendre ce bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if ( ! message . membre . rôles . certains ( r => [ " Administrateur " , " Modérateur " ]. includes ( r . nom )))
      renvoyer le  message . répondre ( " Désolé, vous ne disposez pas des autorisations nécessaires pour utiliser cela! " );
    
    // Vérifions d'abord si nous avons un membre et si nous pouvons lui donner un coup de pied!
    // message.mentions.members est une collection de personnes qui ont été mentionnées, en tant que GuildMembers.
    // Nous pouvons également aider à obtenir le membre par ID, ce qui serait args [0]
    let member =  message . mentions . membres . premier () ||  message . guilde . membres . get (args [ 0 ]);
    si ( ! membre)
      renvoyer le  message . reply ( " Veuillez mentionner un membre valide de ce serveur " );
    si ( ! membre . kickable )
      renvoyer le  message . répondre ( " Je ne peux pas donner un coup de pied à cet utilisateur! Ont-ils un rôle plus important? Ai-je des autorisations de coup? " );
    
    // slice (1) supprime la première partie, qui devrait être ici la mention ou l'identifiant de l'utilisateur
    // join ('') prend toutes les différentes parties pour en faire une chaîne unique.
    laissez raison =  args . tranche ( 1 ). rejoindre ( '  ' );
    si ( ! raison) raison =  " Aucune raison fournie " ;
    
    // Le moment est venu de donner un coup de pied rapide!
    attendez  membre . coup de pied (raison)
      . catch ( error  =>  message . reply ( ` Sorry $ { message . author } je n'ai pas pu donner un coup de pied à cause de: $ { error } ` ));
    message . réponse ( ` $ { member . user . tag } a été botté par $ { message . author . tag } car: $ { raison } ` );

  }
  
  if (commande ===  " ban " ) {
    // La plupart de cette commande est identique à kick, sauf qu'ici, nous ne laisserons que les administrateurs le faire.
    // Dans le monde réel, les mods pourraient aussi interdire, mais ceci n'est qu'un exemple, non? ;)
    if ( ! message . membre . rôles . certains ( r => [ " Administrateur " ]. includes ( r . nom )))
      renvoyer le  message . répondre ( " Désolé, vous ne disposez pas des autorisations nécessaires pour utiliser cela! " );
    
    let member =  message . mentions . membres . premier ();
    si ( ! membre)
      renvoyer le  message . reply ( " Veuillez mentionner un membre valide de ce serveur " );
    si ( ! membre . bannable )
      renvoyer le  message . répondre ( " Je ne peux pas interdire cet utilisateur! Ont-ils un rôle plus important? Ai-je des autorisations d'interdiction? " );

    laissez raison =  args . tranche ( 1 ). rejoindre ( '  ' );
    si ( ! raison) raison =  " Aucune raison fournie " ;
    
    attendez  membre . interdiction (raison)
      . catch ( error  =>  message . reply ( ` Sorry $ { message . author } Je n'ai pas pu interdire à cause de: $ { error } ` ));
    message . répondre ( ` $ { member . user . tag } a été banni par $ { message . author . tag } car: $ { raison } ` );
  }
  
  if (commande ===  " purge " ) {
    // Cette commande supprime tous les messages de tous les utilisateurs du canal, jusqu'à 100.
    
    // récupère le nombre de suppressions, en tant que nombre réel.
    const  deleteCount  =  parseInt (args [ 0 ], 10 );
    
    // Ooooh nice, conditions combinées. <3
    if ( ! deleteCount || deleteCount <  2  || deleteCount >  100 )
      renvoyer le  message . réponse ( " Veuillez indiquer un nombre compris entre 2 et 100 pour le nombre de messages à supprimer " );
    
    // Nous avons donc nos messages et les supprimons. Assez simple, non?
    const  fetched  =  attend le  message . canal . fetchMessages ({limit : deleteCount});
    message . canal . bulkDelete (récupéré)
      . catch ( error  =>  message . reply ( ` Impossible de supprimer les messages à cause de: $ { error } ` ));
  }
});
});
client.login(token);
