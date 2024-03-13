const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../../events/User/user');
const user = require('../../events/User/user');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('tx-x')
    .setDescription('Đặt cược xỉu')
    .addNumberOption(options => 
            options
            .setName('vnd')
            .setDescription('Đặt cược tài')
            .setRequired(true)
        ),
    async execute(interaction){
        const cashOptions = interaction.options.getNumber("vnd");
        const userProfile = await User.findOne({userId : interaction.member.id});

        if(userProfile.cash >= cashOptions){
            let dice1, dice2, dice3, total;
            
            for (i = 0; i <= 5; i++){
                dice1 = Math.floor(Math.random() * (6-1) + [i]);
                dice2 = Math.floor(Math.random() * (6-1) + [i]);
                dice3 = Math.floor(Math.random() * (6-1) + 1);
                total = dice1 + dice2 + dice3;
            }

            let win;
            let check;

            if(total >= 4 && total <= 10){
                win = 'Xỉu'
            }
            if(total >=11 && total <=17){
                win = 'Tài'
            }
            if(win === 'Tài'){
                check = 'Bạn đã bị mất tiền!';
                userProfile.cash -= cashOptions;
                userProfile.save();
            }
            if(win == 'Xỉu'){
                check = 'Chúc mừng, bạn đã thắng đặt cược!';
                userProfile.cash += cashOptions;
                userProfile.save();
            }


            const embed = new EmbedBuilder()
            .setColor('Random')
            .setTitle('Tài Xỉu')
            .addFields([
                {
                    name: 'Bạn đã cược :',
                    value: '**Xỉu**',
                    inline: false
                },
                {
                    name: 'Số tiền bạn đã cược',
                    value: `**${cashOptions}**`,
                    inline: false
                },
                {
                    name: 'Kết quả: ',
                    value: `
                        Xúc Sắc 1: **${dice1}**
                        Xúc Sắc 2: **${dice2}**
                        Xúc Sắc 3: **${dice3}**
                        = **${total}**

                        => **${win}** Thắng trong đặt cược!
                    `,
                    inline: false
                },
                {
                    name: 'Tình trạng: ',
                    value: `${check}`,
                    inline: false
                }
            ]);

            interaction.reply({ embeds: [embed] });
        }
        else{
            interaction.reply('Bạn không đủ tiền để đặt cược tài xỉu!')
        }

    }
}