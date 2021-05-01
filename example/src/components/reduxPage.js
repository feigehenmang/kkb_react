import React from 'react';
import store from '../redux/'
export default class ReduxPage extends React.Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate();
        })
    }
    add = () => {
        // console.log(store)
        store.dispatch({
            type: 'ADD'
        })
    }
    syncAdd = () => {
        store.dispatch((dispatch) => {
            setTimeout(() => {
                dispatch({type: 'ADD'})
            }, 1000)
        })
    }
    promiseAdd = () => {
        store.dispatch(Promise.resolve({type: 'ADD'}))
    }
    render() {
        return (<div>
            <h1>ReduxPage</h1>
            <p>{store.getState().count}</p>
            <button onClick={this.add}>add</button>
            <button onClick={this.syncAdd}>syncAdd</button>
            <button onClick={this.promiseAdd}>promiseAdd</button>
        </div>)
    }
}
