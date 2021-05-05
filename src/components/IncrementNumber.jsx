import React, { useState } from 'react';

const IncrementNumber = (props) => {

    let [num, setNum] = useState(props.num)
    let [step, setStep] = useState(props.step)

    const stepHandler = (event) => {
        setStep(+event.target.value)
    }

    const decrease = () => {
        setNum(num - step)
    }

    const increase = () => {
        setNum(num + step)

    }

    return (
        <div>
            <h3>Current number: {num} </h3>

            <label htmlFor="step">
                <div>Set the step </div>
                <input
                    type="number"
                    placeholder="Please set the step"
                    id="step"
                    value={step}
                    onChange={stepHandler}
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