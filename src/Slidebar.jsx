import userEvent from "@testing-library/user-event"
import React from "react"
import './Slidebar.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import SlidebarRow from "./SlidebarRow"
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from "./StateProvider";

const Slidebar=()=>{
    const [{user},dispatch]=useStateValue();
    return(
        <div className="fixed">
        <div className="slidebar">
             <SlidebarRow title ={user.displayName} src={user.photoURL}/>
             <SlidebarRow title ="COVID-19 Information Center" Icon={LocalHospitalIcon} />
             <SlidebarRow title ="Pages" Icon={EmojiFlagsIcon} />
             <SlidebarRow title ="Friends" Icon={PeopleIcon} />
             <SlidebarRow title ="Messenger" Icon={ChatIcon} />
             <SlidebarRow title ="Market place" Icon={StorefrontIcon} />
             <SlidebarRow title ="Videos" Icon={VideoLibraryIcon} />
        </div>
        </div>
    )
}
export default Slidebar;