import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth)

    if(user){
        navigate('/home')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email,password);
    }
    

    return (
        <div className="container w-50 mx-auto">
        <h2 className="text-primary text-center mt-3">Signup...</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control type="email" className="p-3 border-2 border-dark fs-3 ouline-none" placeholder="Enter email" onBlur={(e) => setEmail(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Control className="p-3 border-2 border-dark fs-3 outline-none" type="password" placeholder="Password" onBlur={(e) => setPassword(e.target.value)} required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          signup
        </Button>
      </Form>
      <p>already have an account ? <Link to='/login' className="text-decoration-none fs-3">login</Link></p>
      <SocialLogin/>
    </div>
    );
};

export default Signup;