const { EmbedBuilder } = require('discord.js');

function welcomemessage(username, userid, servername) {
    const embed = new EmbedBuilder()
        .setTitle(`Welcome to ${servername}!`)
        .setDescription(`${username} has joined the server!`)
        .setThumbnail(`https://media1.thehungryjpeg.com/thumbs/800_3649254_17r4lokyf90c2hsa75g0fsv88y301xcsa3mpq0w2.jpg`)
        .setColor(0x00AE86)

    return embed;
}

module.exports = welcomemessage;