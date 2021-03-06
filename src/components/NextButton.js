import React from 'react';
import Button from 'react-bootstrap/Button';

function NextButton(props) {
    return (
        <div>
            <Button 
            onClick={props.clickFunc} 
            variant="outline-light" 
            className={props.styles}
            >
            {props.btnText}
            </Button>
        </div>
    );
}

export default NextButton;