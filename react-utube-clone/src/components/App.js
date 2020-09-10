
import React from "react";

import SearchBar from "./SearchBar";
import youtube from "../apis/utube";
import utube from "../apis/utube";


class App extends React.Component{


    onTermSubmit=e=>{
        
        utube.get('/search',{
            params:{
                q:e
            }
        })
    }


    render(){

        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
        </div>
        );

    }
}


export default App;