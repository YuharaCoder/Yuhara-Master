const client = new Discord.Client();

const prefix = "Y!";

client.on('ready', () => {
  client.user.setStatus('online');
    client.user.setGame(`Y!Help | Servers: ${client.guilds.size} | Version: 1.0.7`, 'https://www.twitch.tv/whatisreach');
  console.log('I Am Ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  

      
  if (message.content.startsWith(prefix + "Stats")) {
    message.channel.send("**Bot Statistics**```Bot Version: 1.0.7 \n\nNode: 9.3.0 \n\nLibrary: Discord.JS\```");
  } 
  
  if (message.content.startsWith(prefix + "Help")) {
    message.channel.sendMessage("```Stats - Gives Some Useful Bot Statistics \n\nPing - Measures The Latency Between The Bot And Discord \n\n8Ball - The Bot Will Gives You A Random Responce To Your Message```");
  }
  
  if(message.content.startsWith(prefix + 'Ping')) {
 message.channel.send('Ping...').then(m => m.edit(`Pong! Latency Is ${m.createdTimestamp - message.createdTimestamp}MS - API Latency Is ${Math.round(client.ping)}MS`) );
}
  
  const responses = [
   'Yes', 'No', 'Maybe', 'Okay', 'Sure', 'Never', 'Nah', 'Not At All', 'Fuck You', 'Shut Up', 'Why Do You Need To Know?', 'Fuck Off', 'No You Will Not', 'I Will Not Say', 'I Will Not, You Pleb'
]
if(message.content.startsWith(prefix + '8Ball')) {
  console.log('I Like Sending Fortunes');
   message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
}
  
if(message.content.startsWith(prefix + 'Say ')) {
  console.log('Somebody Used The Announce Command');
  message.delete();
		return message.channel.send(message.content.substring('Y!Say '.length));
	}

  if(message.content.startsWith(prefix + 'Y!')) {
   message.channel.send("Invalid Command\n\n`Node Fix: `Use A Command`");
}
  
  
  
  

 
  });
  
  client.login('YourTokenHere');
