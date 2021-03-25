import React from 'react';
import  "./myStyle.css";

function StyleSheet(props) {
    const className = props.A?'A':'';
    return (
        <div>
            <h1 className={`${className} B `}>StyleSheet</h1>
        </div>
    )
}

export default StyleSheet;
