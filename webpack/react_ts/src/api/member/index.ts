import {members} from './mockData'
import {MemberEntity} from '../../model'
const fetchMembers = ():Promise<MemberEntity[]> => {
    return new Promise((reslove) => {
        reslove(members)
    })
}
export const memberAPI = {
    fetchMembers
}