import React, { memo, useState } from 'react';
import './index.css';

export interface TabProps extends React.PropsWithChildren<object> {
    /**
     * change事件
     */
    onChange?: (index: number) => void
}

export default memo(function Index(props: TabProps) {

    const [activeIndex, setActiveIndex] = useState(0);

    function tabsChange(index: number) {
        setActiveIndex(index)
        props.onChange && props.onChange(index)
    };

    const newChildren = React.Children.map(props.children, (child: any, index) => {
        if (child.type) {
            return React.cloneElement(child, {
                active: activeIndex === index,
                onTabClick: () => tabsChange(index)
            })
        } else {
            return child
        }
    })


    return (
        <div>
            {newChildren}
        </div>
    )
})
