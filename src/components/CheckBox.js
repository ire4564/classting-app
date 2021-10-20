import React from 'react';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import "../App.css";

function CheckBox() {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'answer 1', value: '1' },
        { name: 'answer 2', value: '2' },
        { name: 'answer 3', value: '3' },
        { name: 'answer 4', value: '4' },
    ];

    return (
        <>
        {radios.map((radio, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-success'}
                name="radio"
                className="SelectBtn"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                <div className="ProblemNum">{radio.value}</div>
                {radio.name}
            </ToggleButton>
            ))}
        </>
    );
}

export default CheckBox;