import React from 'react'
import Categories from '../Components/Categories';
import BrandNames from '../Components/BrandNames';
import {useState} from 'react';
import Button from '../Components/ButtonStyled';
// import Brands from './Brands';
export default function SideBar({products,allProducts,changeProductArray}) {
    const[selectedGenderArray,setSelectedGenderArray] = useState([]);
    let filteredProducts=[];

    let filterItems = (event) =>{
        let filterValue = event.target.value;
        filterValue = filterValue.toLowerCase();
        if(!selectedGenderArray.includes(filterValue)){
            selectedGenderArray.push(filterValue);
        }
        if(selectedGenderArray.length >=2){
            changeProductArray(allProducts);
        }
        else if(filterValue==="men"){
             filteredProducts = products.filter((product) =>{
                return !product.gender.toLowerCase().includes("women");
              })
        changeProductArray(filteredProducts);
        }
        else if(filterValue==="women" ){
            filteredProducts = products.filter((product) =>{
                return product.gender.toLowerCase().includes("Women");
              })
        changeProductArray(filteredProducts);
        }
        else{
            changeProductArray(allProducts);
        }
    }
    let onClearAllFilters = (event) =>{
        changeProductArray(allProducts);
    }
    return (
        <div className="sideBar"> 
            <h3>Filters</h3><Button onClick={onClearAllFilters}>Clear All</Button>
            <div className="genders">
                <input type="checkbox" value="Men" onChange={filterItems}/>  <label>Men</label><br/>
                <input type="checkbox" value="Women" onChange={filterItems}/>  <label>Women</label><br/>
                <input type="checkbox" value="Men" onChange={filterItems}/>  <label>Boys</label><br/>
                <input type="checkbox" value="Women" onChange={filterItems}/>  <label>Girls</label><br/>
            </div>
            <h4>Categories</h4>
            <div className="filters">
                <Categories products={products} changeProductArray={changeProductArray}/>
            </div>
            <h4>Brands</h4>
            <div className="filters">
                <BrandNames products={products} changeProductArray={changeProductArray}/>
            </div>
        </ div>
    )
}
