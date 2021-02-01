exports.wait = () => {
	return`*「 ESPERA 」 Procesando...*`
}

exports.succes = () => {
	return`*「 EXITO! 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*Su nivel esta nulo.*`
}

exports.lvlnoon = () => {
	return`*LA FUNCION DE NIVELES NO HA SIDO ACTIVADA*`
}

exports.noregis = () => {
	return`*「 NO REGISTRADO 」*\n\n*Como registrarse: ${prefix}daftar (username)|(edad)*`
}

exports.rediregis = () => {
	return`*「 REGISTRO EXITOSO! 」*\n\n*Ya estas registrado en la base de datos!*`
}

exports.stikga = () => {
	return`*Fallido, intenta mas tarde...*`
}

exports.linkga = () => {
	return`*El enlace no es valido.*`
}

exports.groupo = () => {
	return`*「SOLO UTILIZABLE EN GRUPOS」*`
}

exports.ownerb = () => {
	return`*「SOLO UTILIZABLE POR EL DUEÑO DEL BOT」*`
}

exports.ownerg = () => {
	return`*「SOLO UTILIZABLE POR EL DUEÑO DEL GRUPO」`
}

exports.admin = () => {
	return`*「SOLO UTILIZABLE POR ADMINS」`
}

exports.badmin = () => {
	return`*「EL BOT NECESITA PERMISOS DE ADMINISTRADOR」`
}

exports.nsfwoff = () => {
	return`*El NSFW no esta activo.``
}

exports.bug = () => {
	return`*Se han informado problemas al propietario del BOT, no se responderá a los informes falsos*`
}

exports.wrongf = () => {
	return`*Formato invalido/Texto en blanco*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRO」*\n\Para saber si se ha registrado, consulte el mensaje que le envie \n\nNOTE:\n*Si no recibe el mensaje, significa que su numero no se ha guardado en el Bot.*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATOS REGISTRADOS 」*\n\nTe haz registrado  con los siguientes datos: \n\n┏━⊱Nombre\n┗⊱${namaUser}\n┏━⊱Numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Edad\n┗⊱${umurUser}\n┏━⊱Fecha de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : No olvides tu numero por que es importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* No encontrado, intente escribir *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Lo siento ${pushname} pero no eres el propietario del Bot*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Lo siento ${pushname} pero tu nivel no es suficiente*\n\n*┏⊱Tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Requisitos de nivel : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Lo siento ${pushname} pero tu nivel no es suficiente*\n\n*┏⊱Tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Requisitos de nivel : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Lo siento ${pushname} pero tu nivel no es suficiente*\n\n*┏⊱Tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Requisitos de nivel : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Lo siento ${pushname} pero tu nivel no es suficiente*\n\n*┏⊱Tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Requisitos de nivel : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Lo siento ${pushname} pero tu nivel no es suficiente*\n\n*┏⊱Tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando: ${command}*\n*┗⊱Requisitos de nivel : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Lo siento ${pushname} pero tu nivel no es suficiente*\n\n*┏⊱Tu nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Requisitos de nivel : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
┏━━━⊱  *SOBRE EL USUARIO*  ⊰━━┓
┣⊱ *Nombre* : ${pushname}
┣⊱ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱ *Dinero restante* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Nivel* : ${getLevelingLevel(sender)}
┣⊱ *Fecha de registro* : ${_registered.length}
┗━━━⊱  ⸨ *AFFIS* ⸩  ⊰━━━━┛


┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}avengers*
┣⊱ *${prefix}summer*
┣⊱ *${prefix}sandwrite*
┣⊱ *${prefix}metaldark*
┣⊱ *${prefix}dropwater*
┣⊱ *${prefix}greenneon*
┣⊱ *${prefix}neontext*
┣⊱ *${prefix}sumery*
┣⊱ *${prefix}blood*
┣⊱ *${prefix}firework*
┣⊱ *${prefix}lava*
┣⊱ *${prefix}qrcode*
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}mining*
┣⊱ *${prefix}bisakah*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid*
┣⊱ *${prefix}happymod*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}beritahoax*
┣⊱ *${prefix}brainly*
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan*
┣⊱ *${prefix}igstalk*
┣⊱ *${prefix}bitly*
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3*
┣⊱ *${prefix}ytmp4*
┣⊱ *${prefix}joox*
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit*
┣⊱ *${prefix}buylimit*
┣⊱ *${prefix}transfer*
┣⊱ *${prefix}dompet*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc*
┣⊱ *${prefix}bcgc*
┣⊱ *${prefix}kickall*
┣⊱ *${prefix}setreply*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone*
┣⊱ *${prefix}setppbot*
┣━━⊱ *THANGKS TO* ⊰━┫
┃
┣⊱ *AFFIS JUNIANTO*
┣⊱ *FADHIL GRAPHY*
┣⊱ *MHANKBARBARS*
┣⊱ *MYBOT TEAM*
┣⊱ *AGUNG(XPTN)*
┣⊱ *BRYAN(SUHU)*
┣⊱ *TOBZ*
┣⊱ *ARUGAZ*
┃
┗━━⊱  ⸨ *AFFIS* ⸩  ⊰━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SUBISTE DE NIVEL! 」*
┏⊱ *Nombre* : ${pushname}
┣⊱ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* = +3
┗⊱ *Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Lo sentimos ${pushname} el limite de hoy expirara*\n*El limite de reinicia cada 24 horas*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 CONTEO LIMITE 」*
Limite restante : ${limitCounts}

NOTE : Para obtener un limite, puedes subir de nivel o comprarlo`
}

exports.satukos = () => {
	return`*Agregue un parametro 1/Habilitar 0/Desactivar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nombre* : ${pushname}\n┣⊱ *Numero* : ${sender.split("@")[0]}\n┣⊱ *Dinero* : ${uangkau}\n┗━━━━━━━━━━`
}
