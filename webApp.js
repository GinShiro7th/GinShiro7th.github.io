const accessToken = "vk1.a.q3YUNpCrAAlnKS_6Pcmxzq-1o809taOl2puj3Lbl7TCNlwG_vH0t2nwRLaZ6VFgkQuW5zvqYJrh2aSoDjD3ksEL6GIp7lH2YMuNjSajnqe4mdSjE9PQN7S3_VLORGN7hd1L7Tty8zj_O09bmpTjLLrCLg8j3bjTc_L2opw4hU5v1zQuuR_-wrO8uotMppMzE7wErRp41uHPTH-gAjkUUag";

const tg = window.Telegram.WebApp;
tg.ready();

function sendDataToTg() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    alert('Выберите ZIP-архив для загрузки.');
    return;
  }

  // Создайте объект FormData для отправки файла
  const formData = new FormData();
  formData.append('file', file);

  // Отправьте файл на сервер VK
  fetch(`https://api.vk.com/method/docs.getUploadServer?access_token=${accessToken}&type=doc`)
    .then((response) => response.json())
    .then((data) => {
      const uploadURL = data.response.upload_url;

      // Отправьте ZIP-архив на полученный URL
      fetch(uploadURL, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((uploadResponse) => {
          const file = uploadResponse.file;

          // Сохраните загруженный файл
          fetch(`https://api.vk.com/method/docs.save?access_token=${accessToken}&file=${file}`)
            .then((response) => response.json())
            .then((saveResponse) => {
              const doc = saveResponse.response[0];

              // Получите ссылку на скачивание ZIP-архива
              const downloadURL = doc.url;

              tg.sendData(downloadURL);
            })
            .catch((error) => {
              console.error('Произошла ошибка при сохранении файла:', error);
            });
        })
        .catch((error) => {
          console.error('Произошла ошибка при загрузке ZIP-архива:', error);
        });
    })
    .catch((error) => {
      console.error('Произошла ошибка при получении URL для загрузки:', error);
    });
}
