import React, { useState } from 'react';
import MessageSender from '../components/messageSender/MessageSender';
import Sidebar from '../sidebar/Sidebar';
import './Home.css';

const Home = ({ match }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = (e) => {
        const ghghgh = document.querySelector('.ghghgh');
        if (!sidebarOpen) {
            ghghgh.classList.add('activeSidebar');
            setSidebarOpen(true);
        } else {
            ghghgh.classList.remove('activeSidebar');
            setSidebarOpen(false);
        }
    }

    //   const closeSidebar = (e) => {
    //     const sidebar = document.querySelector('.sidebar');
    //     sidebar.classList.remove('activeSidebar');
    //   }

    return (
        <div className="home">
            <Sidebar />
            <MessageSender match={match} callbac={openSidebar} />
        </div>
    )
}

export default Home
