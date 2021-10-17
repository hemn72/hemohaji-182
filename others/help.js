
const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {
    let commands = message.client.commands.array();
    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://media.discordapp.net/attachments/848454202514079764/854642997894971392/image0.gif `)
    .setTitle(`AenGo Is One`)
    .setDescription(`
*** |General |***
help, ping, prefix, avatar
***  |   Music ***
filter, loop, lyrics, np, play,
queue, remove, shuffle, skip,
skipto, stop, volume
***Info***
botinfo, serverinfo, userinfo,
status, uptime
ds |

**Links**
[SUPPORT](https://discord.gg/BCHan3ZxZr)       [INVITE](https://discord.com/api/oauth2/authorize?client_id=784303756925468713&permissions=8&scope=bot) [  website  ](https://calms-web-site.glitch.me/)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#ff0000")
   message.react("<:2_:863362568801222656>")
    return message.channel.send(helpEmbed).catch(console.error);
  }
};
