
import React from 'react'

function FilterForm(props) {
    // handleChange function here to set dogFilter in state to value of event target
    //pass event target value to filterDogs function in handleChange
    const handleChange = (event) => {
        props.filterDogs(event.target.value)
    }
    
    return (
        <div>
            <label htmlFor="filter">Filter by Dog: </label>
            <input type="text" id="filter"
            value={ props.dogFilter }
            // add onchange event listener
            onChange={ handleChange }
            />
        </div>
    )
}

export default FilterForm