import React from 'react'

//pass props to visible dogs component
const VisibleDogs = (props) => {
    return (
        <div>

            {/* put dog name in h1 tag */ }
            <h1>{ props.dog.name }</h1>
            {/* put breed's purpose in p tag */ }
            <p>Purpose: { props.dog.bred_for }</p>
            <p>Weight: { props.dog.weight.imperial } pounds</p>
            {/* put breed's origin in p tag */ }
            <p>Origin: { props.dog.origin || "No Data"}</p>
        </div>
    )
}

export default VisibleDogs