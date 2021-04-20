import React, { useEffect , useState } from "react"
import "./Post.css"
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Post=({profilePic,image,username,timestamp,message})=>{

    const[islike,setlike]=useState(false);
    return(
        <div className="Post">
            <div className="Post_top">
                <Avatar src={profilePic} className="Post_avatar" />
                <div className="Post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp).toUTCString()}</p>
                </div>
            </div>
            <div className="Post_bottom">
                <p>{message}</p>
            </div>
            <div className="Post_image">
                <img src={image} />
            </div>
            <div className="Post_options">
                <div className={islike?"Post_option liked":"Post_option"} onClick={()=>setlike(!islike)} >
                    <ThumbUpIcon />
                    <p onClick={{color:'blue'}}>{islike?"Liked":"Like"}</p>
                </div>
                <div className="Post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="Post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="Post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}
export default Post;