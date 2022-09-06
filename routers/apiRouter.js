const express = require('express');
var router = express.Router()

router.get('/', (req, res) => {
    res.json('router api user GET')
})

router.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    res.json('router api user post: ' + req.body.username + " " + req.headers.phu)
})
router.put('/', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    res.json('router api user put: ' + req.body.username + " " + req.headers.phu)
})
router.delete('/', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    res.json('router api user delete: ' + req.body.username + " " + req.headers.phu)
})


router.get('/product', (req, res) => {
    res.json('router product')
})
router.get('/cart', (req, res) => {
    res.json('router cart')
})
router.get('/:id', (req, res) => {
    res.json('router api params ' + req.params.id)
})
router.use((err, req, res, next) => { // truyen 4 tham so, dung lam canh cua loi, voi path = '/

})

module.exports = router // push ra ngoai


