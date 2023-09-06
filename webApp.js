const tg = window.Telegram.WebApp;
tg.ready()

function sendDataToTg(){
  alert(JSON.stringify(tg));
  tg.sendData('123');
  tg.close();
}