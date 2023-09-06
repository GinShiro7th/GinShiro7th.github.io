const tg = window.Telegram.WebApp;
tg.ready()

const fileInput = document.getElementById('fileToUpload');

fileInput.addEventListener('change', (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const fileName = selectedFile.name;
    console.log(`Выбранный файл: ${fileName}`);
  } else {
    console.log('Файл не был выбран');
  }
});


function sendDataToTg(){
  
  const file = document.getElementById("fileToUpload");
  alert(file.target.name);
  tg.sendData('123');
}