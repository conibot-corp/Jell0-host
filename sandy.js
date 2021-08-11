const Discord = require('discord.js');


var bot = new Discord.Client()
  bot.login("ODY5MTU1NjUyODA5OTQwOTky.YP6GRw.Sre9OraLuZDUzmtS2HeKLbus5QY");


bot.on('message', function (message) {
  if (message.content == 'banane') {
 message.channel.send('Bedli, cest toi ? ');
}
});

bot.on('message', function (message) {
  if (message.content == 'oui') {
 message.channel.send('ok, pour massurer que tu est bien Bedli, je vais te poser quelques questions... cest parti ! ');
 message.channel.send('Quel est la capitale du Vatican ? répond juste avec le nom (ci la réponse est le vatican, dit juste `Vatican)');
 }
});

bot.on('message', function (message) {
  if (message.content == 'Vatican') {
 message.channel.send('Bravo ! prochaine question... Le Wi-Fi est un acronyme ? ( répond vrais ou faux )');
}
});

bot.on('message', function (message) {
  if (message.content == 'Faux') {
 message.channel.send('Bravo ! La prochaine question est simple... si A+E=F , alors G+H est égale a...  ');
}
});

bot.on('message', function (message) {
  if (message.content == 'Vrais') {
 message.channel.send('sérieux ! tu est NUUL ! si tu veut rententer, dit banane.');
}
});

bot.on('message', function (message) {
  if (message.content == 'O') {
 message.channel.send('Bravo ! bon le code de la bombe est, ||1234||');
}
});
