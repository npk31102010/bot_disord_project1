const { Routes, REST, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const config = require('../../config.json');
const rest = new REST().setToken(config.token);

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clear-allcommands')
    .setDescription('Xóa tất cả tin nhắn')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        const { channel, options } = interaction;

        const amount = options.getInteger('amount');
        const target = options.getUser('user');

        const messages = await channel.messages.fetch({
            limit: amount + 1
        });

        const res = new EmbedBuilder()
        .setTitle('Xóa Tất Cả Tin Nhắn')
        .setColor('Grey')

        if (target){
            let i = 0;
            const filtered = [];

            await messages.filter((msg) => {
                if (msg.author.id === target.id && amount > i){
                    filtered.push(msg);
                    i++;
                }
            });

            await channel.bulkDelete(filtered).then(messages => {
                res.setDescription(`Thành công xóa ${messages.size} tin nhắn trong ${target}`);
                interaction.reply({
                    embeds: [res],
                })
            })
        }
        else{
            await channel.bulkDelete(amount, true).then(messages => {
                res.setDescription(`Thành công xóa ${messages.size} tin nhắn trong kênh này`);
                interaction.reply({
                    embeds: [res],
                })
            });
        }
    }
}