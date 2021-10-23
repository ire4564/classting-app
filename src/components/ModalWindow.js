import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';

function ModalWindow(props) {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
  
    return (
        <div>
            <Modal
                show={props.show}
                onHide={handleClose}
                fullscreen={fullscreen}
                backdrop="static"
                keyboard={false}
                className="ModalStyle"
            >
            <Modal.Header>
            <Modal.Title>{props.resultText}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="ModalInner">
                <p className="CheckQuestion">{props.questionText}</p>
                <b><p className="CheckAnswer">{props.answerText}</p></b>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                    다음 문제 풀기
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default ModalWindow;
