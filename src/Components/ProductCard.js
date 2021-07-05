import React from 'react'

export default function ProductCard({name,brand,imgSrc,price,mrp}) {
    return (
        <div >
             <div className="cardDesign grow">
                <img src={imgSrc} alt={name}/>
                <div>
                    <div className="brandName">
                    <h5>{brand}</h5>
                    <p className="description"> {name}</p>
                    </div>
                    <div className="prices">
                    <span className="price"><i class="fas fa-rupee-sign priceRs"></i><span>{price}</span></span><span className="mrp"><i class="fas fa-rupee-sign mrpRs"/>{mrp}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
