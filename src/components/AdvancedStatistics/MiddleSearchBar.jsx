import React from 'react' ;
import {Button} from "antd";

const MiddleBar =()=>{
    return<div>
        <MiddleBarContent/>
    </div>
}

export default MiddleBar;

const MiddleBarContent = ()=>{
    return <div className="middle-bar">
        <input/>
        <Button className={'middle-bar-btn'}>Shorter It!</Button>
    </div>
}