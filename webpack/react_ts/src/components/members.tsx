import * as React from 'react'
import {MemberHeader} from './memberHeader'
import {MemberRow} from './memberRow'
import {memberAPI} from '../api/member'
import {MemberEntity} from '../model'
console.log(MemberRow,'----')
interface Props {}
interface State {
    members:MemberEntity[]
}
export class MembersPage extends React.Component<Props,State> {
    constructor(props) {
        super(props)    //父类的构造函数执行一下
        this.state = {
            members: []
        }
    }
    public componentDidMount(){
        memberAPI.fetchMembers().then( members => {
            // console.log(members)
            this.setState({
                members
            })
        })
    }
    public render() {   //必须实现的接口
        return(
            <div className="row">
                {/* asdfas */}
                <table className="table">
                    <thead>
                        <MemberHeader />
                    </thead>
                    <tbody>
                        {
                            this.state.members.map((member)=>{
                                return (
                                    <MemberRow key={member.id} member={member} />
                                )
                              })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}