const tg = window.Telegram.WebApp;
tg.ready()

function sendDataToTg(){
  
  const file = document.getElementById("fileToUpload");
  tg.sendData('123');
}