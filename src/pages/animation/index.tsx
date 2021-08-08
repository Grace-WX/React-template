import React, { memo } from 'react';
import './index.css';
import Circle from '../../components/circle';

const animation = memo(function index(props) {
    return (
        <div>
            <Circle />
        </div>
    )
})



export default animation
