
import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import utube from "../apis/utube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


const App =()=>{

    const [videos,setVideos]=useState([]);
    const [selectedVideo,setSelectedVideo]=useState();

    useEffect(()=>{

        onTermSubmit("Forests")

    },[]);

    const onTermSubmit= async e=>{
        
        const res=await utube.get('/search',{
            params:{
                q:e
            }
        });

        setVideos(res.data.items);
        setSelectedVideo(res.data.items[0]);

    };

    const onVideoSelect=video=>{
        setSelectedVideo(video);
    }


    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">

                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>

                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
                    </div>

                </div>

            </div>
        </div>
    );

};





export default App;