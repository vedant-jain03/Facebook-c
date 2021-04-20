import React,{useEffect, useState} from "react"
import './feed.css'
import MessageSender from "./MessageSender"
import StoryReel from "./StoryReel"
import Post from "./Post"
import db from "./firebase"
import firebase from "./firebase"
const Feed=()=>{
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })
      }, [])
    // return(
    //     <div className="feed">
    //         <StoryReel />
    //         <MessageSender />
    //         {posts.map((pos)=>{
    //             <Post
    //             key={pos.id}
    //             profilePic={pos.data.profilePic}
    //             message={pos.data.message}
    //             timestamp={pos.data.timestamp}
    //             username={pos.data.username}
    //             image={pos.data.image}
    //             />
    //         })}
    //     </div>
    // )
    return (
        <div className="feed">
          <StoryReel />
          <MessageSender />
          {posts.map(post => (
          <Post
            key={post.data.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
          ))}
        </div>
      );
}
export default Feed;