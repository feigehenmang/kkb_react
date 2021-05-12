import React, { useContext } from 'react'
import { RouterContext } from './context'
import matchPath from './mathPath';

export default function Switch(props) {
    const {children} = props;
    const context = useContext(RouterContext);
    let element, match;
    console.log(children)
    React.Children.forEach(children, child => {
        if(match == null && React.isValidElement(child)) {
            match = child.props.path ? matchPath(context.location.pathname, child.props) : context.match;
            element = child
        }
    })
    return (
        match
            ? React.cloneElement(element, {computedMatch: match})
            : null
    )
}
