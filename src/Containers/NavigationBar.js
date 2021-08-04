import React from 'react';
import logo from '../mLogo.JPG'

const Navigation = ({searchChange,setSortingType}) =>{
    return(
        <div className="nav-collapsible">
            <div className="header"><span className="companyName"><img src={logo} className="logo"></img> Myntara
            </span>
           <span className="navGenders">
               <span>Men</span>
                <span>Women</span>
                <span>Boys</span>
                <span>Girls</span>
            </span>
              <input type="search" placeholder="Search" onChange={searchChange} className="searchBox" ></input>
              <span><label>Sort by: </label> <select onChange={setSortingType}>
                <option value="reset">None</option>
                <option value="price">Price</option>
                <option value="year">Year</option>
                <option value="discount">Discount</option>
            </select>
            </span>
            <span class="icons">
            <i class="fas fa-user-circle"></i>
            <i class="fas fa-shopping-bag"></i>
            <i class="fas fa-bookmark"></i>
            </span>
        </div>        
        </div>
    )
}

export default Navigation;