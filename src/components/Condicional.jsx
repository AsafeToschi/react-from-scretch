import React from 'react';

const Condicional = (props) => {
    return (
        <div>
            <h3>O número {props.number} é:</h3>
            {props.number % 2 == 0 ?
                <span>Par</span>
                :
                <span>Ímpar</span>
            }
        </div>
    )
}

export default Condicional;