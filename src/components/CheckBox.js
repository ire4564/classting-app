import React from 'react';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import "../App.css";

function CheckBox(props) {
    const [radioValue, setRadioValue] = useState('1');
    
    return (
        <>
        {(props.dataSet).map((data, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-success'}
                name="radio"
                className="SelectBtn"
                value={data}
                checked={radioValue === data}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                <div className="ProblemNum">{idx+1}</div>
                {data}
            </ToggleButton>
            ))}
        </>
    );
}

export default CheckBox;