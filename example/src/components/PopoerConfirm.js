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
    }
    
    componentDidUpdate() {
        this.popperJS = new Popper(this.refs.reference, this.refs.popper, {
            placement: 'top',
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              }
            }
          });
    }
    
    componentWillUnmount() {
        // this.popperJS.destroy()
    }
    render() {
        const {visible, content, text, toogle, hide} = this.props; 
        // console.log(visible, content)
        // const newChildren = React.cloneElement(children, {onClick: () => this.toogle()})
        // if(!visible) {
        //     return null;
        // } 
        return (
            <ClickOutSide clickOutSideFn={hide}>
                <button ref="reference" onClick={toogle} className="popover-container">
                    {text}
                </button>
                <div ref="popper" className="popover" style={{display: visible ? 'block':'none'}}>{content}</div>
            </ClickOutSide>
            
        )
    }
}
