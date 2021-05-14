import {call, put, takeEvery} from 'redux-saga/effects'
import { getCommits } from '../../service/commit'
import { GET_COMMIT, CHANGE_COMMIT } from '../const'

export function * handleUserSaga(action) {
    console.log(action)
    try {
        const result = yield call(getCommits, action.payload.branch);
        console.log(result);
        const isSucc = yield put({type: CHANGE_COMMIT, payload: {currBranch: action.payload.branch, branchInfo: result.data}})
        console.log(isSucc)
    } catch (error) {
        
    }
}


export function * userSaga() {
    const result =  yield takeEvery(GET_COMMIT, handleUserSaga)
    console.log('UserSaga', result)
}