import React, { memo, useRef, useState, useEffect } from 'react';
import './index.css';

const Login = memo(function Index(props) {

    const ref = useRef(null);
    const [bgMove, setBgMove] = useState({ bgX: 0, bgY: 0 });
    const [boxMove, setBoxMove] = useState({ boxX: 0, boxY: 0 });

    const bGMouseMove = (event: any) => {
        console.log('bGMouseMove', event)
        setBgMove({
            bgX: 300 + (-event.pageX - 960) / 10,
            bgY: 100 + (-event.pageY - 540) / 10
        })
        setBoxMove({
            boxX: 480 + (-event.pageX - 480) / 5,
            boxY: 170 + (-event.pageY - 270) / 5
        })
    }


    return (
        <div className="pages">
            <div className="bg" onMouseMove={(e) => bGMouseMove(e)} style={{ left: `${bgMove.bgX}px`, top: `${bgMove.bgY}px` }}></div>
            <div className="box" onMouseMove={(e) => bGMouseMove(e)} style={{ left: `${boxMove.boxX}px`, top: `${boxMove.boxY}px` }} >
                <div style={{
                    width: '300px',
                    height: '100px',
                    left: '400px',
                    top: '30px'
                }}></div>
                <div style={{
                    width: '130px',
                    height: '130px',
                    left: '710px',
                    top: '0px'
                }}></div>
                <div style={{
                    width: '130px',
                    height: '130px',
                    left: '710px',
                    top: '0px'
                }}></div>
                <div style={{
                    width: '550px',
                    height: '300px',
                    left: '400px',
                    top: '140px'
                }}></div>
                <div style={{
                    width: '300px',
                    height: '150px',
                    left: '90px',
                    top: '140px'
                }}></div>
                <div style={{
                    width: '140px',
                    height: '140px',
                    left: '250px',
                    top: '300px'
                }}></div>
                <div style={{
                    width: '350px',
                    height: '200px',
                    left: '960px',
                    top: '240px'
                }}></div>
                <div style={{
                    width: '300px',
                    height: '150px',
                    left: '290px',
                    top: '450px'
                }}></div>
                <div style={{
                    width: '300px',
                    height: '150px',
                    left: '600px',
                    top: '450px'
                }}></div>
                <div style={{
                    width: '300px',
                    height: '150px',
                    left: '910px',
                    top: '450px'
                }}></div>
                <div style={{
                    width: '130px',
                    height: '130px',
                    left: '910px',
                    top: '610px'
                }}></div>
            </div>
        </div>
    )
})



export default Login


