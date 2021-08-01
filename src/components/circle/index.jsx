import React, { memo, useRef, useState, useEffect } from 'react';
import './index.css';

// react组件必须大写
// 环形上传动画，可用作上传axios请求的进度展示
export default memo(function Index() {

    const [num, setNum] = useState(0);
    const [leftDeg, setLeftDeg] = useState(180);
    const [rightDeg, setRightDeg] = useState(0);

    //loader,total可以作为外部参数
    let loader = 0;
    const total = 1500;

    useEffect(() => {
        const timer = setInterval(() => {
            let currentNum = Number((loader / total) * 100).toFixed(1);
            let currentDeg = Number((loader / total) * 360).toFixed(0);
            if (currentNum > 100) {
                clearInterval(timer)
            } else {
                loader++
                setNum(currentNum)
                if (currentDeg > 180) {
                    setLeftDeg(currentDeg)
                } else {
                    setRightDeg(-(180 - currentDeg))
                }
            }
        }, 1);
    }, [loader])



    return (
        <div className="circle">
            <div className="left">
                <div className="left-circle" style={{ transform: `rotate(${leftDeg}deg)` }}></div>
            </div>
            <div className="right">
                <div className="right-circle" style={{ transform: `rotate(${rightDeg}deg)` }}></div>
            </div>
            <div className="inner" >{num}%</div>
        </div>
    )
})
