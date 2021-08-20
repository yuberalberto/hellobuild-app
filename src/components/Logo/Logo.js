import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import hbLogo from "./hellobuild.png"

const Logo = () => {
    return (
        <div className="center ma4 mt0 ">
            <Tilt className="Tilt br2 shadow-5" options={{ max : 25 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: "3px"}} src={hbLogo} alt="" /> 
                </div>
            </Tilt> 
        </div>
    );
}

export default Logo;