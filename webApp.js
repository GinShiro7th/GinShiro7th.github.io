const tg = window.Telegram.WebApp;
tg.ready()

function sendDataToTg(){
  alert(JSON.stringify(window.location));
  tg.sendData('123');
}