import React, { memo } from 'react';
import ExpandingCards from '../../components/expandingCards';

const homePage = memo(function index(props) {
    return (
        <div>
            <ExpandingCards />
        </div>
    )
})



export default homePage
