import { API, Upload } from 'vk-io';

const api = new API({
    token: process.env.TOKEN
});

const upload = new Upload({
    api
});


const tg = window.Telegram.WebApp;
tg.ready()

async function sendDataToTg(){
  const attachment = await upload.messageDocument({
    source: {
        value: document.getElementById('fileToUpload')
    }
  }).then((response) => {
    alert(JSON.stringify(response));
  })

  tg.sendData('123');
  tg.close();
}