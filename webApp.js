const tg = window.Telegram.WebApp;
tg.ready()

function sendDataToTg(){
  tg.sendData('123');
  tg.close();
}