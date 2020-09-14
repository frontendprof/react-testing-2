

import {useState,useEffect} from 'react';
import utube from "../apis/utube";


const useVideos =(defaultSearchTerm)=>{

    const [videos,setVideos]=useState([]);

    useEffect(()=>{

        search(defaultSearchTerm);

    },[defaultSearchTerm]);

    const search= async e=>{
        
        const res=await utube.get('/search',{
            params:{
                q:e
            }
        });

        setVideos(res.data.items);      

    };

    return [videos,search];


};

export default useVideos;