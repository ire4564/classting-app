import React from 'react';
import "../App.css";

function Quiz(props) {
    return (
        <div className="QuizArea">
            <p>{props.question}</p>
        </div>
    );
}

export default Quiz;