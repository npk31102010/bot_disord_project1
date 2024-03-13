function loadCommands(client){
    const assci = require('ascii-table');
    const fs = require('fs');
    const path = require('path');
    const table = new assci().setHeading('Heading', 'Stytem');

    let commandsArray = [];

    const commandsFolder = fs.readdirSync('./commands');
    for (const folder of commandsFolder){
        const commandsFile = fs.readdirSync('./commands/'+folder).filter(file => file.endsWith('.js'));

        for (const file of commandsFile){
            const commandFile = require(`../commands/${folder}/${file}`);

            client.commands.set(commandFile.data.name, commandFile);

            commandsArray.push(commandFile.data.toJSON());

            table.addRow(file, "  ✅");
            continue;
        }
    }

    client.application.commands.set(commandsArray);

    return console.log(table.toString(), `\n Loaded Commands`);
}

module.exports = {loadCommands};