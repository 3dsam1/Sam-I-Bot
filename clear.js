module.exports = {
    name: 'clear',
    description: 'bulk clears messages',
    execute(message, args){
        const prefix = 's!';
        var num = args[0];
        num++;
        var newNum = num;

        
    
         if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You don\'t have permission to clear messages')
         if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have permission to clear messags')
        
         message.channel.bulkDelete(newNum) 
            message.channel.send(`Cleared ${args[0]} messages.`).then(message =>
            message.delete({timeout:5000}))
             
        


        }

    

}
