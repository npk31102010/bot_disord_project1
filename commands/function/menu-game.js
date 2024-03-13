const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ButtonComponent, ComponentType, InteractionCollector } = require('discord.js');

const {img_src} = require('../../src/img');



module.exports = {
    data: new SlashCommandBuilder()
    .setName('game')
    .setDescription('Chơi trò chơi để nhận thưởng'),
    async execute(interaction) {
        let random = Math.floor(Math.random() * img_src.length);

        const embed = new EmbedBuilder()
        .setTitle('Menu Games')
        .setColor('Grey')
        .addFields([
            {
                name: 'Tài Xỉu',
                value: '-tx',
                inline: false
            },
            {
                name: 'Chứng Khoán',
                value: '-cp',
                inline: false
            },
            {
                name: 'Tiền Ảo',
                value: '-coin',
                inline: false
            },
            {
                name: 'Câu cá',
                value: '-fishing',
                inline: false
            }
        ])
        .setImage(img_src[random]);

        await interaction.reply({
            embeds: [embed]
        });


        interaction.client.on('messageCreate', (msg) => {
            if (msg.content === '-tx'){
                const embed = new EmbedBuilder()
                .setTitle('Tài Xỉu')
                .setDescription(`Luật chơi:
                    Thắng nếu bạn cược **Xỉu** trúng : **4 - 10**
                    Thắng nếu bạn cược **Tài** trúng : **11 - 17**
                    
                    Đặt cược **Tài** : /t <số tiền>
                    Đặt cược **Xỉu** : /x <số tiền>
                `)
                .setColor('Random');

                msg.reply({ embeds: [embed] });
            };

            if (msg.content === '-cp'){
                const embed = new EmbedBuilder()
                .setTitle('Thị trường chứng khoán')
                .setDescription(`Luật chơi:
                        Bạn có thể đầu tư vào một số cổ phiếu.
                        Nếu cổ phiếu đó tăng : bạn lời vốn.
                        Nếu cổ phiếu đó giảm : bạn lỗ vốn.

                        Bạn có thể bán hoặc giữ lại cổ phiếu đó.
                `)
                .setColor('Random')
                .setImage('https://i.imgur.com/bAhn0KH.png')
                .addFields([
                    {
                        name: 'Apple',
                        value: '/cp-aapl',
                        inline: false
                    },
                    {
                        name: 'Alphabet',
                        value: '/cp-googl',
                        inline: false
                    },
                    {
                        name: 'Microsoft',
                        value: '/cp-msft',
                        inline: false
                    },
                    {
                        name: 'Amazon',
                        value: '/cp-amzn',
                        inline: false
                    },
                    {
                        name: 'Meta',
                        value: '/cp-meta',
                        inline: false
                    },
                    {
                        name: 'Tesla',
                        value: '/cp-tsla',
                        inline: false
                    },
                    {
                        name: 'Nvidia',
                        value: '/cp-nvda',
                        inline: false
                    },
                ]);

                msg.reply({ embeds: [embed] });
            }

            if (msg.content === '-coin'){
                const embed = new EmbedBuilder()
                .setColor('Grey')
                .setTitle('Tiền Ảo')
                .setImage('https://img.freepik.com/premium-vector/abstract-world-digital-hologram-money-transfer-decentralized-finance-blockchain-cryptocurrency_36402-904.jpg')
                .setDescription(`Luật chơi: ( giống như cổ phiếu )
                    Bạn có thể đầu tư vào một số đồng tiền ảo.
                    Nếu đồng tiền đó tăng : bạn lời vốn.
                    Nếu đồng tiền đó giảm : bạn lỗ vốn.

                    Bạn có thể bán hoặc giữ lại đồng tiền ảo đó.
                `)
                .addFields([
                    {
                        name: 'Bitcoin',
                        value: '/coin-btc',
                        inline: false
                    },
                    {
                        name: 'Ether',
                        value: '/coin-eth',
                        inline: false
                    },
                    {
                        name: 'Cardano',
                        value: '/coin-ada',
                        inline: false
                    },
                    {
                        name: 'Litecoin',
                        value: '/coin-ltc',
                        inline: false
                    },
                    {
                        name: 'Bitcoin Cash',
                        value: '/coin-bch',
                        inline: false
                    },
                    {
                        name: 'Stellar',
                        value: '/coin-xml',
                        inline: false
                    },
                    {
                        name: 'Doge Coin',
                        value: '/coin-doge',
                        inline: false
                    },
                ]);

                interaction.reply({embeds: [embed]});
            }

            if(msg.content === '-fishing'){
                const embed = new EmbedBuilder()
                .setTitle('Thợ đánh cá')
                .setDescription(`Luật chơi:
                            Bạn có thể câu cá khi sử dụng lệnh **/fishing**
                            Nếu bạn câu được con cá nào thì bạn sẽ được tiền theo giá trị của mỗi con cá đó.
                `)
                .setColor('Random')
                .setImage('https://png.pngtree.com/background/20220729/original/pngtree-underwater-game-world-background-with-different-fish-flat-vector-illustration-picture-image_1866290.jpg');

                msg.reply({ embeds: [embed] });
            }

        });

        
    }
}