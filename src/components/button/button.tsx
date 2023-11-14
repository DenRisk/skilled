import React from 'react';

type ButtonModel = {
    type: 'PRIMARY' | 'GRADIENT_01' | 'GRADIENT_02',
    text: string
}

const Button = (props: ButtonModel) => {
    return (
        <button className={
            `btn 
            ${props.type === "GRADIENT_01" ? 'btn--gradient01' : ''} 
            ${props.type === "GRADIENT_02" ? 'btn--gradient02' : ''}`
        }>{props.text}</button>
    )
}

export default Button