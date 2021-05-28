import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class PortalChild extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        document.body.appendChild(this.el);
    }
    click = () => {
        console.log('di~~~~')
    }
    render() {
        return ReactDOM.createPortal(<div onClick={this.click}>Portal</div>, this.el);
    }
}
