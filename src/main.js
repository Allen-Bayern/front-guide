// add jQuery to my code


// 先写API
const render = (obj, whichAdd) => {
    // obj : information of sites
    const $li = $(`
    <li><a href=${obj.url}>${obj.site}</a></li>
    `).insertBefore(whichAdd);
};


// 添加网站时按键
const $addTools = $('.addTools');

// 前端框架网站
const myData = JSON.parse(`[
    {
        "site": "Vue",
        "url": "https://vuejs.org/"
    },
    {
        "site": "React",
        "url": "https://reactjs.org/"
    }
]`);

myData.forEach(obj => render(obj, $addTools));
// console.log(myData)


$addTools.on('click', () => {
    let site = window.prompt('请输入网站名称：');
    let url = window.prompt('请输入网址：');

    let obj = {
        'site' : site,
        'url' : url
    };

    render(obj, $addTools);

    // console.log(obj)
});


// 添加大牛的按钮
const $addKOL = $('.addKOL');

// 大牛的信息
const kols = JSON.parse(`
    [
        {
            "site" : "尤雨溪",
            "url" : "https://evanyou.me/"
        },
        {
            "site" : "阮一峰",
            "url" : "https://www.ruanyifeng.com/blog/"
        },
        {
            "site" : "方应杭",
            "url" : "https://fangyinghang.com/"
        },
        {
            "site" : "月饼",
            "url" : "https://juejin.cn/user/483440848286439"
        }
    ]
`);

kols.forEach(obj => render(obj, $addKOL));

$addKOL.on('click', () => {
    let site = window.prompt('请输入您想要添加的大牛名称：');
    let url = window.prompt('请输入他的网址：');

    let obj = {
        'site' : site,
        'url' : url
    };

    render(obj, $addKOL);

    // console.log(obj)
});