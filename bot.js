'use strict';
var Discord=require('discord.io');
var logger=require('winston');
var auth =require('./auth.json');
var bot;

logger.level='debug';
//botの初期設定
bot =new Discord.Client({
    token :auth.token,
    autorun:true
});

//起動時の処理コード
bot.on('ready',(event)=>{
    logger.info('discordに接続されました');
    logger.info('アカウント'+bot.username+'(ID:'+bot.id+')');
});
bot.on('message',(user,userID,channelID,message,evt)=>{
    if(message==='こんにちは'){
        bot.sendMessage({
            to:channelID,
            message:"とくさしこだいです"
        });
    }

});