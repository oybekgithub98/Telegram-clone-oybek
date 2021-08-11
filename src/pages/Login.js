import React, { useState } from 'react';
import './Login.css';
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Login = () => {
    const [user, dispatch] = useStateValue(null);
    console.log(user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const submitUser = (e) => {
        const errorAlert = document.querySelector('.user_alreadyInuse');
        auth.signInWithEmailAndPassword(email, password) 
            .then((user) =>  { 
                dispatch({ 
                type: "REGISTER_USER", 
                user: auth
              })     
              if(user){ 
                history.push("/0")
              } 
             
            } 
              ) 
            .catch((err) => { 
                errorAlert.innerHTML = err.message; 
                errorAlert.classList.add('showAlert'); 
                setTimeout(() => { 
                    errorAlert.classList.remove('showAlert'); 
                }, 3000) 
            })
            
    }

    return (
        <div className="login">
           

            <div className="user_alreadyInuse">

            </div>
            
            <div className="login_container">
                <Link to="/">
                    <img className="login_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWV7IDskt9RcbPioqay9M8mI0SDVt6KOCvA&usqp=CAU" alt="telegram logo" />
                </Link>
                <Link to="/">
                    <h2>Telegram messenger</h2>
                </Link>
                <p>Ro'yhatdan o'tmagan bo'lsangiz <span><Link to="/signup">Sign Up</Link> ga kiring</span></p>
                <input type="email" placeholder="Email" id="login_email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Password" id="login_password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type="button" id="login_submit" onClick={submitUser}>Get started</button>
            </div>
        </div>
    )
}

export default Login
