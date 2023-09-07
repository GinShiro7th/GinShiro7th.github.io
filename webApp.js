const tg = window.Telegram.WebApp;
tg.ready();

function sendDataToTg() {
  const fileInput = document.getElementById("fileToUpload");
  const file = fileInput.files[0];

  if (!file) {
    alert("Выберите ZIP-архив для загрузки.");
    return;
  }

  // Создайте объект FormData для отправки файла
  const formData = new FormData();
  formData.append("file", file);

  fetch("/localhost:3000", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Ошибка при отправке файла.");
      }
    })
    .then((data) => {
      console.log("Файл успешно загружен:", data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}
