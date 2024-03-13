const { SlashCommandBuilder, EmbedBuilder, Client, Interaction } = require('discord.js');
const User = require('../../events/User/user');

const cashAmount = 50000;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('daily')
    .setDescription('Nhận thưởng hằng ngày'),
    async execute(interaction) {
        if (!interaction.inGuild()){
            interaction.reply({
                content: 'Bạn cần chạy lệnh này duy nhất ở trong máy chủ!',
                ephemeral: true,
            });
            return;
        }

        try {
            await interaction.deferReply();

            let user = await User.findOne({ userId: interaction.member.id });

            if (user) {
                const lastDailyDate = user.lastDaily?.toDateString();
                const currentDate = new Date().toDateString();

                console.log(lastDailyDate + '      ' + currentDate);

                if (lastDailyDate === currentDate){
                    interaction.editReply("Bạn đã nhận thưởng trong ngày hôm nay. Ngày mai hãy quay lại nhé!");
                    return;
                }
            } else{
                user = new User({
                    userId: interaction.member.id,
                    guildId: interaction.guild.id,
                    lastDaily: new Date()
                });
                user.cash += cashAmount;
                await user.save();
                interaction.editReply(`${cashAmount}đ đã được thêm vào tài khoản của bạn!`);
            }
        } catch (error) {
            console.log(`Error at daily command:\n${error}`);
        }
    }
}