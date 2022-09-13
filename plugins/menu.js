const {Function,isPublic,Menu,RandomFancy,prefix} = require('../lib/');
const {BOT_INFO} = require('../config')

Function({pattern: 'menu ?(.*)', fromMe: isPublic, dontAddCommandList: false, type: 'info'}, async (m, text, client) => {
const message= await RandomFancy(await Menu(m))
await client.sendMessage(m.chat, {
image: {url: `${BOT_INFO.split(";")[3]}` },
caption: `${message}`,
footer: `${BOT_INFO.split(";")[0]}`,
templateButtons: [{urlButton: {displayText: 'Github', url: 'https://github.com/Royce-B/hermit-md'}},{urlButton: {displayText: 'Contact Owner', url: `https://wa.me/${BOT_INFO.split(";")[2]}`}},{quickReplyButton: {displayText: 'Speed Test', id: prefix + 'ping'}},{quickReplyButton: {displayText: 'List Commands', id: prefix + 'list'}}]
})
});
