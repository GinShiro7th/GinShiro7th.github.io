const tg = window.Telegram.WebApp;
tg.ready();

async function sendDataToTg() {
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  if (!file) {
    alert("Выберите ZIP-архив для загрузки.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  fetch("http://localhost:3000/upload", {
    method: "POST",
    body: formData,
  })
    .then(async (data) => {
      const fileName = JSON.parse(await data.text()).message;
      tg.sendData(fileName);
    })
    .catch((error) => {
      //tg.sendData("Ошибка: " + error);
    });
}
