import axios from 'axios';

export default axios.create({
    baseURL: 'https://news.ycombinator.com/',

    params:{
        hashid:"Nn8y9p",
        url: "https://news.ycombinator.com/",
        created_at:"2019-06-18T21:29:57.922801Z"
    }
})

