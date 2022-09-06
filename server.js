const express = require('express')
const app = express()
var bodyParser = require('body-parser')
// create router
var router = require('./routers/apiRouter') // create in file apiRouter
// const checkAdmin = (req, res, next) => {
//     req.data
// }

// const checkDangnhap = (req, res, next) => {
//     if (dangnhap) {
//         req.data = user
//         next();
//     } else {
//         res.json('Ban chua dang nhap')
//     }
// }

// app.get('/', checkDangnhap,
//     (req, res, next) => {
//         res.json('Dang nhap thanh cong, co du lieu')
//     },
// )


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/admin/api', router)

app.listen(3000, () => {
    console.log(`Example app listening on port http://localhost:${3000}`)
})