const accessToken = "vk1.a.q3YUNpCrAAlnKS_6Pcmxzq-1o809taOl2puj3Lbl7TCNlwG_vH0t2nwRLaZ6VFgkQuW5zvqYJrh2aSoDjD3ksEL6GIp7lH2YMuNjSajnqe4mdSjE9PQN7S3_VLORGN7hd1L7Tty8zj_O09bmpTjLLrCLg8j3bjTc_L2opw4hU5v1zQuuR_-wrO8uotMppMzE7wErRp41uHPTH-gAjkUUag";

const tg = window.Telegram.WebApp;
tg.ready();

function sendDataToTg() {
  const fileInput = document.getElementById('fileToUpload');
  const file = fileInput.files[0];

  if (!file) {
    alert('Выберите ZIP-архив для загрузки.');
    return;
  }

  // Создайте объект FormData для отправки файла
  const formData = new FormData();
  formData.append('file', file);

  // Получение URL для загрузки файла
  axios
    .get(`https://api.vk.com/method/docs.getUploadServer?access_token=${accessToken}&type=doc`)
    .then((response) => {
      const uploadURL = response.data.response.upload_url;
      alert("upload url: " + uploadURL);

      // Отправьте ZIP-архив на полученный URL
      axios
        .post(uploadURL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((uploadResponse) => {
          const file = uploadResponse.data.file;
          alert('file : ' + file);

          // Сохраните загруженный файл
          axios
            .get(`https://api.vk.com/method/docs.save?access_token=${accessToken}&file=${file}`)
            .then((saveResponse) => {
              const doc = saveResponse.data.response[0];

              // Получите ссылку на скачивание ZIP-архива
              const downloadURL = doc.url;
              alert('dowload: ' + downloadURL);

              tg.sendData(downloadURL);
            })
            .catch((error) => {
              alert('Произошла ошибка при сохранении файла:', error);
              tg.sendData('zip save error');
            });
        })
        .catch((error) => {
          alert('Произошла ошибка при загрузке ZIP-архива:', error);
          tg.sendData('zip download error');
        });
    })
    .catch((error) => {
      alert('Произошла ошибка при получении URL для загрузки:', error);
      tg.sendData('url achieve error');
    });
}