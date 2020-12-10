module.exports =  {
    commands: ['code', 'forest'],
    minArgs: 3,
    maxArgs: 3,
    expectedArgs: '<code> <duration> <starttime>',
    cooldown: 60 * 10,  

    callback: async (message, arguments, text) => {

        const Discord = require('discord.js');

        const forestcodes  = message.client.channels.cache.get('786684178900058113');
        const ms = require('ms');
        var moment = require('moment');
        var schedule = require('node-schedule');
     
const { randomForest } = require('../../random-forest.json');
let thumb = randomForest[Math.floor(Math.random() * randomForest.length)]

const GuildID = "786598193424105472"

const mention = message.author
 const UserID = mention.id

 let time = (`${arguments[1]}m`);
 let addtime = ms(`${time}`) ;
 let adone = ms(`10m`); 
  

 let startTime = new Date(Date.now());
 let endTime = new Date(startTime.getTime() + addtime + adone);
 let structuretime = moment(endTime).format('DD/MM/YYYY-HH:mm')
 let uptime = (arguments[1] / 60)



  
      //create an embed with the arguments provided
     let TreeEmbed = new Discord.MessageEmbed()
          .setColor('#33adc0')
          .setTitle(`${message.author.username} wants to plant a tree! `)
          .setThumbnail(`${thumb}`)
          .setTimestamp()
          .setFooter(`Planter: ${message.author.username} `)
          .addFields(
              { name: `If you wish to join them in the forest app click on the link below or copy the code and paste it in your Forest app. ` ,  value: '\u200B' },
              { name: '\u200B', value: 'Forest info:' },
              { name: `Use code: ${arguments[0]} or click this link: https://www.forestapp.cc/join-room?token=${arguments[0]}.`, value: '\u200B' },
              { name: ':stopwatch: Duration:', value: `${arguments[1]} min`, inline: true },
              { name: ':closed_lock_with_key: Starting in:', value: `${arguments[2]} min`, inline: true },       
                    )
           
              await forestcodes.send(TreeEmbed); 
          
          } 
        }
