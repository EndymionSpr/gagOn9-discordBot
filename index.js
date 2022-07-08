require('dotenv').config()
const {Client, Intents} = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready', () =>{
    console.log(`logged in as ${client.user.tag}!`)
})

client.on('messageCreate',  (message) => {

    const Message = message.content;

    if(Message.includes('_460svav1.')){
        const correctMessage = Message.replace("_460svav1.mp4","_460sv.mp4");
        message.reply({
            content: correctMessage,
        })
    } 
    }
)

client.login(process.env.DISCORD_TOKEN)