import React from 'react';
import css from './QuestionInput.module.scss';

interface IProps{
    value?: string
    type?: number | string
    onChange?: (value: string) => void;
}

const QuestionInput: React.FC<IProps> = ({onChange, type, value}) => {
    return (
        <div className={css.wrapper}>
            <input type="text" value={value} onChange={(e) => onChange && onChange(e.target.value)}/>
        </div>
    );
};

export default QuestionInput;