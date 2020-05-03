import React , {useState} from 'react';
import 'antd/dist/antd.css';
// import { Button } from 'antd'
import { Spin,Card,Input,Button,Icon } from 'antd'
import '../static/css/Login.css'

function Login(){
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const checkLogin = ()=>{
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    }

    return (
        <div className="login-div">
            <Spin tip="登录中..." spinning={isLoading}>
                <Card title="吾心系依博客系统" bordered={true} style={{ width: 400 }} >
                    <Input
                        id="userName"
                        size="large"
                        placeholder="请输入用户名"
                        prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    /> 
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="请输入密码"
                        prefix={<Icon type="key" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />     
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin} > 登录 </Button>
                </Card>
            </Spin>
        </div>
    )
    // return (
    //     <Button>sd</Button>
    // )
}

export default Login