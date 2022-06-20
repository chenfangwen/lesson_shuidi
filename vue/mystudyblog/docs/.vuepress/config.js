module.exports = {
    title: "吾心系依博客",
    description: "我的博客",
    head: [
        ['link', { rel: 'icon', href: '/home.jpg' }]
    ],
    themeConfig: {
        logo: '/home.jpg',
        sidebarDepth: 2,
        nav: [
          { text: '学习笔记', link: '/note/' },
          { text: '输出文章', link: '/article/' },
          { text: 'Github', link: 'https://github.com/chenfangwen' },
          { text: '掘金', link: 'https://juejin.im/user/5dbe7908e51d455798342a8f' }
        ],
        sidebar: 
        {
            "/note/": [
                {
                    title: "css",
                    collapsable: true,
                    children:[
                        ['/note/css/flex布局.md', 'flex布局但是发送到发'],
                        ['/note/css/水平垂直居中.md', '水平垂直居中']
                    ]
                },
                {
                    title: "vue",
                    collapsable: true,
                    children:[
                        ['/note/vue/vue生命周期.md', 'vue生命周期'],
                        ['/note/vue/computed和watcher.md', 'computed和watcher']
                    ]
                },
                {
                    title: "浏览器相关",
                    collapsable: true,
                    children:[
                        ['/note/browser/浏览器缓存.md', '浏览器缓存'],
                        ['/note/browser/cookie和session.md', 'cookie和session']
                    ]
                },
                {
                    title: "js相关",
                    collapsable: true,
                    children:[
                        ['/note/js/js内存管理.md', 'js内存管理']
                    ]
                }
            ],
            "/article/": [
                {
                    title: "掘金",
                    collapsable: true,
                    children:[
                        ['computed.md', 'computed和watcher'],
                        ['/article/async await 的实现.md', 'async await 的实现']
                    ]
                },
            ]
        }
    }
}