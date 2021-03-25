import React, { Component } from 'react';
import Person from  "./Person";

function NameList() {
    const Names = [
      {
            id :1,
            lastName: "sanogo",
            age:22
        },
        {
            id :2,
            lastName: "sango",
            age:23
        },
        {
            id :3,
            lastName: "sago",
            age:24
        }
    ]
    const List = Names.map(Name=>{
      return  <Person Name={Name}/>
    })
    return (
        <div>
            {List}
        </div>
    )
}

export default NameList;

