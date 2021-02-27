const Discord = require('discord.js')
module.exports = {
    name: 'poll',
    description: 'Makes a quick poll',
    execute(message, args){
           args.join(" ").slice(32);

            if(args < 1){
                message.channel.send('You need to specify a question for your poll!')
        }
            else{
             
                const pollEmbed = new Discord.MessageEmbed()
                    .setAuthor(args.join(" "))
                    .setColor('ORANGE')
                    .setDescription(`
                    ✅ Yes
                    ❌ No`)
                    .setTimestamp()
                    .setFooter(`${message.author.username}`);
             
             message.channel.send(pollEmbed).then(sentEmbed => {
                sentEmbed.react('✅')
                sentEmbed.react('❌')
                message.delete({timeout:5000})
                return
            }
           
        
            ) 
        }
    }
}
