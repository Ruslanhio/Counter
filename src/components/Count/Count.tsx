import React from 'react';
import s from './Count.module.css'

type CountType = {
    count: number
    maxValue: number
}
const Count = (props: CountType) => {
    const numberClassname = props.count < 0 && props.count >= props.maxValue ? s.error : s.number
    const arrayClassName = [ props.count === props.maxValue ? `${s.number} ${s.active}`
            : s.number, numberClassname]
    return (
        <div className= {arrayClassName.join(' ')}
                        /* ? props.count < 0 && props.count >= props.maxValue
                         : s.error}*/>
            {props.count}
        </div>
    );
};

export default Count;