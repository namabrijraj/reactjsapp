import React from "react"

function Hello(props){
    const elememt = React.createElement(
        'h1',
        {
            className : 'rows'
        },
        'Hello World!'
    );

    const elemt =  [
        {
            key : 0,
            type : 'h1',
            props : {
               childern : 'lllllll',
               className : 'getting'
            }    
        }
    ];

        
    
    return (elemt)
}

export default Hello