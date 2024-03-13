const mongoose = require('mongoose');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../../events/User/user');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('testbank')
    .setDescription("Xem Tài Khoản Ngân Hàng"),
    async execute(interaction, client){
        if (!interaction.inGuild()){
            interaction.reply({
                content: 'Bạn cần chạy lệnh này duy nhất ở trong máy chủ!',
                ephemeral: true,
            });
            return;
        };

        const targetUserId = interaction.options.get('user')?.value || interaction.member.id;
        
        await interaction.deferReply();

        const user = await User.findOne({ userId: targetUserId, guildId: interaction.guild.id });

        if (!user){
            interaction.editReply(`<@${targetUserId}> chưa có một tài khoản ngân hàng.`);
            return;
        }

        interaction.editReply(
            targetUserId === interaction.member.id 
            ? `Số tiền của bạn là **${user.cash}**`
            : `<@${targetUserId}> có số tiền là **${user.cash}**`
        );

    }
}