import React from 'react';
import Icon1Svg from '../../assets/images/icon-brand-recognition.svg';
import Icon2Svg from '../../assets/images/icon-detailed-records.svg';
import Icon3Svg from '../../assets/images/icon-fully-customizable.svg';
const AdvancedStatistics = (props)=>{
    return<div className="advanced-statics">
        <div>
            <AdvancedStatisticsContents/>
        </div>
        <div className="line"/>
            <div className="advanced-statics-cart-direction">
                <div className="one"><AdvancedStaticsCard
                    logo={Icon1Svg}
                    title={"Brand Recognition"}
                    desc={"Boost your brand recognition with\n" +
                    "    each click.Generic links dont's mean a\n" +
                    "thing. Branded links help instill\n" +
                    "confidence in your context"}
                /></div>
                <div className="two" ><AdvancedStaticsCard
                    logo={Icon2Svg}
                    title={"Brand Recognition"}
                    desc={"Boost your brand recognition with\n" +
                    "    each click.Generic links dont's mean a\n" +
                    "thing. Branded links help instill\n" +
                    "confidence in your context"}
                /></div>
                <div className="three"><AdvancedStaticsCard
                    logo={Icon3Svg}
                    title={"Brand Recognition"}
                    desc={"Boost your brand recognition with\n" +
                    "    each click.Generic links dont's mean a\n" +
                    "thing. Branded links help instill\n" +
                    "confidence in your context"}
                /></div>
            </div>

    </div>
}
export default AdvancedStatistics;

const AdvancedStatisticsContents = (props) =>{
    return<>
        <div className="advanced-statics-content">
            <h1>Advanced Statistics</h1>
            <p>Track how links are performing across the with</p>
            <p> our advanced statistics dashbord</p>
        </div>
        </>;
}

const AdvancedStaticsCard =({ title, logo, desc})=>{
    return<>
        <div className="advanced-statics-cart">
            <div className="icon-logo"><img src={logo}/> </div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    </>
}
