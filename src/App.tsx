import React, {useEffect, useState} from 'react';
import './App.css';
import {SetCounter} from './components/SetCounter/SetCounter';


export function App() {
    const [count, setCount] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    useEffect(() => {
        if (localStorage.getItem('counterStartValue')) {

            setCount(Number(localStorage.getItem('counterStartValue')))
        }
    })

    return (
        <div className="App">
            <SetCounter
                count={count}
                setCount={setCount}
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
            />
        </div>
    );
}


