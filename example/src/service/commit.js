import axios from "axios";
const CancelToken = axios.CancelToken;
export const getCommits = (currentBranch = 'master') => {
    let cancel;
    const apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
    return axios.get(
        apiURL + currentBranch + '&_=' + new Date().getTime(), {
            cancelToken: new CancelToken(function executor(c) {
                cancel = c;
            })
        }
    )
}