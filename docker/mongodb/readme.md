- mongodb nosql 数据库
- docker 集装箱 一家公司的开发环境迅速上线的核武器
 
 终端命令
 1. docker --version
 2. docker pull daocloud.io/library/mongo:2.7.6  拉取镜像
 3. 查看镜像 docker images 
 4. docker run -p 27017:27017 --name mongo -d (imageid) 返回的是线程ID
            -p 端口        --name 运行容器的名字 


5. docker ps -a 查看正在运行的容器
6. docker exec -it mongo mongo  进入mongo操作
               -it 命令行的交互 第一个mongo镜像 二是交互的脚本，简版的Linux
7. show dbs
8. use tutorial;   
    db.users.insert({username:'chenfangwen'});
    show collections;  显示集合的文件
    db.users.find({});
    db.users.inser({username:'liuziyi'});
    db.users.count();
    db.users.find({username:'liuziyi'});

    db.users.find({
        _id:'ObjectId("...")
        });
    
    db.users.find({   //且条件
        $and:[
           { _id:'ObjectId("...")},
           {username:'liuziyi'}
        ]
        });
    db.users.find({   //或条件
        $or:[
           { _id:'ObjectId("...")},
           {username:'liuziyi'}
        ]
        });
    db.users.update(   //覆盖更新
        {"username":"liuziyi"}, //被替换
        {"country":"canada"}
    )
    db.users.find().pretty();
    db.users.update(   //追加更新
        {"country":"canada"},
        {
            $set:
                {username:"liuziyi"}
        }
    )
    db.users.update(   
        {"country":"canada"},
        {
            $unset:
                {country:1}
        }
    )
    for (i = 0; i < 2000; i++){
        db.numbers.save({num:i});
    }
    db.numders.find({num:500});
    db.numders.find({
        num:{
        "$gt":19995
        }});
    db.numders.find({
        num:{
        "$gt":1995
        }}).explain("executionStats");   查看运行状态
    db.numbers.creatrIndex({num:1});  升序索引
    db.numbers.getIndexes();
    exit 退出与mongo容器的交互
    
    docker exec -it mongo mongo
    db.users.update({username:'liuziyi'},
    {
        $set:
        {favorites:{cities:["chicago","cheyenne"],movies:["xiaoshengkedejiushi","",""]}}
    })
    db.users.find({"favorites.movies":""})