const { ChannelFlagsBitField } = require('discord.js');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    guildId: {
        type: String,
        required: true,
    },
    cash: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0,
    },
    lastDaily: {
        type: Date,
        required: true,
    },
    shares: {
        type: Boolean,
        default: false
    },
    appl: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    googl: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    msft: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    amzn: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    meta: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    tsla: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    nvda:{
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    btc: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    eth: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    ada: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    ltc: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    xlm: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    bch: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
    doge: {
        type: mongoose.Schema.Types.Number,
        get: v => Math.floor(v),
        default: 0
    },
});

module.exports = model('User', userSchema);
