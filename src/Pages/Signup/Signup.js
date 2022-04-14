import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import styles from './Signup.module.css';



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
        <div className={styles.formContainer}>
           <div>
           <h2>signup...</h2>
           <form onSubmit={handleSubmit}>
                <input type="email" onBlur={(e) => setEmail(e.target.value)} name="email" id="password" placeholder='email' required />
                <br /><br />
                <input type="password" onBlur={(e) => setPassword(e.target.value)} name="password" id="password" required placeholder='password' />
                <br /><br />
                <input className='btn btn-primary' type="submit" value="signup" />
            </form>
            <p>Already have an account ? <Link to="/login" className="text-decoration-none fs-3">Login</Link></p>
           </div>
        </div>
    );
};

export default Signup;