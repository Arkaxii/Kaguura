const token = process.env.token;
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?" ;

client.on("ready",() => {
 
    
  answered = true;
  cAnswer = "";
  userAnswer = "";
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

  if (msg.startsWith(prefix + "quiz" )){
      number = 3;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch(random){
          case 1: message.channel.send ("Que ce qu'es le mot Tellurique: \n1 - Qualifie des planètes similaires a la Terre \n2 - Un minerai extrait de roche \n3 - Un mouvement spirituelle \n4 - Obi wan kenobi "); cAnswer = "1"; break;
          case 2: message.channel.send ("Quel est l'auteur de la citation « Je n’ai pas échoué. J’ai simplement trouvé 10 000 solutions qui ne fonctionnent pas. » ?  \n1 - Benjamin Franklin. \n2 - Albert Einstein. \n3 - Thomas Edison. \n4 - Emmanuel Macron."); cAnswer = "3"; break;
          case 3: message.channel.send ("Parmis ces anime quelle l'anime avec le plus d'épisodes ? \n1 - Detective Conan \n2 - One Piece \n3 - Doraemon \n4 - C'est l'anime le plus long"); cAnswer = "3"; break;

      }
      answered = false;
      quizUser = message.author;
  }



});
client.login(token);
