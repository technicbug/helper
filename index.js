const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "웃긴-잡담";
const byeChannelName = "웃긴-잡담";
const welcomeChannelComment = "웃긴 중학 입학을 환영합니다. !도움말을 쳐서 명령어를 알아보세요.";
const byeChannelComment = "웃긴 중학 퇴학 처리 합니다.";

client.on('ready', () => {
  console.log('funny school HELPER is online');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "신규 입학생"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '!도움말') {
    message.reply('!정보 : 웃긴 중학에 대한 정보를 알려줍니다');
    message.reply('!공지확인 : 등록된 공지를 확인합니다');
    message.reply('!규칙 : 웃긴 중학의 규칙을 설명합니다');
    }
  if(message.content === '!정보') {
    message.reply('재미있는 요소를 공유하는 방 입니다. 요소의 형식에 맞는 방에 공유 해주세요');
    }    
  if(message.content === '!공지확인') {
    message.reply('현재 등록된 공지가 없습니다');
    } 
  if(message.content === '!규칙') {
     message.reply('노잼 드립 금지, 재미 없다고 불평 금지, 도발 금지 (욕도 가능하나 패드립은 금지)');
    } 
});

client.login(token);