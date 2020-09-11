
import React, {useState} from "react";


const Accordion=({items})=>{

    const [activeIndex, setActiveIndex]=useState(null);

    const onTitleClick=index=>{
        setActiveIndex(index);
    };

    const renderedItems=items.map((item,index)=>{

        const activeCls=index===activeIndex?"active":"";


        return(
            <React.Fragment key={item.title} >
                <div 
                onClick={()=>onTitleClick(index)}
                className={`title ${activeCls}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>

                <div className={`content ${activeCls}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    


    return <div className="ui styled accordion">{renderedItems}</div>
};

export default Accordion;
