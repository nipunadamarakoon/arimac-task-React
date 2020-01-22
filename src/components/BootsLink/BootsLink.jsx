import React from 'react';
import {Button} from "antd";

const BootsLink = ()=>{
    return<div className="boots-link">
        <BootsLinkContents/>
    </div>
}

export default BootsLink;

const BootsLinkContents =()=>{
    return <>
        <div className="boots-link-contents">
            <h1>Boots your link today </h1>
            <Button className={'boot-link-btn'}>Get Started</Button>
        </div>
    </>
}