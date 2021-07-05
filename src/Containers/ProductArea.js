import React from 'react';
import ProductCard from '../Components/ProductCard';
import errorImg from '../Components/eImg.svg'

export default function ProductArea({products,searchfield}) {
    return (
        <>
        <div className="App">
            {(products.length==0 && searchfield.length!=0) ? <div>
            
            <h1 className="noProducts">No Products found for this item !!
            </h1>
            <img style={{width:"500px"}} src = {errorImg}/>
            </div>
            
          : products.map((pro,i) =>{
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
