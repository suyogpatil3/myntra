import React from 'react'
import Categories from '../Components/Categories';
import BrandNames from '../Components/BrandNames';
import {useState} from 'react';
import Button from '../Components/ButtonStyled';
// import Brands from './Brands';


export default function SideBar({products,allProducts,changeProductArray}) {
    const[selectedGender,setSelectedGender] = useState(false);
    const [checkedValue, setIsChecked] = useState("");
    let filteredProducts=[];
    const brand = "brand";
    const category = "category";
    function filterItems (event) {
        let filterValue = event.target.value;
        console.log(filterValue);
        filterValue = filterValue;
        setIsChecked(filterValue);
             filteredProducts = products.filter((product) =>{
                return product.gender.includes(filterValue);
              })
     changeProductArray(filteredProducts);
    }
    let onClearAllFilters = (event) =>{
        // window.location.reload();
        let checkboxes = document.querySelectorAll(`input`);
        checkboxes.forEach(check => {
            if(check.type=="checkbox" || check.type=="radio"){
                check.checked = false;
            }
        });
        changeProductArray(allProducts);
    }

    let onSelectAll = (event) =>{
        let selectValue = event.target.id;
        let checkboxes = document.querySelectorAll(`input`);
        checkboxes.forEach(check => {
            if(check.name==selectValue){
                check.checked = true;
            }
        });
    }
    
    return (
        <div className="sideBar"> 
            <div className="filterGroup">
                <h4>Filters</h4><Button onClick={onClearAllFilters}>Clear All</Button>
            </div>
            <div className="genders" >
                <input type="radio" value="Men" checked={checkedValue == "Men"} onChange={filterItems}/>  <label>Men/Boys</label><br/>
                <input type="radio" value="Women" checked={checkedValue == "Women"} onChange={filterItems}/>  <label>Women/Girls</label><br/>
            </div>
            <div className="filterGroup">
                <h4 className="filterHeading">Categories</h4><Button onClick={onSelectAll} id="category">Select All</Button>
            </div>
            <div className="filters">
                <Categories products={products} changeProductArray={changeProductArray}/>
            </div>
            <div className="filterGroup">
                <h4 className="filterHeading">Brands</h4><Button onClick={onSelectAll} id="brand">Select All</Button>
            </div>
            <div className="filters">
                <BrandNames products={products} changeProductArray={changeProductArray}/>
            </div>
        </ div>
    )
}
