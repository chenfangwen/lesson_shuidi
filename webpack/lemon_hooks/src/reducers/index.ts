import {combineReducers} from 'redux'
import {memberReducer} from './members'
import { MemberEntity } from '../model'

export interface State {
    members: MemberEntity[]
}
export const state = combineReducers({
    members: memberReducer
})