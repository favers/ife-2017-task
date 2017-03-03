const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://127.0.0.1:27017/ife-task');

const schema = new mongoose.Schema({
    code: Number,
    msg: String,
    word: String,
    time: Number,
    device: String,
    dataList: Array
});

const data = mongoose.model('data', schema);

const dataDao = function(){};
dataDao.prototype.save = function(obj, callback) {
var instance = new data(obj);
	instance.save(function(err){
		callback(err);
	});
};

module.exports = new dataDao();