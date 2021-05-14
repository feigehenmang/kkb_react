import { CHANGE_COMMIT } from "./const";

const defauleState = {
    branchs: ['master', 'dev'],
    currBranch: '',
    branchInfo: []
}
export function commitReducer(state=defauleState, action) {
    // console.log(action)
    switch(action.type) {
        case CHANGE_COMMIT:
            return {...state, ...action.payload}
        default:
            return state;
    }
}