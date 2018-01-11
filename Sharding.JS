const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./Index.JS');
Manager.spawn(2);
