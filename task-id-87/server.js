const http = require('http');
const url = require('url');
const task = require('./task');
const dataDao = require('./models');

http.createServer(async function (request, response) {
    let params = url.parse(request.url, true).query;
    if (!params.keyword || !params.deviceName) {
        response.end(JSON.stringify({ code: 0, msg: '参数错误' }));
        return;
    }

    let result = await task(params.keyword, params.deviceName);

    dataDao.save(result,function(err){
        if(err){
            console.log('写入数据失败');
            return;
        }
    })

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(JSON.stringify(result));

}).listen(3000, () => {
    console.log('server start in port 3000');
}); 