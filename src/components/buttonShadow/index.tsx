import React, { memo, } from 'react';
import './index.css';

export interface ButtonShadowProps extends React.PropsWithChildren<object> {
    title?: string
}

export default memo(function ButtonShadow(props: ButtonShadowProps) {
    const { title = 'login' } = props;

    return (
        <div className="shadow">
            <span className="title">{title}</span>
        </div>
    )
})
