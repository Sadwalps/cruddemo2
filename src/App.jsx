import './App.css'
import Footer from './Footer'
import Header from './Header'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      {/* Home section */}
      <div id='homesection' className='d-flex justify-content-center align-items-center'>
        <div className='p-3 rounded text-center bg-light text-primary'>
          <h3 className='mt-2'>To Add Details click Add  button</h3>
          <button className='btn btn-primary mt-2' onClick={handleShow}> Add </button>

          {/* modal */}
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title className='text-primary'>Add Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" className='form-control p-2 text-center bg-primary text-light rounded mt-2' placeholder='Fish name'  />
              
              <textarea name="" id="" className='form-control p-2 text-center bg-primary text-light rounded mt-3' placeholder='description'></textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
