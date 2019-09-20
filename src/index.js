import Discord from "discord.js"
import dotenv from "dotenv"

const client = new Discord.Client()
dotenv.config()

client.on('ready', () => {
  console.log(`${client.user.tag}`);
})

client.on('message', msg => {
  console.log(msg)
})

client.on('error', console.error)
client.login(process.env.BOT_TOKEN)
