const { Events } = require('discord.js');
const welcomemessage = require('../../config');
require('dotenv').config();

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        const embed = welcomemessage(member.user.username, member.user.id, member.guild.name)
        member.guild.channels.cache.get(process.env.WELCOME_MESSAGE).send({embeds: [embed]})
    }
}