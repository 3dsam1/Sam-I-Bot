module.exports = {
    name: 'speaker',
    description: 'Gives someone a nickname that says !!SPEAKER!!',
    execute(message, args){

        const user = message.mentions.members.first();
        const shownName = user.displayName;
        const speaker = /!SPEAKING!/;

        if (!message.member.hasPermission("MANAGE_NICKNAMES")){ return message.channel.send("You don\'t have permission do this command.")}
        else if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) {return message.channel.send("I don\'t have permission to change nicknames.") }
        else if (args < 1) {return message.channel.send("you need to specify someone that will be speaking")}
        else if (!user) {return message.channel.send("I can\'t find that member, please mention who you want to kick")}
        else if (user.roles.highest.position >= message.guild.me.roles.highest.position){
            message.channel.send(`I can\'t change their nickname due to my role being to low. Please ensure my highest role is above ${user}\'s highest, and that they are not the guild owner.`)
        }
   else if (shownName.startsWith('!SPEAKING!')){
        user.setNickname(shownName.replace(speaker, ''))
        message.channel.send(`${user} is no longer speaking`)
        message.delete({timeout:5000})
      }
      else if (!shownName.startsWith('!SPEAKING!')){
        user.setNickname(`!SPEAKING! ${shownName}`)
        message.channel.send(`${user} is now speaking`)
        message.delete({timeout:5000})
    }
    }
      
     


    

}
