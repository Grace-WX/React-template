import React, { memo, } from 'react';
import './index.css';


export default memo(function Index(props: any) {
    const { active, onTabClick, children } = props;
    const style = {
        color: active ? 'red' : 'green',
        cursor: 'pointer'
    }


    return (
        <div style={style} onClick={onTabClick} >
            {children}
        </div>
    )
})
