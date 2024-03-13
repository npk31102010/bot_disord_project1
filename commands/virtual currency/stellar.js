const { SlashCommandBuilder, EmbedBuilder, SlashCommandNumberOption, ApplicationFlagsBitField } = require('discord.js');
const User = require('../../events/User/user');

const data = {
    code: 'xlm',
    name: 'stellar'
};


module.exports = {
    data: new SlashCommandBuilder()
    .setName('coin-' + data.code)
    .setDescription(`Đầu tư cổ phiếu của ${data.code}`)
    .addNumberOption(options => options
        .setName('vnd')
        .setDescription('Số tiền đàu tư vào cổ phiếu')
        .setRequired(true)
    ),
    async execute(interaction) {
        const user = await User.findOne({ userId: interaction.member.id });
        const cashOptions = interaction.options.getNumber('vnd');

        const rare = [0.7, 0.8, 0.9, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 0.7, 0.8, 1.1, 1.2, 1.3, 0.9, 0.9, 2, 1.5, 2, 0.7, 1.2, 1.5, 1.8, 5, 2, 3, 0.7, 0.9, 0.9, 1.5, 1.5, 1.5, 2.1, 10, 0.9, 1, 1, 0.8, 0.9, 0.9, 1, 1.2, 1.3, 1.6, 1.4, 1.8];
        const random = Math.floor(Math.random() * rare.length);

        if (user.cash >= cashOptions){

            user[data.code] *= rare[random];
            user.cash -= cashOptions;
            user[data.code] += cashOptions;
            user.save();

            let cash = `${user[data.code]}`;

            let Cash = '';
            let getDotsLength = 0;
    
            for (let i = 0; i < cash.length; i++){
                getDotsLength ++;
                switch (cash.length){
                    case 1:
                        Cash += cash[i];
                    break;
                    case 2:
                        Cash += cash[i];
                    break;
                    case 3:
                        Cash += cash[i];
                    break;

                    case 4: 
                        if (getDotsLength === 2){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 5:
                        if (getDotsLength === 3){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 6:
                        if (getDotsLength === 4){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;



                    case 7: 
                    if (getDotsLength === 2   || getDotsLength === 5) {
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 8:
                    if (getDotsLength === 3  || getDotsLength === 6) {
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 9:
                        if (getDotsLength === 4  || getDotsLength === 7) {
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;


                    case 10: 
                    if (getDotsLength === 2 || getDotsLength === 5 || getDotsLength === 8){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 11:
                    if (getDotsLength === 3 || getDotsLength === 6 || getDotsLength === 9){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 12:
                        if (getDotsLength === 4 || getDotsLength === 7 || getDotsLength === 10){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;



                    case 13: 
                    if (getDotsLength === 2 || getDotsLength === 5 || getDotsLength === 8 || getDotsLength === 11){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 14:
                    if (getDotsLength === 3 || getDotsLength === 6 || getDotsLength === 9 || getDotsLength === 12){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 15:
                        if (getDotsLength === 4 || getDotsLength === 7 || getDotsLength === 10 || getDotsLength === 13){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;



                    case 16: 
                    if (getDotsLength === 2 || getDotsLength === 5 || getDotsLength === 8 || getDotsLength === 11 || getDotsLength === 14){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 17:
                    if (getDotsLength === 3 || getDotsLength === 6 || getDotsLength === 9 || getDotsLength === 12 || getDotsLength === 15){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 18:
                        if (getDotsLength === 4 || getDotsLength === 7 || getDotsLength === 10 || getDotsLength === 13 || getDotsLength === 16){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;



                    case 19: 
                    if (getDotsLength === 2 || getDotsLength === 5 || getDotsLength === 8 || getDotsLength === 11 || getDotsLength === 14 || getDotsLength === 17){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 20:
                    if (getDotsLength === 3 || getDotsLength === 6 || getDotsLength === 9 || getDotsLength === 12 || getDotsLength === 15 || getDotsLength === 18){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                    case 21:
                        if (getDotsLength === 4 || getDotsLength === 7 || getDotsLength === 10 || getDotsLength === 13 || getDotsLength === 16 || getDotsLength === 19){
                            Cash += '.';
                        }
                        Cash += cash[i];
                    break;
                }
            }


            const embed = new EmbedBuilder()
            .setTitle('Thông tin Tiền Ảo')
            .setColor('Grey')
            .addFields([
                {
                    name: 'Tên Tiền Ảo',
                    value: `    **${data.name.toUpperCase()}**`,
                    inline: false
                },
                {
                    name: 'Mã Tiền Ảo',
                    value: `    **${data.code.toUpperCase()}**`,
                    inline: false
                },
                {
                    name: 'Giá trị',
                    value: `    **${Cash} ** vnd `,
                    inline: false
                },
                {
                    name: 'Số tiền Đầu Tư:',
                    value: `    **${cashOptions}**`,
                    inline: false
                },
                {
                    name: 'Bán Tiền Ảo',
                    value: `sell-cp`,
                    inline: false
                }
            ]);

            interaction.client.on('messageCreate', msg => {
                if (msg.content === 'sell-cp'){
                    user.cash += user[data.code];
                    user[data.code] -= user[data.code];
                    user.save();

                    const embed2 = new EmbedBuilder()
                    .setTitle('Thông tin Tiền Ảo')
                    .setColor('Random')
                    .addFields([
                        {
                            name: 'Tên Tiền Ảo',
                            value: `**${data.name.toUpperCase()}**`,
                            inline: false
                        },
                        {
                            name: 'Mã Tiền Ảo',
                            value: `**${data.code.toUpperCase()}**`,
                            inline: false
                        },
                        {
                            name: 'Số tiền bán Tiền Ảo',
                            value: `**${Cash} ** vnd`,
                            inline: false
                        }
                    ]);

                    msg.reply({ embeds: [embed2] });
                    
                }
            })

            interaction.reply({ embeds: [embed] });
        }
        else{
            interaction.reply('Bạn không đủ tiền để mua cổ phiếu!');
        }
    }
}