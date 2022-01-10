var mongoose = require('mongoose');
//boardWithCpu是mongodb里的db name也就是数据库名
mongoose.connect("mongodb://localhost/boardWithCpu"); 

var db = mongoose.connection;
db.on("error", function callback() {
    console.log("Connection failed...");
});

db.once("open", function callback() {
    console.log("Connection opened");
});

var boardSchema = new mongoose.Schema({
    boardInfo: String,
    cpuInfo: String
});

//这里的board对应到db里面就是collection的名字加上s，即如果想查询这个model的数据
//得在collection名为boards里面找
mongoose.model('board', boardSchema);
module.exports = mongoose;