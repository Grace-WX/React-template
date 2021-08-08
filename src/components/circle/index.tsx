import React, { memo, useRef, useState, useEffect } from 'react';
import './index.css';

// react组件必须大写
// 环形上传动画，可用作上传axios请求的进度展示
export default memo(function Index() {

    const [num, setNum] = useState<number>(0);
    const [leftDeg, setLeftDeg] = useState<number>(180);
    const [rightDeg, setRightDeg] = useState<number>(0);

    let loader = 0;
    const total: number = 1500;

    useEffect(() => {
        const timer = setInterval(() => {
            // toFixed（）返回的是个字符串，如果需要转成number使用我们可以使用+运算符的类型转换规则（不能转undefined，对象），所以更优解是采用位取反运算符~~。
            // ~~{}=0，显然我们也可以用~~判断空对象了，来替代Object.keys({}).length===0
            let currentNum: number = +((loader / total) * 10).toFixed(1);
            let currentDeg: number = +((loader / total) * 360).toFixed(0);
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
