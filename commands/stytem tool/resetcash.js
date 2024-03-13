const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const User = require('../../events/User/user');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('resetcash')
    .setDescription('test add cash')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addUserOption(options => options
        .setName('user')
        .setDescription('Đặt số tiền bằng 0 của người khác')
        .setRequired(false)
    ),
    async execute(interaction) {
        const targetUserId = interaction.options.get('user')?.value || interaction.member.id;
        const user = await User.findOne({ userId: targetUserId });
        user.cash = 0;
        await user.save().then(interaction.reply(`Thành công đặt lại số tiền của ${targetUserId}`)).catch(console.error);
    }
}