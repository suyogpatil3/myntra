import React from 'react';
import ProductCard from './ProductCard';

export default function ProductArea({products}) {
    return (
        <>
        <div className="App">
            {products.map((pro,i) =>{
          return<ProductCard id={pro.productId} 
                      name={pro.productName} 
                      brand={pro.brand}
                      key ={pro.productId}
                      price ={pro.price}
                      mrp ={pro.mrp}
                      imgSrc ={pro.searchImage}/>
          }
          )
        }
        </div>
        </>
    )
}
