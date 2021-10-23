import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';

function ModalWindow() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
            다음 문제로
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                fullscreen={fullscreen}
                backdrop="static"
                keyboard={false}
                className="ModalStyle"
            >
            <Modal.Header>
            <Modal.Title>정답이예요 :)</Modal.Title>
            </Modal.Header>
            <Modal.Body className="ModalInner">
                <p className="CheckQuestion">red Apple</p>
                <b><p className="CheckAnswer">Apple</p></b>
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
