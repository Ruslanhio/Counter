import React, {Dispatch, SetStateAction} from 'react';
import s from './SetCounter.module.css'

import {Counter} from '../Counter/Counter';

export type ValuesPropsType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
    startValue: number
    maxValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
}
export const SetCounter = (props: ValuesPropsType) => {


  /*  useEffect(()=> {
        localStorage.setItem('counterMaxValue', JSON.stringify(props.maxValue))
    }, [props.maxValue])

    useEffect(()=> {
        let valueAsString = localStorage.getItem('CounterMAxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setMaxValue(newValue)
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('counterStartValue', JSON.stringify(props.startValue))
    }, [props.startValue])

    useEffect(()=> {
        let valueAsString = localStorage.getItem('CounterStartValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setStartValue(newValue)
        }
    }, [])*/


    const setNewValuesHandler = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(props.maxValue))
        let valueAsString1 = localStorage.getItem('CounterMAxValue')
        if (valueAsString1) {
            let newValue = JSON.parse(valueAsString1)
            props.setMaxValue(newValue)
        }
        localStorage.setItem('counterStartValue', JSON.stringify(props.startValue))
        let valueAsString2 = localStorage.getItem('CounterStartValue')
        if (valueAsString2) {
            let newValue = JSON.parse(valueAsString2)
            props.setStartValue(newValue)
        }
    }





    const maxValueHandler = () => {

        if (props.maxValue < 0 && props.maxValue === props.startValue) {
            return 'incorrect value'
        } else {
            props.setMaxValue(props.maxValue + 1)
            localStorage.clear()
        }
    }

    const startValueHandler = () => {
        if (props.startValue < 0 && props.startValue >= props.maxValue) {
            return 'incorrect value'
        } else {
            props.setStartValue(props.startValue + 1)
        }
    }


    return (
        <div className={s.block}>
            <h2>max value:</h2>
            <input   type="number"  onChange={maxValueHandler}/>
            <h2>start value:</h2>
            <input type="number"  onChange={startValueHandler}/>
            <button onClick={setNewValuesHandler}>set1</button>
            <Counter count={props.count} setCount={props.setCount} maxValue={props.maxValue} startValue={props.startValue}/>

        </div>
    );
};

