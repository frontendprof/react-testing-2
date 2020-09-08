
import axios from "axios";


export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:"Client-ID zvunIj9GIh_oxNKpoFh7v2TbGMshPHc8tiXEF-gyQIo"
    }
});