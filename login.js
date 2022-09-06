// server chức năng login register
const express = require('express')
var app = express()
var bodyParser = require('body-parser')
var accountRouter = require('./routers/account')
var path = require('path')

app.use('/public',express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, next) => {
    var duongDanFile = path.join(__dirname, 'home.html')
    res.sendFile(duongDanFile);
})
// bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// account
app.use('/api/account', accountRouter)

// listen
app.listen(3000, () => {
    console.log(`Example app listening on port http://localhost:${3000}`)
})