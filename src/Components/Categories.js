import React from 'react'
import Filters from './Filters';
import {useState} from 'react';

export default function Categories({products,changeProductArray}) {
    const[selectedFilterArray,setSelectedFilterArray] = useState([]);
    let filterItems = (event) =>{
        let filterValue = event.target.value;
            let  filteredProducts = products.filter((product) =>{
                    return product.category.toLowerCase().includes(filterValue.toLowerCase());
                  })
                  let newArray = selectedFilterArray.concat(filteredProducts);
                  setSelectedFilterArray(newArray)
            changeProductArray(newArray);
    }
    return (
        <div>
            {products.map((pro,i) =>{
          return<Filters name={pro.category}
                      key ={pro.productId}
                      filterItems={filterItems}
                      />
          }
          )
        }
        </div>
    )
}
