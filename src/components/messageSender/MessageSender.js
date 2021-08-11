import React, { useState } from 'react'
import '../messageSender/MessageSender.css';
import { FiMoreVertical, FiPaperclip, FiSmile, FiSend, FiMic, FiEdit2 } from 'react-icons/fi';
import CloseIcon from '@material-ui/icons/Close';
import { BiVolumeMute } from 'react-icons/bi';
import { GrCheckboxSelected } from 'react-icons/gr';
import { BsTrash } from 'react-icons/bs';
import { GoUnmute } from 'react-icons/go';
import Chat from '../chat/Chat';
import { Link } from 'react-router-dom';
// import Sidebar from '../../sidebar/Sidebar';
import SidebarData from '../../SEARCH_RESULTS.json';
// import { Detector } from "react-detect-offline";
// import ProfileSidebar from '../profileSidebar/ProfileSidebar';

const MessageSender = ({ match, callbac }) => {

    // console.log()

    const [message, setMessage] = useState('');
    const [vertMore, setVertMore] = useState(false);
    const [moreMute, setMoreMute] = useState(false);
    const [sideberProfile, setSideberProfile] = useState(false);
    const [chatMessage, setChatMessage] = useState("");

    const moreVert = (e) => {
        const moreVertical = document.querySelector('.moreVertical');
        const messageHeaderMore = document.querySelector('.messageHeaderMore');

        if (!vertMore) {
            moreVertical.classList.add('activeMoreVertical');
            messageHeaderMore.classList.add('hoverMoreVerticel');
            setVertMore(true);
        } else {
            moreVertical.classList.remove('activeMoreVertical');
            messageHeaderMore.classList.remove('hoverMoreVerticel');
            setVertMore(false);
        }
    }

    const mute = (e) => {
        if (!moreMute) {

            setMoreMute(true);
        } else {
            setMoreMute(false);
        }
    }
    
    const profileSenderHand = (e) => {
        const profileSidebar = document.querySelector('.profileSidebar');
        const moreVertical = document.querySelector('.moreVertical');
        const messageHeaderMore = document.querySelector('.messageHeaderMore');

        if (!sideberProfile) {
            profileSidebar.classList.add('activeProfileSidebar');
            setSideberProfile(true);
        }
        if (sideberProfile) {
            moreVertical.classList.remove('activeMoreVertical');
            messageHeaderMore.classList.remove('hoverMoreVerticel');
            setVertMore(false);
        }
    }

    const profileSenderHide = (e) => {
        const profileSidebar = document.querySelector('.profileSidebar');
        if (sideberProfile) {
            profileSidebar.classList.remove('activeProfileSidebar');
            setSideberProfile(false);
        };
    }

    const sendMessage = (e) => {
        const messageInput = document.querySelector('.messageInput');
        setChatMessage(message);
        messageInput.value = "";
        e.preventDefault();
    }

    return (
        <div className="Sender">
            <div className="messageSender">
                <div className="messageHeader">
                    <div className="messageHeaderAvatar" style={{
                        backgroundImage:
                            `url(${SidebarData[Math.floor(match?.params.userId)]?.image ? SidebarData[Math.floor(match?.params.userId)]?.image : SidebarData[0]?.image})`
                    }} onClick={profileSenderHand}>
                    </div>
                    <div className="messageHeaderInfo" onClick={profileSenderHand}>
                        <p className="chatNameInfo">
                            {
                                SidebarData[Math.floor(match?.params.userId)]?.username ?
                                    SidebarData[Math.floor(match?.params.userId)]?.username :
                                    SidebarData[0]?.username
                            }
                        </p>
                        <p className="chatMemberInfo">
                            {
                                SidebarData[Math.floor(match?.params.userId)]?.time ?
                                    SidebarData[Math.floor(match?.params.userId)]?.time :
                                    SidebarData[0]?.time
                            }
                        </p>
                    </div>
                    <div className="messageHeaderMore">
                        <button type="button" onClick={moreVert}>
                            <FiMoreVertical className="verticalVert" style={{ fontSize: "20px" }} />
                        </button>
                        <div className="moreVertical">
                            <ul>
                                {!moreMute ?
                                    <li onClick={mute}>
                                        <BiVolumeMute className="morIcons" style={{ fontSize: "25px" }} />
                                        <p>Mute</p>
                                    </li>
                                    :
                                    <li onClick={mute}>
                                        <GoUnmute className="morIcons" style={{ fontSize: "25px" }} />
                                        <p>Unmute</p>
                                    </li>
                                }
                                <li>
                                    <GrCheckboxSelected className="morIcons" style={{ fontSize: "25px" }} />
                                    <p>Select Meesages</p>
                                </li>
                                <li>
                                    <BsTrash className="morIcons" style={{ fontSize: "25px" }} />
                                    <p>Delete Chat</p>
                                </li>
                                <Link to="/signup">
                                    <li>
                                        <button>Sign up</button>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <Chat sendMessage={chatMessage} />
                <div className="messageTyper">
                    <FiPaperclip style={{ fontSize: "25px" }} />
                    <input type="file" className="fileInput" />
                    <form className="messageTyperContainer" onSubmit={sendMessage}>
                        <input autoFocus type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="messageInput" />
                        <FiSmile style={{ fontSize: "25px" }} className="icons" />
                        <button type="submit" className="messageSenderBtn"></button>
                    </form>
                    {!message ? <FiMic style={{ fontSize: "25px" }} className="icons" /> : <FiSend style={{ fontSize: "25px" }} className="icons" />}
                </div>
            </div>

            <div className="profileSidebar">
                <div className="profileSidebar_header">
                    <div className="close_profileSidebar" onClick={profileSenderHide}>
                        <CloseIcon style={{ fontSize: "25px" }} />
                    </div>
                    <h4>Profile</h4>
                    <div className="close_profileSidebar">
                        <FiEdit2 style={{ fontSize: "25px" }} />
                    </div>
                </div>
                <div className="profileSidebar_body" >
                    <div className="body_image" style={{
                        backgroundImage:
                            `url(${SidebarData[Math.floor(match?.params.userId)]?.image ? SidebarData[Math.floor(match?.params.userId)]?.image : SidebarData[0]?.image})`
                    }} >
                        <p>
                            {
                                SidebarData[Math.floor(match?.params.userId)]?.username ?
                                    SidebarData[Math.floor(match?.params.userId)]?.username :
                                    SidebarData[0]?.username
                            }
                        </p>
                        <p>
                            {
                                SidebarData[Math.floor(match?.params.userId)]?.time ?
                                    SidebarData[Math.floor(match?.params.userId)]?.time :
                                    SidebarData[0]?.time
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MessageSender;