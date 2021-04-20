import React from "react"
import './Storyreel.css'
import { Avatar,IconButton } from "@material-ui/core";
import Story from "./Story"
const StoryReel=()=>{
    return (
        <div className="Storyreel">
            <Story 
              title="Vedant   Jain"
              image="https://picsum.photos/150/250"
              profileSrc="https://picsum.photos/100/100"
            />
            <Story 
              title="Yashika Jotwani"
              image="https://picsum.photos/150/350"
              profileSrc="https://picsum.photos/100/200"
            />
            <Story 
              title="Sanya Verma"
              image="https://picsum.photos/250/250"
              profileSrc="https://picsum.photos/300/100"
            />
            <Story 
              title="Yashraj Pachori"
              image="https://picsum.photos/100/200"
              profileSrc="https://picsum.photos/100/300"
            />
            <Story 
              title="Vaibhav Sen"
              image="https://picsum.photos/150/450/"
              profileSrc="https://picsum.photos/200/200"
            />
        </div>
    )
}
export default StoryReel;