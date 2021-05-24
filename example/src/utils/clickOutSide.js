import React, { Component } from 'react'
/**
 * isContainer target中是否含有currTarget
 * DOM 判定方法
 */
export const isContainer = (target, currTarget) => {
    return target.contains(currTarget)
}



export default class ClickOutSide extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
    }
    componentDidMount() {
        document.body.addEventListener('click', this.handle, true);
    }
    handle = (event) => {
        if(this.container.current && !isContainer(this.container.current, event.target)) {
            this.props.clickOutSideFn();
        }
    }
    render() {
        const {clickOutSideFn, children, ...props} = this.props;
        return (
            <div ref={this.container} {...props}>
                {children}
            </div>
        )
    }
}
