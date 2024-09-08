import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const[data, setData] =useState(0)
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>res.setData(res[currency]))/*res[currency] ke jgh pe res.{currency} bhi use kar skte hai */
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo; 