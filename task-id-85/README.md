# 网页抓取分析服务系列之一（基础分析）

[任务地址](http://ife.baidu.com/course/detail/id/85)

本项目依赖phantom node module

### 安装依赖
```
npm install
```

### 运行项目
需要node 7.x+
```
node --harmony task.js keyword
```
node 7.6以上可以省略--harmony

### 抓取结果
![抓取结果](http://oji7gwhr9.bkt.clouddn.com/WX20170224-165459@2x-2017224.png)
```
{
    "code": 1,
    "msg": "抓取成功",
    "word": "ife",
    "time": 1969,
    "dataList": [{
        "info": "IFE微信公众号:baidu_ifeIFE微博:Baidu前端技术学院 友情链接:百度EFE百度校园百度校园招聘 资源:IFE 2015IFE 2016 ©2017 Baidu 使用百度前必读 意见反馈 京ICP...",
        "link": "ife.baidu.com/ ",
        "pic": "",
        "title": "百度前端技术学院"
    }, {
        "info": "IFE 2017 (the international food & drink event) is the UK’s biggest and most important food & drink trade show. This ...",
        "link": "www.ife.co.uk/ ",
        "pic": "https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3684890696,1526515506&fm=85&s=5710F6AB460234EEC090C52203006053",
        "title": "IFE 2017 - Welcome to IFE"
    }, {
        "info": "2016年6月29日 - 但是,哪商业化了啊?一毛钱收入没有好不好,ife的官网托管到百度云上还是自己掏的腰包,而且做这事儿跟我和我的团队的KPI半毛钱关系都没有好不好! ...",
        "link": "www.zhihu.com/question... ",
        "pic": "",
        "title": "如何评价百度前端技术学院(IFE)2016春季班? - 前端开发 - 知乎"
    }, {
        "info": "问题描述: 在仪表盘上的[专业]答案:1)缩写词【IFE】全称是 【instantaneous fuel consumption】 2)汉语意思是 【瞬时油耗】 3)【瞬时油耗】解释 瞬时油耗表示车辆某一瞬间的油耗,其显示单位...更多关于ife的问题>>",
        "link": "zhidao.baidu.com/link?... ",
        "pic": "",
        "title": "汽车IFE是什么意思_百度知道"
    }, {
        "info": "爱词霸权威在线词典,为您提供IFE的中文意思,IFE的用法讲解,IFE的读音,IFE的同义词,IFE的反义词,IFE的例句等英语服务。",
        "link": "www.iciba.com/IFE ",
        "pic": "",
        "title": "IFE是什么意思_IFE的翻译_音标_读音_用法_例句_爱词霸在线词典"
    }, {
        "info": "凤凰网是中国领先的综合门户网站,提供含文图音视频的全方位综合新闻资讯、深度访谈、观点评论、财经产品、互动应用、分享社区等服务,同时与凤凰无线、凤凰宽频形成三...",
        "link": "www.ifeng.com/ ",
        "pic": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3546704152,2047315268&fm=58&s=7590E932CEA14C8016F1F5DE030070B1",
        "title": "凤凰网"
    }]
}
```