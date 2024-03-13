const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../../events/User/user');

const fish = [
    'trê',
    'tra',
    'rô phi',
    'basa',
    'mập',
    'lóc',
    'trôi',
    'trích',
    'chép',
    'ngát',
    'thát lát',
    'lăng',
    'diêu hồng',
    'bè',
    'măng',
    'kèo',
    'dầm xanh',
    'tuyết',
    'hồi',
    'ngừ',
    'hồng',
    'kiếm',
    'ngừ vây xanh',
    'ngừ vây vàng',
    'cam',
    'mú',
    'cơm',
    'kiếm',
    'voi',
    'cơm',
    'nhà táng',
    'tầm',
    'chép',
    'hồi',
    'nhám voi',
    'sát thủ',
    'basa',
    'nhái',
    'bớp',
    'rô đồng',
    'nhám phơi nắng',
    'mái chèo',
    'rô phi',
    'diêu hồng',
    'ngân',
    'voi xanh',
    'thu',
    'tuyết',
    'cơm',
    'lóc',
    'mập trắng lớn',
    'voi',
    'anh vũ',
    'mặt trăng',
    'mập trắng',
    'mập voi',
];


module.exports = {
    data: new SlashCommandBuilder()
    .setName('fishing')
    .setDescription('Câu cá'),
    async execute(interaction) {
        const user = await User.findOne({ userId: interaction.member.id });
        const random = Math.floor(Math.random() * fish.length);
        let moneyFish;

        switch (fish[random]){
            case `trê`: moneyFish = 40000; break;
            case `tra`: moneyFish = 29000; break;
            case `rô phi`: moneyFish = 37000; break;
            case `basa`: moneyFish = 29000; break;
            case `mập`: moneyFish = 70000; break;
            case `lóc`: moneyFish = 55000; break;
            case `trôi`: moneyFish = 50000; break;
            case `trích`: moneyFish = 50000; break;
            case `chép`: moneyFish = 35000; break;
            case `ngát`: moneyFish = 135000; break;
            case `thát lát`: moneyFish = 165000; break;
            case `lăng`: moneyFish = 200000; break;
            case `diêu hồng`: moneyFish = 100000; break;
            case `bè`: moneyFish = 100000; break;
            case `măng`: moneyFish = 130000; break;
            case `kèo`: moneyFish = 90000; break;
            case `dầm xanh`: moneyFish = 175000; break;
            case `tuyết`: moneyFish = 225000; break;
            case `hồi`: moneyFish = 350000; break;
            case `ngừ`: moneyFish = 200000; break;
            case `hồng`: moneyFish = 160000; break;
            case `kiếm`: moneyFish = 275000; break;
            case `ngừ vây xanh`: moneyFish = 500000; break;
            case `ngừ vây vàng`: moneyFish = 400000; break;
            case `cam`: moneyFish = 130000; break;
            case `cơm`: moneyFish = 165000; break;
            case `thu`: moneyFish = 175000; break;
            case `tuyết`: moneyFish = 350000; break;
            case `ngân`: moneyFish = 150000; break;
            case `mặt trăng`: moneyFish = 100000; break;
            case `mập voi`: moneyFish = 1500000; break;
            case `voi`: moneyFish = 600000; break;
            case `rô đồng`: moneyFish = 50000; break;
            case `bớp`: moneyFish = 175000; break;
            case `nhái`: moneyFish = 250000; break;
            case `nhám phơi nắng`: moneyFish = 200000000; break;
            case `anh vũ`: moneyFish = 200000; break;
            case `mái chèo`: moneyFish = 200000000; break;
            case `nhà táng`: moneyFish = 200000000; break;
            case `tầm`: moneyFish = 250000; break;
            case `sát thủ`: moneyFish = 400000; break;
            case `voi xanh`: moneyFish = 500000000; break;
            case `mập trắng lớn`: moneyFish = 100000; break;
        }
        
        const cash = `${moneyFish}`;
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

        user.cash += moneyFish;
        user.save();
        
        const embed = new EmbedBuilder()
        .setTitle('Câu thành công')
        .setColor('Aqua')
        .setFields([
            {
                name: 'Tên Loài Cá',
                value: `**Cá ${ fish[random].charAt(0).toUpperCase() + fish[random].slice(1) }**`,
                inline: true
            },
            {
                name: 'Giá Trị',
                value: `**${Cash} vnd**`,
                inline: true
            }
        ]);

        interaction.reply({ embeds: [embed] });
    }
}