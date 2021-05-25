import Popper from 'popper.js'
import React, { Component } from 'react'
import './popover.css'

export default class PopoerConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    toogle = () => {
        this.setState({
            show: !this.state.show
        }, () => {
            this.popperJS = new Popper(this.refs.reference, this.refs.popper, {
                placement: 'top',
                modifiers: {
                  computeStyle: {
                    gpuAcceleration: false
                  }
                }
              });
        })
    }
    componentWillUnmount() {
        this.popperJS.destroy()
    }
    render() {
        const {visible, content, text} = this.props; 
        console.log(visible, content)
        // const newChildren = React.cloneElement(children, {onClick: () => this.toogle()})
        // if(!visible) {
        //     return null;
        // } 
        return (
            <>
            <button ref="reference" onClick={this.toogle} className="popover-container">
                {text}
            </button>
            <div ref="popper" className="popover" style={{display: this.state.show ? 'block':'none'}}>{content}</div>
            </>
        )
    }
}
