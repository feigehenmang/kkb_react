import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { GET_COMMIT } from '../redux/const';

export default connect(state => state.commit, {
    getBranchInfo(branch) {
        return {
            type: GET_COMMIT,
            payload: {branch}
        }
    }
})(function Commit(props) {
    const {branchs, currBranch, branchInfo, getBranchInfo} = props;
    const dispatch = useDispatch();
    const fn = branch => dispatch({type: GET_COMMIT, payload: {branch}})
    return (
        <div>
            <h1>{currBranch}</h1>
            {branchs.map(branch => <h2 key={branch} onClick={() => fn(branch)}>{branch}</h2>)}
            {branchInfo.map(branch=><div key={branch.url}>{JSON.stringify(branch)}</div>)}
        </div>
    )
})
