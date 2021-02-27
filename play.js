const ytdl = require('ytdl-core')
const ytSearch = require('yt-search')


module.exports = {
    name: 'play',
    description: 'Plays a song from youtube',
    async execute(message, args){

        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('you need to be in a voice channel to use this command.')
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) {return message.channel.send('You dont have the correct permissions')}
        if(!permissions.has('SPEAK')) {return message.channel.send('You dont have the correct permissions')}
        if(!args.length) return message.channel.send('you need to send the second argument')


        const connection = await voiceChannel.join();


        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

        
            
            return  (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }
            
            const video = await videoFinder(args.join(' '));

            if(video){
                const stream = ytdl(video.url, {filter: 'audioonly'})
                connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () =>{
                    voiceChannel.leave();
                });

                await message.reply(`Now Playing ***${video.title}***`)
            }

            else{
                message.channel.send('no video results found');
            }


         
    }
}
