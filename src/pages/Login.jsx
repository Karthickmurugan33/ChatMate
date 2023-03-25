import React from 'react'
import Add from "../img/addAvatar.png"
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
const Login = () => {
    const history = useHistory()
    const [err, setErr] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return history.push("/")
        } catch (err) {
            setErr(true)
        }

    }
    return (
        <div className='formContainer'>

            <div className='formWrapper'>
                <span className="logo">ChatMate</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>

                    <input required type="email" placeholder="email" />
                    <input required type="password" placeholder="password" />

                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}

                </form>
                <p>You don't have an account?<Link to="/register">Register</Link> </p>
            </div>
        </div>
    )
}

export default Login