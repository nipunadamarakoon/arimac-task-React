import React, {useState, useContext} from 'react' ;
import {Button} from "antd";
import axios from 'axios';
import {Urlcontext} from "../../Home";



const MiddleBar =()=>{

    return<div>
        <MiddleBarContent/>

    </div>
}

export default MiddleBar;

const MiddleBarContent = ()=>{
    const [data, setData] = useState(null);
    const [value, setValue] = useState('');
    const context = useContext(Urlcontext);
    const fetchData =  () => {
        axios.post('https://rel.ink/api/links/', { url: value })
            .then((res) => {
                context.setUrl(res.data.url);
            })
    }

    return <div className="middle-bar">
        <input value={value} onChange={(e) => setValue(e.target.value)}/>
        <Button className={'middle-bar-btn'} onClick={fetchData}>Shorter It!</Button>
    </div>

}