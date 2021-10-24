import React from 'react';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import "../App.css";
import NextButton from './NextButton';


function CheckBox(props) {
    const [radioValue, setRadioValue] = useState(0);
    const [next, setNext] = useState(0);
    const [btnStyle, setBtnStyle] = useState("NextBtn DisplayNone");
    localStorage.setItem("select", radioValue);

    if(props.setNext !== next) {
        setRadioValue(0);
        setNext(props.setNext);
        setBtnStyle("NextBtn DisplayNone");
    }
    const changeValue = (e) => {
        setRadioValue(e.currentTarget.value);
        setBtnStyle("NextBtn");
    };
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
                style={{"pointerEvents": props.canClick}}
                onChange={(e) => changeValue(e)}
                >
                <div className="ProblemNum">{idx+1}</div>
                {data}
            </ToggleButton>
            ))}
            <NextButton
            styles={btnStyle}
            clickFunc={props.clickFuncs}
            btnText={props.btnTexts}
            />
        </>
    );
}

export default CheckBox;