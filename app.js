// const { request } = require("express");
const express = require("express")
const bodyParser = require("body-parser")
const app = express();

const pageContacts = require("./view/contacts")
const pageAnimals = require("./view/animals")
const pageToys = require("./view/toys")
const pageFood = require("./view/food")

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/contacts', (req, res) => {
    console.log(req.headers)
    res.send(pageContacts)
})

app.get('/animals', (req, res) => {
    console.log(req.headers)
    res.send(pageAnimals)
})

app.get('/food', (req, res) => {
    console.log(req.headers)
    res.send(pageFood)
})

app.get('/toys', (req, res) => {
    console.log(req.headers)
    res.send(pageToys)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000")
})