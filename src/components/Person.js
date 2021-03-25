

import React from 'react'

function Person({Name}) {
    return (
        <div>
            <h1>I'm {Name.lastName}, I'm {Name.age} years old</h1>
        </div>
    )
}

export default Person;
