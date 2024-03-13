const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../../events/User/user');
const {img_src} = require('../../src/img');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bank')
    .setDescription("Ngân Hàng")
    .addUserOption(options => 
        options
        .setName('user')
        .setDescription('Xem tài khoản ngân hàng của một ai đó')
        .setRequired(false)
    ),
    async execute(interaction, client){
        let random = Math.floor(Math.random() * img_src.length);
        const targetUserId = interaction.options.get('user')?.value || interaction.member.id
        const user = await User.findOne( { userId : targetUserId } );
        let cash = `${user.cash}`;
        let Cash = '';
        let getDotsLength = 1;

        for (let i = 0; i < cash.length; i++){
            getDotsLength++;
            switch (cash.length) {
                case 4: 
                    if(getDotsLength === 3){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 5:
                    if(getDotsLength === 4){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 6:
                    if(getDotsLength === 5){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 7:
                    if(getDotsLength === 3 || getDotsLength === 6){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 8:
                    if(getDotsLength === 4 || getDotsLength  === 7){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 9:
                    if(getDotsLength === 5 || getDotsLength === 8){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 10:
                    if(getDotsLength === 3 || getDotsLength === 6  || getDotsLength === 9){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 11:
                    if(getDotsLength === 4 || getDotsLength === 7  || getDotsLength === 10){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 12:
                    if(getDotsLength === 5 || getDotsLength === 8  || getDotsLength === 11){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 13:
                    if(getDotsLength === 3 || getDotsLength === 6 || getDotsLength === 9  || getDotsLength === 12){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 14:
                    if(getDotsLength === 4 || getDotsLength === 7  || getDotsLength === 10 || getDotsLength === 13){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 15:
                    if(getDotsLength === 5 || getDotsLength === 8  || getDotsLength === 11 || getDotsLength === 14){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 16:
                    if(getDotsLength === 3 || getDotsLength === 6 || getDotsLength === 9  || getDotsLength === 12 || getDotsLength === 15){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 17:
                    if(getDotsLength === 4 || getDotsLength === 7  || getDotsLength === 10 || getDotsLength === 13 || getDotsLength === 16){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 18:
                    if(getDotsLength === 5 || getDotsLength === 8  || getDotsLength === 11 || getDotsLength === 14 || getDotsLength === 17){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 19:
                    if(getDotsLength === 3 || getDotsLength === 6 || getDotsLength === 9  || getDotsLength === 12 || getDotsLength === 15 || getDotsLength === 18){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 20:
                    if(getDotsLength === 4 || getDotsLength === 7  || getDotsLength === 10 || getDotsLength === 13 || getDotsLength === 16 || getDotsLength === 19){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
                case 21:
                    if(getDotsLength === 5 || getDotsLength === 8  || getDotsLength === 11 || getDotsLength === 14 || getDotsLength === 17 || getDotsLength === 20){
                        Cash += '.';
                    }
                    Cash += cash[i];
                break;
            }
        };

        const embed = new EmbedBuilder()
        .setTitle('PNFM Bank')
        .setColor('Grey')
        .setImage(img_src[random]);

        if (!user){
            interaction.reply(`<@${targetUserId}> chưa có một tài khoản ngân hàng.`)
        }

        const userOptions = interaction.options.getUser('user')

        if (targetUserId === interaction.member.id){
            embed.addFields([
                {
                    name: 'Tài khoản của bạn:',
                    value: `**@${interaction.member.displayName}**`,
                    inline: false
                },
                {
                    name: 'Số dư',
                    value: `**${Cash}** vnd`,
                    inline: false
                },
            ])
            .setThumbnail(interaction.user.avatarURL({ dynamic: true }))
        }
        else{
            embed.addFields([
                {
                    name: 'Tài khoản của bạn:',
                    value: `**${userOptions}**`,
                    inline: false
                },
                {
                    name: 'Số dư',
                    value: `**${Cash}**`,
                    inline: false
                },
            ])
            .setThumbnail(userOptions.avatarURL({ dynamic: true }))
        }
        
        interaction.reply({
            embeds: [embed],
        })
    }
}