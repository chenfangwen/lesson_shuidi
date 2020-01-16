const db = wx.cloud.database(); //云数据库
const productsCollection = db.collection('products'); //表 collection
Page({
    addData() {
        productsCollection.add({
            data:
              // {
            //     price: Math.random() * 1000,
            //     tags: ["羽绒服", "国际品牌"],
            //     image: 'https://img.alicdn.com/bao/uploaded/i2/158748311/O1CN01V5og1x2BGUH68w9Gi_!!0-item_pic.jpg',
            //     detial:'品牌男装，舒适好看你值得拥有',
            //     kucun:100,
            //     sellcount:55
            // },
              {
                price: 158,
                tags: 'LMTNZD牛仔外套男士日系复古春秋水洗宽松韩版潮流修身',
                image: 'http://g-search3.alicdn.com/img/bao/uploaded/i4/i3/672500506/O1CN01SKfAiO1FbmzUUUT7S_!!672500506.jpg_360x360Q90.jpg_.webp',
                detial: '品牌男装，舒适好看你值得拥有',
                kucun: 1000,
                sellcount: 500
              },
              // {
              //   price: 134,
              //   tags:'INSstudios.19FW韩国ins潮流冬季复古羊羔毛加厚工装',
              //   image: 'http://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2086242818/O1CN01YRkssu1Wggg34fjji_!!2086242818.jpg_360x360Q90.jpg_.webp',
              //   detial: '品牌男装，舒适好看你值得拥有',
              //   kucun: 1000,
              //   sellcount: 400
              // },
              
              // {
              //   price:79,
              //   tags: 'INSstudios.19韩国自制高领工装秋冬夹棉冲锋',
              //   image: 'http://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2086242818/O1CN01ZEzVKB1WggglmnBe2_!!2086242818.jpg_360x360Q90.jpg_.webp',
              //   detial: '品牌男装，舒适好看你值得拥有',
              //   kucun: 300,
              //   sellcount: 400
              // }
           
        }).then(res => {
            console.log(res);
        })
    }
})