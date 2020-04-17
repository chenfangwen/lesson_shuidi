import {MemberEntity} from '../model'
import * as React from 'react'
interface Props {
    member:MemberEntity
}
interface State {
}
export class MemberRow extends React.Component<Props,State> {
    constructor(props) {
        // console.log(props,'-----')
        super(props)    //父类的构造函数执行一下
        this.state = {
        }
    }
    public render() {   //必须实现的接口
        console.log(this.props.member)
        return(
            <tr>
                <td>
                    <img src={this.props.member.avatar} alt=""/>
                </td>
                <td>{this.props.member.id}</td>
                <td>{this.props.member.login}</td>
            </tr>
        )
    }
}
