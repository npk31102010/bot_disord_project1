const { Client, IntentsBitField, Collection, GatewayIntentBits, Events, Partials} = require('discord.js');
const { Guild, MessageContent, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const config = require('./config.json');
const { guildId, clientId, token } = config;
const { loadCommands } = require('./handle/commandHandle');
const { LoadEvents } = require('./handle/eventHandle');


const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
	partials: [
		User, Message, GuildMember, ThreadMember
	]
});


client.commands = new Collection();

client.login(config.token).then(function(){
	LoadEvents(client);
	loadCommands(client);
});
