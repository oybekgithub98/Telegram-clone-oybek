import React from 'react';
import MessageSender from '../components/messageSender/MessageSender';
import Sidebar from '../sidebar/Sidebar';
import './Home.css';

const Home = ({match}) => {
    
    return (
        <div className="home">
            <Sidebar />
            <MessageSender match={match} />
        </div>
    )
}

export default Home
