const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Bot'un gecikmesini gösterir.");
module.exports.execute = async (client, interaction, config) => {

    const embed = new Discord.EmbedBuilder()
        .setColor("Aqua")
        .setDescription(`${Math.floor(client.ws.ping)}'ms`)

    return interaction.reply({ embeds: [embed], ephemeral: true });


};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
};
