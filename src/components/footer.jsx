import React from 'react';



const Footer = ()=>{

    return(<div className="footer">

            <div className="center">
                <Features/>
                <Resources/>
                <Company/>
            </div>

    </div>)
}

export default Footer;

const Features =()=>{
    return(<div className="footer-content1">
        <h3>Features</h3>
        <a>Link Shorting</a>
        <a>Branded Links</a>
        <a>Analytics</a>
    </div>)

}
const Resources =()=>{
    return(<div className="footer-content1">
        <h3>Resources</h3>
        <a>Blog</a>
        <a>Developers</a>
        <a>Support</a>
    </div>)
}
const Company =()=>{
    return(<div className="footer-content1">
        <h3>Company</h3>

        <a>About</a>
        <a>Our team</a>
        <a>Careers</a>
        <a>Contact</a>
        </div>)

}

