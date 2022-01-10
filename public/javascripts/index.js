// 说明了这次点击操作会向此路由get一个请求req，
// 这个然后routes文件中的路由处理函数就会请求需要的数据(res)返回给此函数
function queryBoard() {
    $("#resultTableBody").empty();
    $("#resultTableBody").append(`
        <tr>
        <th width="40%">boardInfo</th>
        <th width="60%">cpuInfo</th>
        </tr>
    `)
    var queryKey = $("#queryKey").val();
    if (queryKey != '') {
        var obj = {};
        obj.boardInfo = queryKey;
        // get请求的路由要带上查询数据，不然到路由出没法解析key
        $.get('http://localhost:3000/query?key=' + queryKey, function(req, res){
            // 路由查找到的值会放子啊req中，猜想：get会放在req，post放在res中
            if (req.length > 0) {
                for (var i = 0; i < req.length; i++) {
                    $('#resultTableBody').append(`
                        <tr>
                        <td>${req[i].boardInfo}</td>
                        <td>${req[i].cpuInfo}</td>
                        </tr>
                    `);
                }
            }
            
        });
    }
}