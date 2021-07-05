import React from 'react';
import ProductCard from '../Components/ProductCard';

export default function ProductArea({products,clearSearchField}) {
    return (
        <>
        <div className="App">
            {(products.length>0) ? products.map((pro,i) =>{
          return<ProductCard id={pro.productId} 
                      name={pro.productName} 
                      brand={pro.brand}
                      key ={pro.productId}
                      price ={pro.price}
                      mrp ={pro.mrp}
                      imgSrc ={pro.searchImage}/>
          }
          )
          : <h1 className="noProducts">No Products found for this item !!</h1>
        }
        </div>
        </>
    )
}
