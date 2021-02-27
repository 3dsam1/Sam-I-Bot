module.exports = {
    name: 'feed',
    description: 'Hungry Hungry bot',
    execute(message, args){
        const food = args.join(" ").slice(0);
        if(args < 1){return message.channel.send('You can\'t feed me air...')}
        if(message.content. toLowerCase().includes(`sam`) || message.content. toLowerCase().includes(`cam`)) { message.channel.send("why would I eat my creator? I\'ll eat Joel instead! *Munch*"); return}
        if(message.content. toLowerCase().includes(`me`)) {message.channel.send(`*Munch* Yum! that ${message.member.displayName} was good`); return} 
        if(message.content. toLowerCase().includes(`covid`)) {return message.channel.send(`*Munch* Yum! that ${food} was good. *Cough Cough*`)}
        message.channel.send(`*Munch*, yum, that ${food} was good.`)

    
    }
}
