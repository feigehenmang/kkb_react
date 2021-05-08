import { Component } from "react";
import { connect } from '../kredux/react-redux';
// import { connect } from 'react-redux';
class ReactReduxPage extends Component {
    constructor() {
        super();
    }
    
    render() {
        console.log(this.props);
        const {dispatch, count, add, inc, another} = this.props;
        return (
            <div>
                ReactReduxPage
                <h1>{count}</h1>
                <button onClick={() => dispatch({type: 'ANOTHER', count: 100})}>Click</button>
                <button onClick={() => add()}>add</button>
                <button onClick={() => inc()}>inc</button>
                <button onClick={() => another( 30)}>another</button>
            </div>
        )
    }
}
export default connect((state)=>({count: state.count}), 
    // (dispatch) => ({
    //     add: () => dispatch({type: 'ADD'}),
    //     inc: () => dispatch({type: 'INC'}),
    //     another: (count) => dispatch({type: "ANOTHER", count: count}),
    //     dispatch: (...args) => dispatch(...args)
    // })
    {
        add: () => ({type: 'ADD'}),
        inc: () => ({type: 'INC'}),
        another: (count) => ({type: 'ANOTHER', count})
    }
)(ReactReduxPage)