const {
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    ActionRowBuilder,
    ComponentType,
    SlashCommandBuilder,
    EmbedBuilder,
    RoleSelectMenuBuilder,
    PermissionFlagsBits
}
= require('discord.js');

const data = {
    name: 'id-roles',
    description: 'Vai Trò'
};


module.exports = {
    data: new SlashCommandBuilder()
    .setName(data.name)
    .setDescription(data.description)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client){
        const menu = new RoleSelectMenuBuilder()
        .setCustomId(interaction.id)
        .setMinValues(0)
        .setMaxValues(3);
        
        const actionRow = new ActionRowBuilder().addComponents(menu);

        const reply = await interaction.reply({components: [actionRow]});

        const collector = reply.createMessageComponentCollector({
            componentType: ComponentType.RoleSelect,
            filter: (i) => i.user.id === interaction.user.id && i.customId === interaction.id,
            time: 60_000,
        });

        collector.on('collect', (interaction) => {
            if(!interaction.values.length){
                interaction.reply('Vui Lòng Chọn!')
                return;
            }
            interaction.reply(`${interaction.values}`)
        })

    }
}