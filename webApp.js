const tg = window.Telegram.WebApp;
tg.ready()

const fileInput = document.getElementById('fileToUpload');

fileInput.addEventListener('change', (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const fileName = selectedFile.name;
    alert(`Выбранный файл: ${fileName}`);
  } else {
    alert('Файл не был выбран');
  }
});

function sendDataToTg(){
  
  const file = document.getElementById("fileToUpload");
  file.
  tg.sendData('123');
}