
import React from "react";

import SearchBar from "./SearchBar";
import utube from "../apis/utube";
import VideoList from "./VideoList";


class App extends React.Component{

    state= {videos:[]};


    onTermSubmit= async e=>{
        
        const res=await utube.get('/search',{
            params:{
                q:e
            }
        });

        this.setState({videos:res.data.items});

    };


    render(){

        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoList videos={this.state.videos}/>
        </div>
        );

    }
}


export default App;