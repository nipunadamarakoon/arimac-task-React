import React, {useState} from 'react';
import GetStart from "./components/GetStart/GetStart";
import AdvancedStatistics from "./components/AdvancedStatistics/AdvancedStatistics";
import BootsLink from "./components/BootsLink/BootsLink";
// import ShortenLink from "./components/ShortenLink/ShortenLink";
import './components/styles.less';

export const Urlcontext  = React.createContext( '');
export const Home = ()=> {
    const [url, setUrl] = useState('');
    return <Urlcontext.Provider value={{url, setUrl}}>
        <div className="home-main">
        <GetStart/>
        {/*<ShortenLink/>*/}
        <AdvancedStatistics/>
        <BootsLink/>
    </div>
    </Urlcontext.Provider>
}

export default Home;