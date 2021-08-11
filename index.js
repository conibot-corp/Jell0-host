const Discord = require('discord.js');


var bot = new Discord.Client()
  bot.login("ODAxMzM3MjEzMjU3OTA4MjI0.YAfNbw.0aIRrnCL8AKPaF4UGKyQUkdE6r8");
const {MessageEmbed} = require('discord.js');

//== couleurs embed : ==
//bases : #0080FF
//moderation : #CC0000
//fun : #FFFF00
//utilitaire : #00CC00
//autre : #404040

//-----autre-----
//config
bot.on('message', function (message) {
  if (message.content == '&config') {
 message.channel.send(config).then(e => {
   message.react('✅').then(() => message.react('⏩'));

   const filter = (reaction, user) => {
   	return ['✅', '⏩'].includes(reaction.emoji.name) && user.id === message.author.id;
   };

   message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
   	.then(collected => {
   		const reaction = collected.first();

   		if (reaction.emoji.name === '✅') {
   			message.reply('chek !');
   		} else {
   			message.reply('past !');
   		}
   	})
   	.catch(collected => {
   		message.reply('bon...');
   	});
})

}
});

const config = new Discord.MessageEmbed()
    .setColor('#404040')
    .setTitle('salut !!')
    .setURL('https://Jell0-corp.github.io/Jell0web/command.html')
    .setAuthor('Jell0')
    .setDescription('Bonjour la companie ! je suis Jell0 le bot discord !')
    .setThumbnail('https://cdn.discordapp.com/app-icons/801337213257908224/394b72c97d72e41be24fa71a9fd17bd1.png?size=128')
    .addField('si tu veut continuer ' , "&" )




//----moderation----
//insulte
let insulte = ["pute","connard"]
bot.on("message", (message) => {
insulte.forEach((insulte) => {
  if (message.content.toLowerCase().includes(insulte)) {
    message.delete();
    message.channel.send(moderationinsultes);
  }
  })
});

const moderationinsultes = new Discord.MessageEmbed()
.setColor('#CC0000')
.setTitle('pas des insultes !')
.setAuthor('Jell0')
.setDescription('cest pas bien les insultes !')
.setThumbnail('https://img.icons8.com/ios/100/000000/angry.png')


//clear
bot.on("message", message => {
  if(message.content === "&clear") {
    if (message.author.bot) return;
    message.channel.bulkDelete(20)
    .catch(console.error);
 message.channel.send('moderationdeleted');

  }
})
const moderationdeleted = new Discord.MessageEmbed()
.setColor('#CC0000')
.setTitle('Messages supprimées')
.setAuthor('Jell0')
.setDescription('**20 messages** ont été supprimées avec succès !')
.setThumbnail('https://img.icons8.com/ios/50/ffffff/trash--v1.png')

//-----bases-----
//help
bot.on('message', function (message) {
  if (message.content == '&help') {
 message.channel.send(help);
 message.channel.send(colors);
 message.channel.send(colorbases);
  message.channel.send(colormoderation);
   message.channel.send(colorfun);
    message.channel.send(colorutilitaire);
     message.channel.send(colorautre);
}
});
const help = new Discord.MessageEmbed()
    .setColor('#0080FF')
    .setTitle('commandes')
    .setURL('https://Jell0-corp.github.io/Jell0web/command.html')
    .setAuthor('Jell0')
    .setDescription('voici les commandes')
    .setThumbnail('https://cdn.discordapp.com/app-icons/801337213257908224/394b72c97d72e41be24fa71a9fd17bd1.png?size=128')
    .addField('**Moderation**' , "-" )
    .addField('&clear' , "efface 20 messages" )
    .addField('**__bases__**' , "-" )
    .addField('&help' , "demander de l'aide" )
    .addField('&version' , "montrer version" )
    .addField('**__utilitaire__**' , "-" )
    .addField('&count' , "compter" )
    .addField('**__fun__**' , "-" )
    .addField('&evn' , "participer a l'event !" )
    .addField('&blague' , "petite blague" )
    .addField('&livraison' , "faites vous livrer quelqu'e chose" )
    .addField('&baffe' , "ayer une bonne claque !" )
    .addField('&faits' , "apprenez en ayant des faits !" )

    const colors = new Discord.MessageEmbed()
        .setColor('#0080FF')
        .setTitle('couleurs')
        .setAuthor('Jell0')
        .setDescription('les embeds ont diffèrentes couleurs par catégories :')

        const colorbases = new Discord.MessageEmbed()
            .setColor('#0080FF')
            .setTitle('bases')

            const colormoderation = new Discord.MessageEmbed()
                .setColor('#CC0000')
                .setTitle('modèration')

                const colorfun = new Discord.MessageEmbed()
                    .setColor('#FFFF00')
                    .setTitle('fun')

                    const colorutilitaire = new Discord.MessageEmbed()
                        .setColor('#00CC00')
                        .setTitle('utilitaire')

                        const colorautre = new Discord.MessageEmbed()
                            .setColor('#404040')
                            .setTitle('autre')






    //version
    bot.on('message', function (message) {
      if (message.content == '&version') {
     message.channel.send(version);
    }
    });

    const version = new Discord.MessageEmbed()
        .setColor('#0080FF')
        .setTitle('vous êtes en **1.8**')
        .setAuthor('Jell0')
        .setDescription('nouvautées 1.8 :')
        .addField('events' , "il y'a maintenand des concours ! tape `&evn`" )
              .addField('embeds' , "les embeds ont diffèrentes couleurs par catégories !" )





