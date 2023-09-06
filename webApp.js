const tg = window.Telegram.WebApp;
tg.ready()

function sendDataToTg(){
  alert(window.location);
  tg.sendData('123');
}