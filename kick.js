
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';
module.exports = {
    name: 'kick',
    description: 'Kicks a user',
    execute(message, args){

        const mentionedMember = message.mentions.members.first();
        const kickReason = args.join(" ").slice(22);

             if (mentionedMember.id === message.author.id) {return message.channel.send("Why would you want to kick yourself ?")}
            if (!message.member.hasPermission("KICK_MEMBERS")){ return message.channel.send("You don\'t have permission do this command.")}
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) {return message.channel.send("I don\'t have permission to kick members.") }
            if (args < 1) {return message.channel.send("you need to specify someone to kick")}
            if (!mentionedMember) {return message.channel.send("I can\'t find that member, please mention who you want to kick")}
            if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id){
                return message.channel.send("You can\'t kick this member due to your role being lower than theirs or they are the guild owner.")}
            
            if (!mentionedMember.kickable) {
                message.channel.send('This user can not be kicked. This is due to them being the guild owner or their highest role is higher than mine. Please correct this issue and then reinitilize the command.')
            }
        else if (mentionedMember.kickable) {
                const kickEmbed = new Discord.MessageEmbed()
                .setAuthor(`NEW MODERATOR ACTION`)
                .setThumbnail(mentionedMember.user.displayAvatarURL())
                .setColor('#FF0000')
                .setDescription(`
            **Member:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
            **Action:** Kick
            **Reason**: ${kickReason || "undefined"}
            **Moderator**: ${message.author.username} - (${message.author.id})
            `)
                
            message.channel.send(kickEmbed)
               


        
           mentionedMember.send(`You have been kicked from the server. **Reason:** ${kickReason || "breaking server rules"}. If you wish to join back you may do so by clicking this link (https://discord.gg/cKutjsTdWK). Please ensure you read all the rules before you do anything.`) 
           mentionedMember.kick();
           }
        }
        
    };
