import './App.css'
import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { addDetailsAPI, getDetailsAPI } from './services/allApi';

function App() {

  const [show, setShow] = useState(false);

  const [showdetails, setShowdetails] = useState([])

  const handleClose = () => {
    handleCancel()
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const [details, setDetails] = useState({
    fishName: "",
    description: ""
  })
  console.log(details);

  const handleCancel = () => {
    setDetails({
      fishName: "",
      description: ""
    })
  }

  const handleAdd = async () => {
    const { fishName, description } = details
    console.log(fishName, description);
    if (!fishName || !description) {
      alert(`Fill the form completely`)
    } else {
      const reqBody = new FormData()
      reqBody.append("fishName", fishName)
      reqBody.append("description", description)

      const result = await addDetailsAPI(reqBody)
      console.log(result);
      if (result.status == 200) {
        alert(`Success`)
      } else if (result.status == 406) {
        alert(`result.response.data`)
      } else {
        alert(`Something went wrong`)
      }
      handleClose()
    }
  }

  const getdetails = async()=>{
    const result = await getDetailsAPI()
    setShowdetails(result.data)

  }
  console.log(showdetails);

  useEffect(()=>{
   getdetails()
  
  },[])
  
  return (
    <>
      <div style={{ position: "sticky", top: "0px" }}>
        <Header />
      </div>

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
              <input type="text" className='form-control p-2 text-center bg-primary text-light rounded mt-2' value={details.fishName} onChange={(e) => setDetails({ ...details, fishName: e.target.value })} placeholder='Fish name' />

              <textarea name="" id="" className='form-control p-2 text-center bg-primary text-light rounded mt-3' value={details.description} onChange={(e) => setDetails({ ...details, description: e.target.value })} placeholder='description'></textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAdd}>
                Add details
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      {/* added details section */}
      <div className='container-fluid py-4 px-4' id='bodysection'>
      
      {showdetails? <div className='container-fluid rounded  bg-light '>
          <div className="row p-3">
            
           {showdetails?.map((item)=> <div className="col-md-4 mt-2 d-flex justify-content-center align-items-center ">
              <Card style={{ width: '22rem' }} className='bg-primary text-light text-center'>
                <Card.Body>
                  <Card.Title>{item?.fishName}</Card.Title>
                  <Card.Text>
                    {item?.description}
                  </Card.Text>
                  {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </div>)}
          </div>

        </div>:

        
        <div className='conatiner-fluid p-3 bg-light text-primary rounded mt-4 text-center'>
          <h2 className='my-4'>Details not added yet!!!</h2>

        </div>}

      </div>
      <Footer />
    </>
  )
}

export default App
