import React from 'react';
import './Default.css';
import { Link } from 'react-router-dom';

const Default = () => {
    return (
        <div className="default">
            <h3>Telegramga kiring va do'stlaringiz bilan suhbat quring!</h3>
            <div className="default_wrapper">
                <h3>Telegramga kirish uchun oldin <span>ro'yhatdan o'tish</span> tugmasini bosib ro'yhatdan o'ting </h3>
                <h3>keyin <span>kirish</span> tugmasini bosib tizimga kiring.</h3>
                <h3><Link to="/signup">Ro'yhatdan o'tish</Link> <Link to="/login"> Tizimga kirish</Link></h3>
            </div>
        </div>
    )
}

export default Default
