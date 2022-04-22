const express = require("express");

const app = express(); // app - веб-сервер

app.get("/", (request, response) => {
    // console.log(request.url);
    // console.log(request.method);
    response.send("<h2>Главная страница</h2>");
});

app.get("/books", (request, response) => {
    response.send("<h2>Список книг</h2>");
})

app.get("/contacts", (request, response) => {
    response.send("<h2>Наши контакты</h2>");
})

app.listen(4000, ()=> console.log("Server running"));