

import axios from "axios";

const KEY= "AIzaSyA6r9yfVxtSZxxPGG2VOPgxmdkcdasOsV0";


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:8,
        key:KEY
    }
})