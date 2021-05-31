import React, { useState } from 'react'
import PopoerConfirm from './PopoerConfirm'

export default function Delete() {
    const [visible, setVisible] = useState(false)
    return (
        <PopoerConfirm 
            hide={() => setVisible(false)} 
            visible={visible} 
            content={(
                <div>
                    <p>这是一段内容这是一段内容确定删除吗？</p>
                    <div style={{textAlign: 'right', margin: 0}}>
                        <button onClick={() => setVisible(false)}>取消</button>
                        <button onClick={() => setVisible(true)}>确定</button>
                    </div>
                    <div className="arrow"></div>
                </div>
            )}
        >
            <button onClick={() => setVisible(true)}>删除</button>
        </PopoerConfirm>
    )
}
