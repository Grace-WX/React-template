import React, { memo, } from 'react';
import './index.css';

export interface ButtonShadowProps extends React.PropsWithChildren<object> {
    title?: string
    onClick?: () => void
}

export default memo(function ButtonShadow(props: ButtonShadowProps) {
    const { title = 'login', onClick } = props;

    return (
        <div className="shadow" onClick={() => onClick && onClick()}>
            <span className="title">{title}</span>
        </div>
    )
})
