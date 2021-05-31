import Popper from 'popper.js'
import React, { Component, useEffect, useLayoutEffect, useRef } from 'react'
import reactDom from 'react-dom';
import ClickOutSide from '../utils/clickOutSide'
import './popover.css'

// export default class PopoerConfirm extends Component {
//     constructor(props) {
//         super(props)
//         this.reference = React.createRef();
//         this.popper = React.createRef();
//     }
    
//     componentDidUpdate() {
//         this.popperJS = new Popper(this.reference.current, this.popper.current, {
//             placement: 'top-end',
//             modifiers: {
//               computeStyle: {
//                 gpuAcceleration: false
//               }
//             }
//           });
//     }
    
//     componentWillUnmount() {
//         this.popperJS.destroy()
//     }
//     render() {
//         const {visible, content, children, hide} = this.props;
//         const newChildren = React.cloneElement(children, { ref: this.reference, className: 'popover-container'})
//         return (
//             <ClickOutSide clickOutSideFn={hide}>
//                 {newChildren}
//                 <div ref={this.popper} className="popover" style={{display: visible ? 'block':'none'}}>{content}</div>
//             </ClickOutSide>
            
//         )
//     }
// }

export default function PopoerConfirm({children, hide, visible, content}) {
    const popper = useRef();
    const reference = useRef();
    const popperJs = useRef();
    const node = useRef();
    const newChildren = React.cloneElement(children, { ref: (el) => {
        reference.current = el;
    }, className: 'popover-container'})
    if(!node.current) {
        node.current = document.createElement('div');
        document.body.appendChild(node.current);
    }
    useLayoutEffect(() => {
        popperJs.current = new Popper(reference.current, popper.current, {
            placement: 'top-end',
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              }
            }
        });
        return () => {
            popperJs.current.destroy();
        }
    })
    return (
        <ClickOutSide clickOutSideFn={hide}>
            {newChildren}
            {reactDom.createPortal(<div ref={popper} className="popover" style={{display: visible ? 'block':'none'}}>{content}</div>, node.current)}
        </ClickOutSide>
    )
}