import React from 'react'

export default function Filters({name,filterItems,nameValue}) {
    return (
        <div className="filterValues">
        <input type="checkbox" value={name} onClick={filterItems} id={name} name={nameValue}/>   <label>{name}</label>
        </div>
    )
}
