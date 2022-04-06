require("dotenv").config()
const PORT = process.env.PORT || 3001

const express = require('express')
const app = express()

const drinks = require('./models/drinks.js')

app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`)
})

app.get("/", (req,res) => {
    res.render('drinks_index.ejs')
})

