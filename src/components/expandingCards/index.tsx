import React, { memo, useState } from 'react';
import './index.css';
import Banner1 from './images/1.jpg';
import Banner2 from './images/2.jpg';
import Banner3 from './images/3.jpg';
import Banner4 from './images/4.jpg';
import Banner5 from './images/5.jpg';

export default memo(function Index() {

    const [selectIndex, setSelectIndex] = useState<number>(0);

    const data = [
        {
            imageUrl: Banner1,
            title: 'Explore The World'
        },
        {
            imageUrl: Banner2,
            title: 'Wild Forest'
        },
        {
            imageUrl: Banner3,
            title: 'Sunny Beach'
        },
        {
            imageUrl: Banner4,
            title: 'City on Winter'
        },
        {
            imageUrl: Banner5,
            title: 'Mountains - Clouds'
        },
    ]

    const onchange = (index: number) => {
        setSelectIndex(index)
    }

    // 对象转字符串使用JSON.stringify();JSON字符串转对象使用JSON.parse()

    return (
        <div className="expandingCards">
            <div className="container">
                {
                    data.map((item, index) => {
                        return (
                            // 动态添加className:
                            // {['classNameA classNameB', index===selectIndex ? classNameC : null ].join(' ')}
                            // es6使用模板字符串
                            // {`classNameA ${index===selectIndex ? classNameC : null}`}
                            <div
                                className={["panel", index === selectIndex ? 'active' : null].join(' ')}
                                key={item.title}
                                style={{ backgroundImage: `url(${item.imageUrl})` }}
                                onClick={() => onchange(index)}
                            >
                                <h3>{item.title}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
})
