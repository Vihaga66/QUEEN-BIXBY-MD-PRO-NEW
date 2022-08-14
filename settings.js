//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['Hi 🤭']
global.premium = ['Hi 🤭']
global.ownernomer = 'Hi 🤭'
global.ownername = 'VIHAGA BOT'
global.botname = 'VIHAGA BOT'
global.footer = ' VIHAGA SITHUM.'
global.ig = '💛 👉 YouTube - SUBSCRIBE click 👈 💛'
global.region = 'India, South India, Kerala'
global.sc = 'https://youtube.com/channel/UC3ZwkFVKgeCY9BEA-cdutwA'
global.myweb = 'https://youtube.com/channel/UC3ZwkFVKgeCY9BEA-cdutwA'
global.packname = 'vihaga sithum MD'
global.author = 'vihags sithum'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '🚢'
global.mess = {
    success: 'Done ✓',
    admin: 'මෙම විශේෂාංගය පරිපාලක සඳහා පමණි!',
    botAdmin: 'Bot මුලින්ම Admin විය යුතුය!',
    owner: 'මෙම විශේෂාංගය හිමිකරු සඳහා පමණි!',
    group: 'විශේෂාංගය කණ්ඩායම් සඳහා පමණක් භාවිතා වේ!',
    private: 'පුද්ගලික කතාබස් සඳහා පමණක් භාවිතා කරන විශේෂාංග!',
    bot: 'මෙම විශේෂාංගය Bot සඳහා පමණි',
    wait: 'කරුණාකර රැඳී සිටින්න...',
    error: 'දෝෂයක්! සමහර විට අපි යතුර කල් ඉකුත් වී ඇත🤔!',
    endLimit: 'ඔබගේ දෛනික සීමාව කල් ඉකුත් වී ඇත, සීමාව සෑම පැය 12 කට වරක් නැවත සකසනු ලැබේ',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./BixbyMedia/djt.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
