
const Discord = require('discord.js');
const ytdl = require('ytdl-core')
const ytSearch = require('yt-search')
const fs = require('fs');

const client = new Discord.Client();
var prefix = 's!'


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'));

let statusType = 'PLAYING'
let statusName = 'Games'
let statusVisibility = 'online'




for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
        
console.log(command)
}

var anime = `anime`; 

const inviteLink = 'https://discord.com/oauth2/authorize?client_id=573922643527335938&scope=bot&permissions=875785342' // replace with proper invite link for main server

//bot bootup

client.once('ready', () => {
    console.log('The bot is online')

client.user.setPresence({ activity: { name: statusName, type: statusType }, status: statusVisibility })
.then(console.log)
  .catch(console.error);

// prefix commands


client.on('message', async message => {
if(!message.content.startsWith(prefix) || message.author.bot ) return;

const args = message.content.slice(prefix.length).split(/ +/); // Going to remove the prefix from the arguments, and then split each arg into a sperate one when typing a string. 
const command = args.shift(). toLowerCase(); // going to shift all commands to lower case to allow people to type ?ping or ?PING and get the same result.



 if(command === 'ping'){
        message.channel.send(new Discord.MessageEmbed().setTitle("Pinging...")
        .setDescription("Please wait.")).then(pingMessage => {
            var ping = pingMessage.createdTimestamp - message.createdTimestamp;
    
            pingMessage.edit(new Discord.MessageEmbed().setTitle("Latency :ping_pong:")
                .setDescription(`Bot: ${ping} ms\nAPI: ${client.ws.ping} ms`))
        });
        
    
    }   
 else if(command === 'kick'){
     client.commands.get('kick').execute(message, args)
}
else if(command === 'ban'){
    client.commands.get('ban').execute(message,args)
}
else if(command === 'qp'){
    client.commands.get('poll').execute(message,args)
}
else if(command === 'avatar'){
    client.commands.get('avatar').execute(message,args,prefix)
}

else if(command === 'speaker' || command === 'speaking'){
    client.commands.get('speaker').execute(message,args)
}
else if(command === 'clear'){
    client.commands.get('clear').execute(message,args)
}
else if(command === 'feed'){
    client.commands.get('feed').execute(message,args)
}


//Status Commands

if(message.author.id === `REPLACE WITH BOT OWNERS ID`){ //Prevents anyone from using these commands
 if(command === 'setstatusvisibility' || command === 'setstatusvis'){
 
     statusVisibility = args.join(" ").slice(0).toLowerCase();
    
        if(statusVisibility === 'online'){
            client.user.setPresence({ activity: { name: statusName, type: statusType }, status: statusVisibility })
            message.channel.send(`The status type has been set to ${statusVisibility}`)
        }
    
        else if(statusVisibility === 'idle'){
            client.user.setPresence({ activity: { name: statusName, type: statusType }, status: statusVisibility })
            message.channel.send(`The status type has been set to ${statusVisibility}`)
        }

        
        else if(statusVisibility === 'dnd'){
            client.user.setPresence({ activity: { name: statusName, type: statusType }, status: statusVisibility })
            message.channel.send(`The status type has been set to ${statusVisibility}`)
        }

        else if(statusVisibility === 'offline'){
            client.user.setPresence({ activity: { name: statusName, type: statusType }, status: statusVisibility })
            message.channel.send(`The status type has been set to ${statusVisibility}`)
        }
        else{
            message.channel.send("That is not a valid status visiblity. Please choose online, idle, offline, or dnd. Please ensure you do not include capital letters.")
        }
       
}

else if(command === 'setstatustype'){
     statusType = args.join(" ").slice(0).toUpperCase();
    
        if(statusType === 'WATCHING'){
            client.user.setPresence({ activity: { name: statusName, type: statusType }, status: statusVisibility })
            message.channel.send(`The status type has been set to ${statusType}`)
        }
    
        else if(statusType === 'PLAYING'){
            client.user.setPresence({ activity: { name: statusName, type: statusType }, status: statusVisibility })
            message.channel.send(`The status type has been set to ${statusType}`)
        }

        
        else if(statusType === 'LISTENING'){
            client.user.setPresence({ activity: { name: statusName, type: statusType }, status: statusVisibility })
            message.channel.send(`The status type has been set to ${statusType}`)
        }

        else{
            message.channel.send("That is not a valid status type. Please choose WATCHING, PLAYING, or LISTENING, and include it in capital letters.")
           
        }
       
}
else if(command === 'setstatusname'){
    statusName = args.join(" ").slice(0);
    
        
       client.user.setPresence({ activity: { name: statusName, type: statusType }, status: statusVisibility })
            message.channel.send(`The status name has been changed to ${statusName}`)

}
else if(command === 'invite'){
    client.commands.get('invite').execute(message,args)
}
if(message.author.id === `200221488035397632`){
 if(command === 'reactions'){

    const reactionEmbed = new Discord.MessageEmbed()
        .setTitle('Reaction Roles')
        .setDescription('React to gain the role!')
        .setColor('RED')

    let msgEmbed = await message.channel.send(reactionEmbed)
    msgEmbed.react('✔')
    msgEmbed.react('625018034808946699')
    msgEmbed.react('625020976899293206')
    msgEmbed.react('625018401395441704')
    msgEmbed.react('625018132746207233')
    msgEmbed.react('625019053571833866')
    msgEmbed.react('768242486245851136')
    .catch(err => {
        console.log(err)
    })
}
}
else if(command === 'play'){
client.commands.get('play').execute(message,args);
}
}})




// fun commands (w/o prefix)

client.on('message', async message => {
const args = message.content.slice(prefix.length).split(" ");
const command = args.shift(). toLowerCase();
const user = message.author;

if (message.author.bot) return;


if(!message.content.startsWith(prefix)){
    if(message.content. toLowerCase().includes(`${wordOfTheDay}`)){
       if (!client.channels.fetch() === '738244507711176714') return
        else{
            if(message.content.toLowerCase().startsWith(wordOfTheDay)){
               
    }
    
    message.channel.send(`${message.author.displayName} has used the wotd`)
    await message.guild.members.cache.get(user).roles.add("740789104345743451")
}
    }
   else {client.commands.get('funCommands').execute(message, args)}
};

});


// reaction roles

// When they react
client.on('messageReactionAdd', async (reaction, user) => {

    if(reaction.message.partial) await reaction.message.fetch();
    if(user.bot) return;
 
    
    if(reaction.message.channel.id === 'Replace with RR channel'){
  
        // copy paste this if for new reaction roles.
  /*      if(reaction.emoji.name === 'Emoji'){

            await reaction.message.guild.members.cache.get(user.id).roles.add("Role ID")
            
        }  */
 
}
})

//  When they unreact


client.on('messageReactionRemove', async (reaction, user) => {

    if(reaction.message.partial) await reaction.message.fetch();
    if(user.bot) return;
 

 
  if(reaction.message.channel.id === 'Replace with RR channel'){

    // copy paste this if for new reaction roles. 
      /*  if(reaction.emoji.name === '✔'){

            await reaction.message.guild.members.cache.get(user.id).roles.remove("763742023328989204")
            
        }*/
   
}
})



client.on('messageDelete', messageDelete => {
    
    const logChannel = client.channels.fetch(`766236272321757204`);
    let UserMessageDeleted = messageDelete.author.toString();
    const usersDeletedMessage = UserMessageDeleted.toString() 

    client.channels.fetch(`766236272321757204`).then(message => {message.send(`${UserMessageDeleted}'s message: ${messageDelete} was deleted.`)})


}
)

client.on('voiceStateUpdate', async (oldState, newState) => {
    const newUserChannel = oldState
    const oldUserChannel = newState
    const logChannel = client.channels.fetch(`766236272321757204`);


    if(newState.channelID === null) {
      if(newState.id !== '763860662564159499') {
          client.channels.fetch(`766236272321757204`).then(message => {message.send(`${newState.member} has left a voice channel`)})
        }
        }

  if(oldState.channelID === null){
    const voiceChannel = client.channels.cache.find(channel => channel.id === newState.channelID)
   

    // const userSBSettings = seek: x, volume: y }
    const camSBSettings = { seek: 4, volume: 1 }
    const joelSBSettings = { seek: 16, volume: 0.8 }
    const defaultSBSettings = { seek: 0, volume: 1}
    


    //const userSB = ytdl('User Video', { filter : 'audioonly'});
    const joelSB = ytdl('https://www.youtube.com/watch?v=012YIyFI2AI', { filter : 'audioonly'});
    const camSB = ytdl('https://www.youtube.com/watch?v=c90JoVMqz5o', { filter : 'audioonly'});
    const caidenSB = ytdl('https://www.youtube.com/watch?v=m6mptCsaWcY', { filter : 'audioonly'});


      if(oldState.id !== '763860662564159499'){
          console.log('User has joined a voice channel')}

      try{
          /* 
          if(newState.id === 'USERS ID'){

        console.log('USERNAME JOIN SOUND')
            connection.play(USERSB, defaultSBSettings)
            .on('finish', () =>{
                voiceChannel.leave();
            });
      }
      */
      if(newState.id === '322897300429209602'){
        const connection = await voiceChannel.join();

        console.log('CAM JOIN SOUND')
            connection.play(camSB, camSBSettings)
            .on('finish', () =>{
                voiceChannel.leave();
            });
      }
     
      else if(newState.id === '323069140212645888'){
        const connection = await voiceChannel.join();
        
        console.log('JOEL JOIN SOUND')
            connection.play(joelSB, joelSBSettings)
            .on('finish', () =>{
                voiceChannel.leave();
            });
      }
     else if(newState.id === '350690663416725506'){
        const connection = await voiceChannel.join();

        console.log('CAIDEN JOIN SOUND')
            connection.play(caidenSB, defaultSBSettings)
            .on('finish', () =>{
                voiceChannel.leave();
            });
      }
      
      
    }  catch(err){console.log(err)}
  }
  

})






})
client.login('TOKEN');    
