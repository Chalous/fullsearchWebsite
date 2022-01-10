var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var boardModel = mongoose.model('board');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 正则表达式实现模糊匹配实践
router.get('/query', function(req, res) {
  // 通过req.query.问号后面的字段 可以直接获取到要查询的key
  var queryKey = req.query.key;
  var regxObj = {};
  regxObj.$regex = queryKey;//使用regex正则表达式查找boardInfo字符串存在queryKey的结果
  regxObj.$options = "i";//使用i选线忽略大小写
  var obj = {};
  obj.boardInfo = regxObj;

  console.log('--->', obj);
  // 用于测试，打印数据库所有数据
  boardModel.find(obj).exec(function(err, data, count) {
    console.log('All data',data);
    // 查询后的数据在data里，将其发送回js脚本函数里，传回去的在req字段中
    res.send(data);
  })
});

module.exports = router;
