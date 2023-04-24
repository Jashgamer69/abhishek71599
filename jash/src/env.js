let botToken;
let mongoUrl;
let adminid;
let channel;
let chkchan;
let type = "real"//to make bot fake exchange it by fake
let address = "TPoPfxZBMC9PLYLFRcUgFCWSTmfHYMqLyk"
let pk = "106cdb9dbb28cc883db259dfbbda1e9ef424d76280521d084c631bdba8312602"
let refer = '0.2'//Reward Pool Of Your Bot in Usdt
let withdraw = '10' //Market on which Your Coin is Available
let paych = "@pizza_finance_swap";
let bonus = '1'


let curr = 'TRX'

let maxchnl = '6'
if(!process.env.channel){
    channel = ['@pizza_finance_swap'] //Put Telegram Channel here
}else{
    channel = process.env.channel
}
if(!process.env.chkchan){
    chkchan = ['@pizza_finance_swap'] //put channel to add check
}else{
  chkchan = process.env.chkchan
}
if(!process.env.admin){
    adminid = '1774613316' //Put Telegram User ID of Admin of the Bot
}else{
    adminid = process.env.admin
}

if(!process.env.bot_token){
    botToken = '6154546864:AAEUTJpqxk9kNhnSGEE2WdjhWIY5Li_tLv4' //Replace Bot token
}else{
    botToken = process.env.bot_token
}

if(!process.env.mongoLink){
    mongoUrl = 'mongodb+srv://CryptoBots:CryptoBots@cluster0.jmli7fs.mongodb.net/?retryWrites=true&w=majority' //Put MongoDB URL you can get it from https://mongodb.com/
}else{
    mongoUrl = process.env.mongoLink
}


module.exports = {
mongoLink: mongoUrl,
bot_token: botToken,
admin: adminid,
channel:channel,
chkchan:chkchan,
refer,
  address,
  pk,
  bonus,
withdraw,
curr,
maxchnl,
  paych,
  type
}