//-----utilitaire-----





//count
bot.on('message', function (message) {
  if (message.content == '&count') {
message.react('1️⃣')
message.react('2️⃣')
message.react('3️⃣')
message.react('✅')
  }
});

//-----event-----

//evn
bot.on('message', function (message) {
  if (message.content == '&evn') {
 message.channel.send(eventintro);
}
});

const eventintro = new Discord.MessageEmbed()
    .setColor('#FFFF00éé')
    .setTitle('events')
    .setAuthor('Jell0')
    .setDescription('Salut camarade ! Jell0 et son équipe organise chaque mois un event de style **enquète** ! Ces events sont des grands jeux ou le premier a avoir terminée le jeu gagne une récompense !')
    .addField('event actuel :' , "La destruction de discord !" )
    .addField('participer :' , "Pour commencer l'aventure, tape `!evnstart` !" )

    //evn start
    bot.on('message', function (message) {
      if (message.content == '&evnstart') {
     message.channel.send(eventstart);
    }
    });

    const eventstart = new Discord.MessageEmbed()
        .setColor('#FFFF00éé')
        .setTitle('La destruction de discord !')
        .setAuthor('Jell0')
        .setDescription('Bonjour chère discordien ! Je suis Jell0, Un dévloppeur fou au nom de Obsi veut détruire discord ! Alors je te donne la mission de me retrouver le code de la bombe numérique qui va bientot décoler vers les datacenters de discord ! Le code me permetras de désactiver cette bombe pour empecher la destruction de discord !')
        .addField('Un petit indice' , "Jai réusit d'intercepter une onde radio provenant de la base de Obsi (pour voir le conversation radio, tape '&evnradio' )" )
          .addField('Quand tu a trouvée le code,  :' , "Une fois le code trouvée, va sur https://forms.gle/mkCTRMFCpVtsqPe68" )
        .addField('récompense  :' , "Si tu arrive a me fournir le code **en premier** , tu gagneras le role priority sur le serveur de conrad et tu poura choisir le theme du prochaine event ! " )

//evnradio
bot.on('message', function (message) {
  if (message.content == '&evnradio') {
 message.channel.send(eventradio);
  message.channel.send('https://conibot-corp.github.io/jell0web/img/evn/Evnconv.png');
}
});
const eventradio = new Discord.MessageEmbed()
    .setColor('#FFFF00éé')
    .setTitle('Message radio :')
//-----fun-----





//blague

// your messages should go into this array

bot.on('message', function (message) {
  if (message.content == '&blague') {
 message.channel.send(blague);
}
});

const blague = new Discord.MessageEmbed()
    .setColor('#FFFF00')
    .setTitle('blague')
    .setURL('https://conibot-corp.github.io/conibotweb/home.html')
    .setAuthor('jell0')
    .setDescription('Jai racontée une blague sur les magasins  ||Perso elle a pas supermarchée|| ')
    .setThumbnail('https://cdn.pixabay.com/photo/2013/07/13/11/31/shop-158317_960_720.png')

//livraison
bot.on('message', function (message) {
      if (message.content == '&livraison') {
     message.channel.send(livraisonhome);
    }
    });
  const livraisonhome = new Discord.MessageEmbed()
        .setColor('#FFFF00')
        .setTitle('bienvenue sur __conizone__ !')
        .setURL('https://conibot-corp.github.io/conibotweb/home.html')
        .setAuthor('jell0')
        .setDescription('que voulez vous ?')
        .setThumbnail('https://conibot-corp.github.io/conibotweb/database/conibotexpress.png')
        .addField('pas encore disponible' , "-" )


//baffe
        bot.on('message', function (message) {
              if (message.content == '&baffe') {
             message.channel.send("ouie ! https://thumbs.gfycat.com/EssentialSillyBobcat-max-1mb.gif");
           }
           });

//faits
bot.on('message', function (message) {
      if (message.content == '&faits') {
     message.channel.send(faits);
   }
   });


       const faits = new Discord.MessageEmbed()
           .setColor('#FFFF00')
           .setTitle('faits')
           .setURL('https://conibot-corp.github.io/conibotweb/home.html')
           .setAuthor('jell0')
           .setDescription('voici des faits')
           .setThumbnail('https://cdn.discordapp.com/app-icons/801337213257908224/394b72c97d72e41be24fa71a9fd17bd1.png?size=128')
           .addField('1' , "Savait tu que les creepers sont nées a cause d'un bug ?" )
