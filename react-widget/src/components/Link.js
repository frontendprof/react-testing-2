

import React from 'react';

const Link=(className,href,children)=> {

    const onClick=e=>{
        e.preventDefault();
    }



    return (
        <div>
            <a 
            onClick={onClick}
            href={href} 
            className={className}>{children}</a>
        </div>
    );
}

export default Link;
