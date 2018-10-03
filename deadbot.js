const { Client, RichEmbed } = require('discord.js');
const bot   = new Client();
const token = '<TOKEN'>

const NEXT_ASSIGNMENT_TITLE = 'Lab 3 (Bash)';
const NEXT_ASSIGNMENT_DATE  = 'Due October 12th @ 11:59pm';
const NEXT_EXAM_TITLE       = 'MIDTERM';
const NEXT_EXAM_DATE        = 'October 17th';
const OFFICE_HOURS          = 'TR, 1:00pm-2:00pm';

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}.`);
});

bot.on('message', message => {
  try {
    if (message.author.bot) return; // no self-discussion

    if (message.content.indexOf('!') === 0) {
      var text = message.content.substring(1);
      text     = text.toLowerCase();
    
      if ((text == 'homework') || (text == 'hw')) {
        const embed = new RichEmbed()
          .setTitle(NEXT_ASSIGNMENT_TITLE)
          .setColor(0xFF0000)
          .setDescription(NEXT_ASSIGNMENT_DATE);
        message.channel.send(embed);
      } 

      else if (text == 'exam') {
        const embed = new RichEmbed()
          .setTitle(NEXT_EXAM_TITLE)
          .setColor(0xFF0000)
          .setDescription(NEXT_EXAM_DATE);
        message.channel.send(embed);
      } 

      else if ((text == 'h') || (text == 'help')) {
        message.reply('Possible commands are !hw, !homework, !exam, !hours, !office hours.');
      }

      else if ((text == 'office') || (text == 'office hours') || (text == 'hours')) {
        const embed = new RichEmbed()
          .setTitle('Office hours - EC530')
          .setColor(0x00FF00)
          .setDescription(OFFICE_HOURS);
        message.channel.send(embed);
      }

      else if (text == 'givemeana+') {
        message.reply('Sure, just ace the exams, homeworks, and project and no problem');
      } 
    }
  } catch (ex) {
    console.log(ex)
  }
});

bot.login(token);
