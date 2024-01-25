require('dotenv').config()
const { Client, Intents } = require('discord.js')
var http = require('http')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`)
})

client.on('messageCreate', (message) => {

    const Message = message.content;

    if (Message.includes('_460svav1.')) {
        const correctMessage = Message.replace("_460svav1.mp4", "_460sv.mp4");
        message.reply({
            content: correctMessage,
        })
    } else if (Message.includes('\/twitter.com\/') && Message.includes('\/status\/')) {
        const correctMessage = Message.replace("twitter.com", "fxtwitter.com");
        message.reply({
            content: correctMessage,
        })
    } else if (Message=="server.info") {

        http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                const correctMessage = ip.toString() + "\n" + "Server name: potatoField \nServer password: Qweqweqwe";
                message.reply({
                    content: correctMessage,
                });
            });
          });
        
    }
    
})

client.login(process.env.DISCORD_TOKEN)
