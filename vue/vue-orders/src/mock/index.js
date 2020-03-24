// import Mock from 'mockjs'
// const Random = Mock.Random  

// const total = 100;
// const dataList = [];

// for (let i = 0; i < total; i++) {
//   const template = {
//     "_id": i + 1,
//     "name": Random.name(),
//     "orderDate": Random.date(),
//     "status": Random.integer(-1, 1),
//     "shippingFee": Random.float(0, 8, 0, 2),
//     "total": Random.float(10, 100, 0, 2)
//   }
//   dataList.push(template)
// }

// // const dataList = []; //列表数据
// // mock 跟后端一样  url, 返回的结果
// // const dataList = {
// //   'orders|100':[{
// //     "_id|+1": 1, // id 自增
// //     "name": "@name",
// //     "orderDate":"@datetime",
// //     "status":"created", // 在三种状态里随机
// //     "shippingFee": "@float(0,8,0,2)",
// //     "total": "@float(8, 100, 0, 2)"
// //   }]
// // }
// // // url  ==   node api url
// // Mock.mock('/api/orders', 'post', dataList)

// // Mock 分页

// Mock.mock('/api/orders', 'post', (params) => {
//   // console.log(params, '-----------')
//   const info = JSON.parse(params.body)
//   console.log(info)
//   let {page = 1, limit= 20} = info.params
//   console.log(page, limit);

//   return { 
//     total,
//     result: dataList.slice((page -1) * limit, page*limit)
//   }
// })

// // Mock.mock(new RegExp('/api/orders'), 'get', (config) => {
// //   // console.log(config, '-----------')
// //   console.log()
// //   let {page = 1, limit= 20} = param2Obj(config.url)
// //   console.log(page, limit);

// //   return { 
// //     total,
// //     result: dataList.slice((page -1) * limit, page*limit)
// //   }
// // })
// // 假数据生产  

// export default Mock;


// 模块化
import Mock from 'mockjs'
import { param2Obj } from '@/utils'
const list = [];
const count = 100


const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0;  i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'), // 返回时间搓 133333
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecate: '@float(0, 100, 2, 2)',
    importance: '@integer(1,3)',
    'type|1':['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',  // 阅读量
    image_uri,
    platforms: ['a-platform']
  }))
}
// GET 
// new RegExp("\d+")   /\d+/
Mock.mock(new RegExp('/vue-element-admin/article/list'), 'get', (config) => {
  console.log(config);
  // list 根据params 分页
  const { page = 1, limit = 20, title } = param2Obj(config.url)
  // console.log(page, limit);
  // title , 重要性 ， 时间， 状态查询
  let mockList = list.filter(item => {
    // 条件一个个加，
    if (title && item.title.indexOf(title) < 0) return false;
    // .......
    return true;
  });

  const pageList =  mockList.filter((item, index) => 
  index < limit *page && index >= limit *(page-1));//某页数据 
  return {
    list:pageList, 
    total: mockList.lengths
  }
})

export default Mock