import React, { memo } from 'react';
import Tab from '../../components/tab';
import TabItem from '../../components/tabItem';

const TabComponent = memo(function index(props) {

    return (
        <div>
            {/* Tab组件组合，无需状态控制 */}
            <Tab>
                <TabItem>第一</TabItem>
                <TabItem>第二</TabItem>
                <TabItem>第三</TabItem>
            </Tab>
        </div>
    )
})



export default TabComponent
