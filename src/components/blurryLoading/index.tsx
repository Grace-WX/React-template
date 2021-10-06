import React, { memo, useState, useEffect } from 'react';
import './index.css';

export default memo(function BlurryLoading() {
    const [load, setLoad] = useState<number>(0);

    const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (load > 99) {
                clearInterval(timer)
            } else {
                setLoad(load => load + 1)
            }
        }, 30)
    }, [load])


    const loadingOpacticy = scale(load, 0, 100, 1, 0);
    const blurryFilter = scale(load, 0, 100, 30, 0);

    return (
        <div className="blurryLoading">
            <div className="blurryBg" style={{ filter: `blur(${blurryFilter}px)` }}></div>
            <div className="loading" style={{ opacity: `${loadingOpacticy}` }}>
                {load}%
            </div>
        </div>
    )
})
