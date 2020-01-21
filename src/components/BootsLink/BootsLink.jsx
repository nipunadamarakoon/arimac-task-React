import React from 'react';

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
            <button>Get Started</button>
        </div>
    </>
}