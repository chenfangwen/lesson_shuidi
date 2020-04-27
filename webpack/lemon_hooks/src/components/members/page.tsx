import * as React from "react"
import { MemberEntity } from "../../model"
interface Props{
    members:MemberEntity[]
}
interface State{
    members:MemberEntity[]
}

export class MembersPage extends React.Component <Props,State> {
    constructor(props){
        super(props)
        this.state = {
            members:[]
        }
    }
    public render() {
        return (
            <div className="row">
                <h2>MemberPage</h2>
                <div>{this.props.members}</div>
            </div>
        )
    }
}