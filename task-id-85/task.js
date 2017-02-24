const phantom = require('phantom');

if (process.argv.length !== 3) {
    console.error('Usage:node task.js keyword');
    return;
}

let keyword = process.argv[2];
let url = `https://www.baidu.com/s?wd=${keyword}`;

(async () => {
    try {
        const instance = await phantom.create();
        const page = await instance.createPage();
        let time = Date.now();

        const status = await page.open(url);
        if (status !== 'success') throw Error({ message: '页面获取失败' });

        const dataList = await page.evaluate(function () {
            return $('.result.c-container').map(function () {
                return ({
                    title: $(this).find('.t').text() || '',
                    link: $(this).find('.c-showurl').text() || '',
                    info: $(this).find('.c-abstract').text() || '',
                    pic: $(this).find('.general_image_pic img').attr('src') || ''
                });
            }).toArray();
        })

        const result = {
            code: 1,
            msg: '抓取成功',
            word: keyword,
            time: Date.now() - time,
            dataList: dataList
        }

        console.log(JSON.stringify(result));
        await instance.exit();

    } catch (error) {
        console.error(JSON.stringify({ code: 0, msg: '抓取失败', error: error.message }));
    }
})();