const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'gets a users avatar',
    execute(message, args, prefix){
        const mentionedMember = message.mentions.members.first();
         // const name = mentionedMember.tag;
        //const avatarName = message.author.displayName();
       
        if(args.length === 0){

            const avatarEmbed1 = new Discord.MessageEmbed()
            .setAuthor(`Avatar`)
            .setColor('BLACK')
            .setImage(message.author.displayAvatarURL( {
                dynamic: true,
                size: 256,
                format: 'png'
            }))
            .setTimestamp() 
            .setFooter(message.author.tag);
            message.channel.send(avatarEmbed1)
            return;
        }
        else if(args.length >= 1){
            if(!mentionedMember){
         return   message.channel.send(`Sorry, that is not a valid argument. Please do not include anything after \`\`\`${prefix}avatar\`\`\` unless you are mentioning a user`) 
        }
            const avatarEmbed2 = new Discord.MessageEmbed()
            //.setAuthor(mentionedMember.user.tag)
            .setAuthor(`Avatar`)
            .setColor('BLACK')
            .setImage(mentionedMember.user.displayAvatarURL( {
                dynamic: true,
                size: 256,
                format: 'png'
            }))
            .setTimestamp()
            .setFooter(mentionedMember.user.tag);
            //.setFooter(message.author.username,message.author.displayAvatarURL());
            message.channel.send(avatarEmbed2)
       return;
        }

}
}
