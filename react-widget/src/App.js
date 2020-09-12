
import React from 'react';

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";


const items=[
    {
        title:"What is React",
        content:'React is front end javascript library for building user interfaces'
    },
    {
        title:"What is the difference between React and Angular",
        content:"Angular JS is based on MVC (Model View Controller) whereas React is based on Virtual DOM."

    },
    {
        title:"How do you use React",
        content:"You use React by creating components"
    }
];

const options=[
    {
        label:"The Color Red",
        value:red
    },

    {
        label:"The Color Green",
        value:green
    },

    {
        label:"The Shade of Blue",
        value:blue
    }
];



export default ()=>{
    return (
    <>
        <Dropdown options={options} />
    </>
    );
};

