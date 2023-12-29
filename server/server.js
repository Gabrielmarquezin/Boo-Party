const express = require('express')
const cors = require('cors')
const { SheetAdd, getSheet } = require('./controllers/sheet_controler')
const port = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/sheet", getSheet)
app.post("/sheet/add", SheetAdd)

app.listen(port, ()=>{
    console.log("abriu no: localhost:3000")
})