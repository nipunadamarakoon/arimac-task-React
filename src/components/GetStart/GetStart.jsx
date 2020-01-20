import React from 'react';
import illustSvg from '../../assets/images/illustration-working.svg';

const GetStart = (props) => {
    return<div className="get-start">
       <div> <GetStartContents/></div>
       <div><img src={illustSvg} /> </div>
    </div>;
}
export default GetStart;

const GetStartContents = (props) => {
    return<>
        <div className="get-start-content">
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insight on how your links are performing.</p>
            {/*<Button></Button>*/}
        </div>
    </>;
}