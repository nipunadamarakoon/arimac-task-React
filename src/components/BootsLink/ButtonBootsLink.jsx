import React from "react";

const ButtonCustom =(props)=>{
    return<>
        <div className="boot-button">
            {props.children}
        </div>
    </>
}

export default ButtonCustom;