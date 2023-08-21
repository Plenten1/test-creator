import { type } from 'os';
import React from 'react';
import css from './Input.module.scss';

interface IProps{
    value?: string
    type?: number | string
    onChange?: (value: string) => void;
    width?: string;
}

const Input:React.FC<IProps> = ({value, onChange, width}) => {
    return (
        <div className={css.wrapper}>
            <input style={{width: width}} value={value!} onChange={(e) => onChange!(e.target.value)}/>
        </div>
    );
};

export default Input;