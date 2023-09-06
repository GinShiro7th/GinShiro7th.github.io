const tg = window.Telegram.WebApp;
tg.ready()

function sendDataToTg(){
  
  const file = document.getElementById("fileToUpload");
  alert(file);
  tg.sendData('123');
}