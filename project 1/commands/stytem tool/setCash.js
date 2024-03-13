const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const User = require('../../events/User/user');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('set-cash')
    .setDescription('Đặt số tiền')
    .addNumberOption(options => options
        .setName('vnd')
        .setDescription('Set Cash')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction){
        const targetNumber = interaction.options.getNumber('vnd');
        const user = await User.findOne({ userId: interaction.member.id });
        user.cash = targetNumber;
        user.save().then(interaction.reply('Thanh cong set ' + targetNumber)).catch(console.error)
    }
}