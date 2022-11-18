import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {  postData,updateData } from '../../redux/action';
import { ToastContainer } from 'react-toastify';

export const AddUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Location = useLocation()
    const id = Location.state?._id
    const data = Location.state 

    const [validated, setValidated] = useState(false);

    const [inpval,setInpval] = useState({
       name:"",
        email:"",
        number:"",
        state:"",
        city:""
    })

    const reset = ()=>{
        setInpval({
            name:"",
            email:"",
            number:"",
            state:"",
            city:""
        })
    }

    useEffect(()=>{
      if(data){
        setInpval(data)
      }
    },[data])
    
    const handler = (event)=>{
        setInpval({...inpval,[event.target.name]:event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget; 
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      }
      else{
        if(data){
          dispatch(updateData(id,inpval))
          reset()
          setValidated(false);
          navigate("/alluser")
        }
        else{
          dispatch(postData(inpval))
          reset()
          setValidated(false);
        }
        }  
    };
  return (
    <Container>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} className="mx-auto" md="7" controlId="validationCustom01">
          <Form.Label className='d-block text-start  fw-bold' >Name :</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={inpval.name}
            name="name"
            onChange={handler}
          />
          <Form.Control.Feedback type="invalid">
              Please choose a Name.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  className="mx-auto" md="7" controlId="validationCustom02">
          <Form.Label  className='d-block text-start fw-bold'>Email :</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={inpval.email}
            name="email"
            onChange={handler}
          />
            <Form.Control.Feedback type="invalid">
              Please choose a Email
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}  className="mx-auto" md="7" controlId="validationCustom04">
          <Form.Label  className='d-block text-start fw-bold'>Number :</Form.Label>
          <Form.Control 
          required
          type="text" 
          placeholder="Phone Number"  
          pattern="[6-9]{1}[0-9]{9}"
           value={inpval.number}
           name="number"
           onChange={handler}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col }  className="mx-auto" md="7" controlId="validationCustom05">
          <Form.Label  className='d-block text-start fw-bold'>State :</Form.Label>
          <Form.Control type="text"
           placeholder="State"
            required  
            value={inpval.state}
            name="state"
            onChange={handler}
           />
          <Form.Control.Feedback
           type="invalid"
           >
          Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  className="mx-auto" md="7" controlId="validationCustom03">
          <Form.Label  className='d-block text-start fw-bold'>City :</Form.Label>
          <Form.Control type="text"
           placeholder="City" required 
           value={inpval.city}
           name="city"
           onChange={handler}
           />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {
        !data?  <Button type="submit">Submit</Button> :
        <Button type="submit">Update</Button>
      }
     
    </Form>
    <ToastContainer/>
    </Container>
  )
}
