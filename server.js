// create an express app
const express = require("express")
const app = express()
const fs = require('fs')

// use the express-static middleware
app.use(express.static("public"))

// const bodyParser = require('body-parser')
let jdata = JSON.parse(fs.readFileSync('public/data.json'));

app.get('/info', (req,res)=> {
    res.json(jdata)
})
// start the server listening for requests
let listener = app.listen(process.env.PORT || 3000, 
	() => console.log(`App is running...`));