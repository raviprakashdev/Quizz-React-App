import React,{ useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Book from '../images/book.svg'
import { Container, Row, Col } from 'reactstrap';

function Test(props) {
    const {buttonLabel,className} = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>

        <Row>
        <Col>
        
        <div>
      <Button outline color="primary" size="large" className= "btn-design" onClick={toggle}>Take A Test</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
        
        </div></Col>
        <Col><img src ={Book} /></Col>
        </Row>   

        
        </div>
    )
}

export default Test;
