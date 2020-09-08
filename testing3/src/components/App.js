

import React from "react";
import axios from "axios";


import SearchBar from "./SearchBar";


class App extends React.Component{


    async onSearchSubmit(term){
        
        const res=await axios.get("https://api.unsplash.com/search/photos",{
            params:{query:term},
            headers:{
                Authorization:"Client-ID zvunIj9GIh_oxNKpoFh7v2TbGMshPHc8tiXEF-gyQIo"
            }
        });

        console.log(res.data.results);
    }

    render(){

    
    return(

        <div className="ui container" style={{marginTop:"20px"}}>
            <SearchBar runOnSubmit={this.onSearchSubmit} />
        </div>
    )
    }
        
};

export default App;