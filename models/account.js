const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database'); // kết nối đến thư mục lớn trong database, localhost là của mongo compass

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: String,
  password: String,
}, {
    collection: 'account' // account: tên database cần collection đến
});

const AccountModel = mongoose.model('account', AccountSchema); // account: tên database cần collection đến
module.exports = AccountModel;