import React, { Component } from 'react'
import Lazy from './Lazy';
import PopoerConfirm from './PopoerConfirm';
import Popover from './Popover';
import { Ref } from './Ref';
import SubMenu from './SubMenu';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    onDismiss = bol => {
        this.setState({visible: bol})
    }
    render() {
        return (
            <div>
                {/* <Ref></Ref>
                <SubMenu></SubMenu>
                <Lazy/> */}


                <div className="space"></div>
                <PopoerConfirm visible={this.state.visible} text="删除" content={(
                    <div>
                    <p>这是一段内容这是一段内容确定删除吗？</p>
                    <div style={{textAlign: 'right', margin: 0}}>
                        <button onClick={() => this.onDismiss(false)}>取消</button>
                        <button onClick={() => this.onDismiss(true)}>确定</button>
                    </div>
                    </div>
                )}>
                </PopoerConfirm>
            </div>
        )
    }
}
