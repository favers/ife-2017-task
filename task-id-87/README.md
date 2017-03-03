# 网页抓取分析服务系列之三（服务封装）

[任务地址](http://ife.baidu.com/course/detail/id/87)

本项目依赖phantom node module

### 安装依赖
```
npm install
```

### 运行项目
需要node 7.x+ 需要启动mongodb
```
node --harmony server.js
```
node 7.6以上可以省略--harmony

### 数据展示
启动服务后打开`http://localhost:3000/?keyword=ife&deviceName=iPhone6`
![返回数据](http://oji7gwhr9.bkt.clouddn.com/WechatIMG2-201733.jpeg)

mongodb中数据
![mongodb中数据](http://oji7gwhr9.bkt.clouddn.com/WechatIMG1-201733.jpeg)