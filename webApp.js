const tg = window.Telegram.WebApp;
tg.ready()

const fileInput = document.getElementById('fileToUpload');

function sendDataToTg(){
  alert(tg);
  tg.sendData('123');
}