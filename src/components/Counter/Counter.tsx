import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import s from './Counter.module.css'
import {ButtonsBlock} from '../ButtonsBlock/ButtonsBlock';
import Count from '../Count/Count';
import {SetCounter} from '../SetCounter/SetCounter';


export type CounterProps = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
    maxValue: number
    startValue: number

}

export type StorageType = {
    START_VALUE: number
    MAX_VALUE: number
    STEP: number
}

export const Counter = (props: CounterProps) => {
/*    const [storage, setStorage] = useState<StorageType>({
        START_VALUE: 0,
        MAX_VALUE: 5,
        STEP: 1
    })*/


   /* useEffect(() => {
        let local_storage = localStorage.getItem('counterSettings')
        if (local_storage) {
            let storage_get = JSON.parse(local_storage)
            setStorage(storage_get)
            props.setCount(storage_get.START_VALUE)
        }
    })*/

   /* useEffect(() => {
        localStorage.setItem('storage', JSON.stringify(storage))
    }, [storage])*/

    useEffect(()=>{
        localStorage.setItem('cont', JSON.stringify(props.count))
    }, [props.count])
    /*const onClickIncHandler = () =>
        setCount(count + 1)
         // count = counter + 1
         const onClickResHandler = () =>
             setCount(0)*/


    return (
        <div className={s.container}>
            <div className={s.border}>
                    <Count count={props.count} maxValue={props.maxValue}/>
                    <ButtonsBlock count={props.count} maxValue={props.maxValue} setCount={props.setCount}
                                  startValue={props.startValue}/>
            </div>
        </div>


    );
}


