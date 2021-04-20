import { Avatar,IconButton } from "@material-ui/core";
import React from "react"
import './Slidebar.css'
const SlidebarRow=({title,src,Icon})=>{
    return(
        <div className="slidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}
export default SlidebarRow;