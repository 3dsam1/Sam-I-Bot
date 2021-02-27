const Discord = require('discord.js')
module.exports = {
    name: 'invite',
    description: 'Sends an embed with an invite link',
    execute(message, args){
        const invite = 'https://discord.com/oauth2/authorize?client_id=573922643527335938&scope=bot&permissions=875785342'
        const inviteEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setAuthor('Invite Links')
        .setDescription(`Click here to invite the bot! \n [Click Me!](${invite} 'invite link')`)
        message.channel.send(inviteEmbed)
    }

}
