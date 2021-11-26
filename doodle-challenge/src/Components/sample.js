import React from "react";
import data from '../json/productData.json'

export default function Sample() {
    const result = data.data;
    
    return (
        <div>
            {result.map((ele => {
                return(
                <img alt={ele.catagoey} src={ele.image} />
            )}))}
        </div>
    )
}