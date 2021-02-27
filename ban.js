const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'ban',
    description: 'The main help command, will branch off into other specific sections',
    execute(message, args){

        const mentionedMember = message.mentions.members.first();
        const banReason = args.join(" ").slice(22);
       
            if (mentionedMember.id === message.author.id) {return message.channel.send("Why would you want to ban yourself ?")}
            if (!message.member.hasPermission("BAN_MEMBERS")){ return message.channel.send("You don\'t have permission do this command.")}
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) {return message.channel.send("I don\'t have permission to Ban members.") }
            if (args < 1) {return message.channel.send("you need to specify someone to ban")}
            if (!mentionedMember) {return message.channel.send("I can\'t find that member, please mention who you want to ban")}
            if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id){
                return message.channel.send("You can\'t ban this member due to your role being lower than theirs or they are the guild owner.")}
            
            if (!mentionedMember.bannable) {
                message.channel.send('This user can not be banned. This is due to them being the guild owner or their highest role is higher than mine. Please correct this issue and then reinitilize the command.')
            }
      else{
try{
                const banEmbed = new Discord.MessageEmbed()
                .setAuthor("NEW MODERATION EVENT")
                .setThumbnail(mentionedMember.user.displayAvatarURL())
                .setColor('#03254c')
                .setDescription(`
            **Moderator:** ${message.author.username} - (${message.author.id})
            **Member:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
            **Action:** Ban
            **Reason**: ${banReason || "undefined"}
            `)
            message.channel.send(banEmbed)
            
            mentionedMember.send(`You have been banned from the server. **Reason:** ${banReason || "breaking server rules"}. To contest this please contact 3dsam#3179 or Cam-I-Am#3562`) 
            
           mentionedMember.ban();

            
           }
        catch(err){console.log(err)}
        }}
        

   
 
        
    };
