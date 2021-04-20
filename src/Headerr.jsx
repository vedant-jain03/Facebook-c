import React from "react"
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import { Avatar,IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useStateValue } from "./StateProvider";

const Headerr=()=>{
    const [{user},dispatch]=useStateValue();
    return(
        <div className="header">
            <div className="header_left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
                <div className="header_input">
                🔎<input type="text" placeholder="  Search FaceBook" />
                </div>
            </div>
            <div className="header_center">
                <div className="header_option header_option_active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                <FlagIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SupervisorAccountOutlinedIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}
export default Headerr;