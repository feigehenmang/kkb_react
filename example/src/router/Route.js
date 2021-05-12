import React, { Component } from 'react'
import matchPath from './mathPath';
import { RouterContext } from './context';

export default class Route extends Component {
    
    render() {
        const {path, component, computedMatch} = this.props;
        
        return (
            <RouterContext.Consumer>
                {value => {
                    
                    let {history, location, match} = value;
                    match = matchPath(location.pathname, this.props);
                    console.log(match, computedMatch);
                    const props = {
                        ...value,
                        match,
                      };
                    if(match) {
                        if(component) {
                            return <RouterContext.Provider value={{...props}}>{React.createElement(this.props.component, props)}</RouterContext.Provider>
                        }else {
                            return null;
                        }
                    } else {
                        return null;
                    }
                }}
            </RouterContext.Consumer>
        )
    }
}
