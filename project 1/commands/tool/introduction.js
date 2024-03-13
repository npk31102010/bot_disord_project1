const { SlashCommandBuilder, EmbedBuilder, Guild } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('introduction')
    .setDescription('Giới thiệu'),
    async execute(interaction, client){
        const { guild } = interaction;
        const embed = new EmbedBuilder()
            .setTitle('Giới Thiệu')
            .setColor('Grey')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields([
                {
                    name: 'Người Tạo :',
                    value: 'TONPK',
                    inline: false,
                },
                {
                    name: 'Mục Đích :',
                    value: 'Giải Trí',
                    inline: false,
                },
                {
                    name: 'ClientId :',
                    value: client.user.id,
                    inline: false
                },
                {
                    name: 'Lệnh :',
                    value: 'Đang Cập Nhật',
                    inline: false,
                },
                {
                    name: `Máy chủ ${guild.name} :`,
                    value: `${guild.memberCount} thành viên`,
                    inline: false
                },
            ])
            .setFooter({text: 'Copyright: ©TONPK', iconURL: 'https://i.imgur.com/2HgI6VU.jpg'});
            await interaction.reply({
                embeds: [embed],
            });
    },
};