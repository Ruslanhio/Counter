import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import {KeyboardEvent} from 'react';
import s from './SetCounter.module.css'
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;
import {Counter} from '../Counter/Counter';
import count from '../Count/Count';

export type ValuesPropsType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
    startValue: number
    maxValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>


}
export const SetCounter = (props: ValuesPropsType) => {
    const [error, setError] = useState<boolean | null>(null)


    /*  useEffect(()=> {
          props.setStartValue(props.storage.START_VALUE)
          props.setMaxValue(props.storage.MAX_VALUE)
      }, [props.storage])*/


    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(props.maxValue))
    }, [props.maxValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('CounterMAxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setMaxValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(props.startValue))
    }, [props.startValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterStartValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setStartValue(newValue)
        }
    }, [])
    /*   if (startValue >= maxValue || step < 1 || step > (maxValue - startValue)) {

       }*/


    const setNewValuesHandler = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(props.maxValue))
        let valueAsString1 = localStorage.getItem('counterMAxValue')
        if (valueAsString1) {
            let newValue1 = JSON.parse(valueAsString1)
            props.setMaxValue(newValue1)
        }
        localStorage.setItem('counterStartValue', JSON.stringify(props.startValue))
        let valueAsString2 = localStorage.getItem('counterStartValue')
        if (valueAsString2) {
            let newValue2 = JSON.parse(valueAsString2)
            props.setStartValue(newValue2)
        }
    }


    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.startValue < 0 && props.startValue >= props.maxValue) {
            setError(true)
        } else {
            props.setStartValue(Number(e.currentTarget.value))
        }
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.maxValue <= 0 && props.maxValue === props.startValue) {
            setError(true)
        } else {
            props.setMaxValue(Number(e.currentTarget.value))
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => error ? setError(null) : e.key === 'Enter' && onChangeStartHandler || onChangeMaxHandler


    /*
        const maxValueHandler = () => {

            if (props.maxValue < 0 && props.maxValue === props.startValue) {
                return 'incorrect value'
            } else {
                props.setMaxValue(props.maxValue + 1)
                localStorage.clear()
            }
        }*/


    /*  const startValueHandler = () => {
          if (props.startValue < 0 && props.startValue >= props.maxValue) {
              return 'incorrect value'
          } else {
              props.setStartValue(props.startValue + 1)
          }
      }
  */

    return (
        <div className={s.block}>
            <div>
                <h2>max value:</h2>
                <input type={'number'} value={props.maxValue} onChange={onChangeMaxHandler}/>
                <h2>start value:</h2>
                <input
                    type={'number'}
                    value={props.startValue}
                    onChange={onChangeStartHandler}
                    onKeyDown={onKeyPressHandler}
                />
                <button onClick={() => setNewValuesHandler()}>set</button>
            </div>

            <Counter count={props.count} setCount={props.setCount} maxValue={props.maxValue}
                     startValue={props.startValue}/>
        </div>
    );
};

