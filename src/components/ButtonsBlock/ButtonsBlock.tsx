import s from './ButtonsBlocl.module.css';
import React, {Dispatch, SetStateAction} from 'react';



type ButtonsBlockType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
    maxValue: number
    startValue: number

}

export const ButtonsBlock = (props: ButtonsBlockType) => {
    const increment = () => props.setCount(props.count + 1)
    const zeroing = () => props.setCount(props.startValue)
    return (
        <div className={s.block}>
            <div className={s.cnt}>
                <div className={s.button}>
                    <button disabled={props.count === props.maxValue} onClick={increment}>inc</button>
                    <button onClick={zeroing}>reset</button>
                </div>
            </div>
        </div>
    );
};