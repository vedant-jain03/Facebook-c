import React, { useState } from "react"
import './MessageSender.css'
import { Avatar,IconButton } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import firebase from "./firebase";
import db from "./firebase"
const MessageSender=()=>{
    
    const [{user},dispatch]=useStateValue();
    const [input,setinput]=useState("");
    const [imageurl,setimageurl]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            message:input,
            timestamp: new Date().toUTCString(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageurl
        })
        setinput("");
        setimageurl("");
    }
    const set=(e)=>{
        setinput(e.target.value);
    }
    const seturl=e=>{
        setimageurl(e.target.value);
    }
    return(

        <div className="MessageSender">
            <div className="MessageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input className="MessageSender_input" placeholder={`What's On your Mind?, ${user.displayName}`} value={input} onChange={set} />
                    <input type="text" placeholder={"Give your image URL"} value={imageurl} onChange={seturl} />
                    <button onClick={handlesubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="MessageSender_bottom">
                <div className="MessageSender_option">
                    <VideocamIcon style={{color:'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="MessageSender_option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="MessageSender_option">
                    <InsertEmoticonIcon style={{color:'yellow'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
export default MessageSender;