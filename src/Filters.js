import React from 'react'

export default function Filters({name,filterItems}) {
    return (
        <div className="filterValues">
        <input type="checkbox" value={name} onClick={filterItems} id={name}/>   <label>{name}</label>
        </div>
    )
}
