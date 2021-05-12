import React, { useContext } from 'react'
import { RouterContext } from './context';
import matchPath from './mathPath';

export default function Prompt({when, message}) {
    const context = useContext(RouterContext)
    const match = matchPath(context.history.location)
    const method = (self) => {
        context.history.block(self.props.message);
    }
    return (
        (when) ? <LifeCycle unMount={method} message={message} /> : null
    )
}
class LifeCycle extends React.Component {
    componentWillUnmount() {
        console.log('will')
        if(this.props.unMount) {
            this.props.unMount.call(this, this);
        }
    }
    render() { 
        return null;
    }
}