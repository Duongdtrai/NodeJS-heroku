const express = require('express');
var router = express.Router();
const AccountModel = require('../models/account')

// lấy dữ liệu trong DB
router.get('/', (req, res) => {
    AccountModel.find({})
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.status(500).json('Lỗi server')
    })
})

// lấy dữ liệu từng object
router.get('/:id', (req, res) => {
    AccountModel.findOne({
        _id: req.params.id
    })
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.status(500).json('lỗi server')
    })
})
// thêm dữ liệu trong DB
router.post('/register', (req, res, next) => {
    console.log(req.body.username);
    AccountModel.findOne({
        username: req.body.username
    })
        .then(data => {
            if (data) {
                res.json('account đã tồn tại')
            }
            else {
                return AccountModel.create({
                    username: req.body.username,
                    password: req.body.password
                })
            }
        })
        .then(data => {
            res.json("Tạo tài khoản thành công");
        })
        .catch(err => {
            res.status(500).json('Tạo tài khoản thất bại')
        });
})


// thêm dữ liệu trong DB
router.post('/login', (req, res, next) => {
    console.log(req.body.username);
    AccountModel.findOne({
        username: req.body.username,
        password: req.body.password
    })
        .then(data => {
            if (data) {
                res.json('Đăng nhập thành công')
            }
            else {
                res.status(300).json('Đăng nhập không thành công')
            }
        })
        .catch(err => {
            res.status(500).json('Lỗi server')
        })
})
// sửa dữ liệu trong DB
router.put('/:id', (req, res, next) => {
    var id = req.params.id
    var newPassword = req.body.newPassword
    AccountModel.findByIdAndUpdate(id,{
        password: newPassword
    })
    .then(data => {
        res.json('Sử thông tin thành công')
    })
    .catch(err => {
        res.status(500).json('Lỗi server')
    })
})

// xóa dữ liệu trong DB
router.delete('/:id', (req, res, next) => {
    var id = req.params.id
    AccountModel.deleteOne({
        _id: id
    })
    .then(data => {
        res.json('xóa thông tin thành công')
    })
    .catch(err => {
        res.status(500).json('Lỗi server')
    });
})
module.exports = router
