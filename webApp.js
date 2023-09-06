const tg = window.Telegram.WebApp;
tg.ready()

const fileInput = document.getElementById('fileToUpload');

function sendDataToTg(){
  tg.sendData('123');
}