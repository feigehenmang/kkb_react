import Popper from 'popper.js'
import React, { Component } from 'react'
import ClickOutSide from '../utils/clickOutSide'
import './popover.css'

export default class PopoerConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.reference = React.createRef();
        this.popper = React.createRef();
    }
    
    componentDidUpdate() {
        this.popperJS = new Popper(this.reference.current, this.popper.current, {
            placement: 'top-end',
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              }
            }
          });
    }
    
    componentWillUnmount() {
        this.popperJS.destroy()
    }
    render() {
        const {visible, content, children, hide} = this.props;
        const newChildren = React.cloneElement(children, { ref: this.reference, className: 'popover-container'})
        return (
            <ClickOutSide clickOutSideFn={hide}>
                {newChildren}
                <div ref={this.popper} className="popover" style={{display: visible ? 'block':'none'}}>{content}</div>
            </ClickOutSide>
            
        )
    }
}
