import React, {useState} from 'react';
import './MessagePrompt.css';
import {db} from '../../firebase';

const MessagePrompt = () => {

    const [groupName, setGroupName] = useState("");
    const handleCreateGroup = (e) => {

        if(groupName !== "") {
            db.collection("gruppa").add({
                groupName: groupName
            })
        } else {
            alert("please fill out this field")
        }
    }

    return (
        <div className="prompt">
            <input type="text" placeholder="yangi gruppa yarating" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
            <button onClick={handleCreateGroup}>Saqlash</button>
        </div>
    )
}

export default MessagePrompt
