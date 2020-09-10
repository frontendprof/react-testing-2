
import React from "react";

import SearchBar from "./SearchBar";
import utube from "../apis/utube";


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
            There are {this.state.videos.length} videos.
        </div>
        );

    }
}


export default App;