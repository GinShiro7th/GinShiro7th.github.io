const express = require("express");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");

const app = express();
const port = 3000;

// Настройки для загрузки файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "archievs");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Рендеринг HTML-страницы
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Обработка загрузки файла


app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}.`);
});
