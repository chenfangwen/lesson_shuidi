module.exports = {
    title: "吾心系依博客",
    description: "我的博客",
    head: [
        ['link', { rel: 'icon', href: '/home.jpg' }]
    ],
    themeConfig: {
        logo: '/home.jpg',
        nav: [
          { text: '学习笔记', link: '/note/' },
          { text: '输出文章', link: '/article/' },
          { text: 'Github', link: 'https://github.com/chenfangwen' },
          { text: '掘金', link: 'https://juejin.im/user/5dbe7908e51d455798342a8f' }
        ],
        sidebar: 
        // {
        //     "/note/": ['vue生命周期'],
        //     "/article/": ["","computed和watcher"]
        // }
        [
            ['/', '简介'],
            {
                title: "css",
                collapsable: true,
                children:[
                    ['/note/css/flex布局.md', 'flex布局'],
                    ['/note/css/居中.md', '居中']
                ]
            },
            {
                title: "vue",
                collapsable: true,
                children:[
                    ['/note/vue生命周期.md', 'vue生命周期']
                ]
            }
        ]
    }
}