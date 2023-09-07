const tg = window.Telegram.WebApp;
tg.ready();

function sendDataToTg() {
  const fileInput = document.getElementById("fileToUpload");
  const file = fileInput.files[0];
  
  if (!file) {
    alert("Выберите ZIP-архив для загрузки.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  tg.sendData(JSON.stringify(file.name));

  // fetch("/localhost:3000", {
  //   method: "POST",
  //   body: formData,
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       tg.sendData(response.json());
  //     } else {
  //       throw new Error("Ошибка при отправке файла.");
  //     }
  //   })
  //   .then((data) => {
  //     console.log("Файл успешно загружен:", data);
  //   })
  //   .catch((error) => {
  //     tg.sendData("Ошибка: " + error);
  //   });
}
