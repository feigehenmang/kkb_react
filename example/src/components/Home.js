import React, { Component } from 'react'
// import Lazy from './Lazy';
import PopoerConfirm from './PopoerConfirm';
// import Popover from './Popover';
// import { Ref } from './Ref';
// import SubMenu from './SubMenu';
import './home.css'
import { RootContext } from '../context';
import TransferRef from './TransferRef';
import PortalChild from './PortalChild';
import Effect from './effect';
import Square from './Square';
import Radom from './Radom';
export default class Home extends Component {
    static contextType = RootContext;
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.ref = React.createRef()
    }
    onDismiss = bol => {
        this.setState({visible: bol})
    }
    componentDidMount() {
        console.log(this.ref);
    }
    render() {
        console.log('currContext', this.context)
        return (
            <div>
                {/* <Ref></Ref>
                <SubMenu></SubMenu>
                <Lazy/> */}
                {/* <Square></Square> */}
                <Radom></Radom>
                <Effect></Effect>
                <TransferRef ref={this.ref}></TransferRef>
                <div className="space"></div>
                <PortalChild />
                <PopoerConfirm hide={() => this.setState({visible: false})} visible={this.state.visible} content={(
                    <div>
                        <p>这是一段内容这是一段内容确定删除吗？</p>
                        <div style={{textAlign: 'right', margin: 0}}>
                            <button onClick={() => this.onDismiss(false)}>取消</button>
                            <button onClick={() => this.onDismiss(true)}>确定</button>
                        </div>
                        <div className="arrow"></div>
                    </div>
                )}><button onClick={() => this.onDismiss(true)}>删除</button>
                </PopoerConfirm>
            </div>
        )
    }
}
