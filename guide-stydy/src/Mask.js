import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {getMaskStyle} from './utils'
export default function Mask({className, selectElement, realWindow}) {
    const [style, setStyle] = useState({});
    useEffect(() => {
        const style = getMaskStyle(selectElement.current);
        setStyle(style);
      }, [selectElement]);
    return (ReactDOM.createPortal(<div className={`guide-mask ${className}`} style={style}></div>, document.body));
}