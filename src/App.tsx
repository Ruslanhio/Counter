import React, {useState} from 'react';
import './App.css';
import {SetCounter} from './components/SetCounter/SetCounter';


export function App() {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    return (
        <div className="App">
            <SetCounter count={count} setCount={setCount} startValue={startValue} maxValue={maxValue} setStartValue={setStartValue} setMaxValue={setMaxValue}/>
        </div>
    );
}


