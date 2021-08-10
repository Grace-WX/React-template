import React, { memo } from 'react';
import './index.css';
import Circle from '../../components/circle';
import BlurryLoading from '../../components/blurryLoading';

const animation = memo(function Index(props) {
    return (
        <div>
            {/* <Circle /> */}
            <BlurryLoading />
        </div>
    )
})



export default animation
