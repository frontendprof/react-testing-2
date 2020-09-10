

import React from 'react';


const VideoDetail=({video})=>{

    if(!video){
        return <h4>Loading ...</h4>
    }
    return (
        
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            
        </div>
    )
}


export default VideoDetail;