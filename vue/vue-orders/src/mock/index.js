import Mock from 'mockjs'

// const dataList = [];

const dataList = {
    'orders|100':[{
        "_id|+1": 1,     //自增
        "name": "@cname",
        "orderDate":"@datetime",
        "status|1": ['created', 'completed', 'canceled'],
        "shippingFee":"@float(0,8,0,2)",
        "total":"@float(8,100,0,2)"
    }]
}

Mock.mock('/api/orders','post',dataList)

export default Mock