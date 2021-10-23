import React from 'react';
import "../App.css";

function Modal(props) {
    return (
        <div className="Modal">
            <p>{props.question}</p>
        </div>
    );
}

export default Modal;