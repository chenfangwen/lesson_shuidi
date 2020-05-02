
import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://avatars0.githubusercontent.com/u/56785357?s=400&u=2925e16a3dbe54ae463e25351676aecd7124b006&v=4"  /></div>
            <div className="author-introduction">
                博主是一名前端小学生，正在努力学习中，只求更进步，爱交流，这些文章是我学习的一些总结，希望对大家有用
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )

}

export default Author