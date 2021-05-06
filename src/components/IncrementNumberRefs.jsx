import React, { useState, useRef } from 'react';

const IncrementNumber = (props) => {

    let [num, setNum] = useState(props.num)
    const numInputRef = useRef() // It is an DOM element, so we can keep that pointer as a constant

    const decrease = () => {
        setNum(num - Number(numInputRef.current.value))
    }

    const increase = () => {
        setNum(num + Number(numInputRef.current.value))

    }

    return (
        <div>
            <h3>Current number: {num} </h3>

            <label htmlFor="step">
                <div>Set the step </div>
                <input
                    type="number"
                    ref={numInputRef}
                />
            </label>

            <div>
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
            </div>
        </div>

    );
};

export default IncrementNumber;