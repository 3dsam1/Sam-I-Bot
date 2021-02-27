module.exports = {
    name: 'funCommands',
    description: 'Fun commands',
    execute(message, args){
const user = message.author.username
//const wordAssociation = guild.channels.fetch(`763748948568703046`);
;
        if(message.content. toLowerCase().includes('ree')){ message.channel.send('ree')}

        else if(message.content. toLowerCase().includes('hamburgers') || message.content. toLowerCase().includes('hamburger')){
             message.channel.send('My hamburger. I eat all hamburgers')}

        else if(message.content. toLowerCase().includes('tachanka')){
             message.channel.send('Tachanka OP')}
      
        else if(message.content. toLowerCase().includes('what kind of bot is this')){
                message.channel.send('The best kind of bot :)')
        }     
        else if(message.content. toLowerCase().includes('good bot')){
            message.channel.send(':D')}
            
        else if(message.content. toLowerCase().includes('bad bot')){
                message.channel.send(':\'(')}
      
        else if(message.content. toLowerCase().includes('cheeseburger')){
                    message.channel.send('HIS LOVELY CHEESEBURGER HE\'LL WAIT FOR YOU-OU, OH HE WILL WAIT FOR YOU')}
        else if(message.content. toLowerCase().startsWith(`no u`)){
            (message.delete({timeout:500}))
            message.channel.send(`https://tenor.com/view/meliodas-escanor-full-counter-nanatsu-no-taizai-seven-deadly-sins-gif-16719048`)
        }
     
        else if(message.content. toLowerCase().includes('lmao')){
            message.channel.send(`${message.author.username} is laughing their arms off`)
        }
        else if(message.content. toLowerCase().startsWith('joel')){
            if(message.content. toLowerCase().endsWith('joel')){
            message.channel.send(`smells`)
        }}
        else if(message.content. toLowerCase().startsWith('depression')){
            if(message.content. toLowerCase().endsWith('joel')){
            message.channel.send('is some random guy in the server')
        }}
        else if(message.content. toLowerCase().startsWith(`what is the website`)){
            message.channel.send(`https://www.edgegamers.com`)
        }
        else if(message.content. toLowerCase().includes('yeet')){
            message.channel.send(`https://tenor.com/view/meliodas-combat-punched-uppercut-anime-gif-12091598`)
        }


  }}



