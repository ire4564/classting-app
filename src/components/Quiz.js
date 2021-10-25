import React from 'react';

function Quiz(props) {
    return (
        <div className="QuizArea">
            <p>{props.question}</p>
        </div>
    );
}

export default Quiz;