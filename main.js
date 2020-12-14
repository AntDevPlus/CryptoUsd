const request = require('request');
let data;
request('https://api.coincap.io/v2/assets', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  cryptos = body.data
  giveUsd(cryptos)
});

function giveUsd(data){
    data.forEach(crypto => {
        console.log("Nom: " + crypto.id +" pour: "+ crypto.priceUsd + "$")
    });
}