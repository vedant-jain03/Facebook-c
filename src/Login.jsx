import { Button } from "@material-ui/core"
import React from "react"
import "./Login.css"
import {auth,provider} from "./firebase";
import { useStateValue } from "./StateProvider";
import {actionTypes } from "./reducer";

const Login=()=>{
    const [state,dispatch]=useStateValue();
    const signin=()=>{
        // jb
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        })
        .catch((error)=>alert(error.message));
    };
    return(
        <div className="login">
            <div className="login_logo">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>
            <button onClick={signin} type="submit" >Sign In</button>
        </div>
    )
}
export default Login;