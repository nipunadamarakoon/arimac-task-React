import React from 'react';
import GetStart from "./components/GetStart/GetStart";
import AdvancedStatistics from "./components/AdvancedStatistics/AdvancedStatistics";
import BootsLink from "./components/BootsLink/BootsLink";
// import ShortenLink from "./components/ShortenLink/ShortenLink";
import './components/styles.less';

export const Home = ()=> {
    return <div className="home-main">
        <GetStart/>
        {/*<ShortenLink/>*/}
        <AdvancedStatistics/>
        <BootsLink/>
    </div>
}