import React from 'react';

//children
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '0px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll