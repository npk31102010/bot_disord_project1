const { Client, ModalBuilder, Activity, ActivityType, InteractionCollector } = require('discord.js');
const mongoose = require('mongoose');
const config = require('../../config.json');
const User = require('../User/user');
const user = require('../User/user');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        console.log(`✅    ${client.user.username} Đã Sẵn Sàng!`);
        client.user.setActivity({
            name: 'TONPK',
            type: ActivityType.Custom,
        });
        await mongoose.connect(config.mongoDB, {}).then(()=>{console.log('✅    Cơ sở dữ liệu MongoDB đã được kết nối!')}).catch(console.error);
    },
};