
import React from 'react';

import Accordion from "./components/Accordion";


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
]


export default ()=>{
    return (
    <h3>
        <Accordion items={items} />
    </h3>
    );
};

