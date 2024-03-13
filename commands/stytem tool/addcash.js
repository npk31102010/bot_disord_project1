const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const User = require('../../events/User/user');

const cashAmount = 50000;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addcash')
        .setDescription('test add cash')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const user = await User.findOne({ userId: interaction.member.id });
        user.cash += cashAmount;
        await user.save().then(interaction.reply('Thanh cong them ' + cashAmount + ' vao tai khoan !')).catch(console.error);
    }
}