require("dotenv").config()
const PORT = process.env.PORT || 3001

const express = require('express')
const app = express()

const drinks = require('./models/drinks.js')
const foods = require('./models/food.js')

app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`)
})

app.get("/", (req,res) => {
    res.render('drinks_index.ejs',{
        drinksMenu: drinks,
    })
})

app.get("/food", (req,res) => {
    res.render('food_index.ejs',{
        foodMenu: foods,
    })
})

app.get("/drinks/:id", (req,res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id]
    })
})

app.get("/food/:id", (req,res) => {
    res.render('food_show.ejs', {
        food: foods[req.params.id]
    })
})

// next step
//https://seir-222-sasquatch.netlify.app/backend-fundamentals/week-7/day-1/labs/git-pub/#rendering-an-individual-drink-in-the-show-view
