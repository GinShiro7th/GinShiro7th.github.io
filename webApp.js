import { API, Upload } from 'vk-io';

const api = new API({
    token: process.env.TOKEN
});

const upload = new Upload({
    api
});


const tg = window.Telegram.WebApp;
tg.ready()

function sendDataToTg(){
  tg.sendData('123');
  tg.close();
}