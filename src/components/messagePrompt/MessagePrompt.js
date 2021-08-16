import React, {useState} from 'react';
import './MessagePrompt.css';
import {db} from '../../firebase';

const MessagePrompt = () => {

    const [groupName, setGroupName] = useState("");
    const [groupImage, setGroupImage] = useState("");

    const handleCreateGroup = (e) => {

        if(groupName !== "" && groupImage !=="") {
            db.collection("groups").add({
                groupName: groupName,
                groupImage: groupImage,
            })
        } else {
            alert("please fill out this field")
        }
    }

    return (
        <div className="prompt">
            <input type="text" placeholder="yangi gruppa yarating" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
            <input type="text" placeholder="your image link" value={groupImage} onChange={(e) => setGroupImage(e.target.value)} />
            <button onClick={handleCreateGroup}>Saqlash</button>
        </div>
    )
}

export default MessagePrompt
