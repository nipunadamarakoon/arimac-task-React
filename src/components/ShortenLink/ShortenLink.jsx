import React from 'react';


const ShortenLink =()=>{
    return <div className="shortent-link">
        <ShortentLinkContent/>
    </div>
}

export default ShortenLink;

const ShortentLinkContent =()=>{
    return <div className="shortent-link-content">
        <div><input/></div>
        <div><button>Shorten It!</button></div>
    </div>
}