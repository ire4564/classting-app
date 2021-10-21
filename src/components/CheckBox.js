import React from 'react';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import "../App.css";

//data
import answerData from "../data/answer.json";

function setSelect()  {
    //answerData.answer.length => Sample Data length
    let already = [];
    let setAnswer = [];
    let checkReady = 0;
    
    while(checkReady !== 4) {
        var radomIndex = Math.floor(Math.random() * (answerData.answer.length-1)) + 0;
        //new Index => then set AnswerArray
        if(already.indexOf(radomIndex) == -1) {
            already.push(radomIndex);
            setAnswer.push(answerData.answer[radomIndex]);
            checkReady++;
        }
    }
    return setAnswer;
}

function CheckBox(props) {
    const [radioValue, setRadioValue] = useState('1');
    const [getAnswer, setAnswer] = useState(setSelect());

    return (
        <>
        {getAnswer.map((data, idx) => (
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