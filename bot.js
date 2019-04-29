const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Aktifim vede Sunucunda Onlineyim!');
});

client.on('message', message => {
    if (message.content === '!yardım') {
    	message.reply('Sana belediye baksın mal.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
