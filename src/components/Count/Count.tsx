import React from 'react';
import s from './Count.module.css'
type CountType = {
    count: number
}
const Count = (props: CountType) => {
    return (
        <div className={props.count > 0 ?`${s.number} ${s.active}` : s.number}>
            <h1>{props.count}</h1>
        </div>
    );
};

export default Count;