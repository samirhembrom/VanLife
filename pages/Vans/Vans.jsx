import React from "react";
import Van from "./Van"
import { Link, useSearchParams } from "react-router-dom";

export default function Vans(){

    const [searchParams, setSearchParams]  = useSearchParams();
    const typeFilter = searchParams.get("type")
    const [vansData, setVansData] = React.useState([]);
    
    React.useEffect(() => {
        fetch("/api/vans")
            .then( res => res.json() )
            .then( data => setVansData(data.vans))
    },[])

    const displayVans = typeFilter ? 
            vansData.filter( van => van.type.toLowerCase() === typeFilter ) :
            vansData;

    let vanElements = displayVans.map( van => (
            <Van 
            key={van.id} 
            id={van.id}
            name={van.name}
            imgUrl={van.imageUrl}
            price={van.price}
            type={van.type}
            />
            ))
    
    // function simpleF() {
    //     const res = vansData.filter( van => van.type === "simple")
    //     console.log(res);
    //     setVansData(res);
    // }

    // function luxuryF() {
    //     const res = vansData.filter( van => van.type === "luxury")
    //     console.log(res);
    //     setVansData(res);
    // }

    // function ruggedF() {
    //     const res = vansData.filter( van => van.type === "rugged")
    //     console.log(res);
    //     setVansData(res);
    // }

    return (
        <div className="vans-container">
            <h1>Explore our van options</h1>
            <div className="van--filters">
                <div className="van-list-filter-buttons">
                <button className={typeFilter === "simple" ? ` van-type simple selected` : `van-type simple` } onClick={()=>setSearchParams({type:"simple"})}>Simple</button>
                </div>
                <div className="van-list-filter-buttons">
                <button className={typeFilter === "luxury" ? ` van-type luxury selected` : `van-type luxury` } onClick={()=>setSearchParams({type:"luxury"})}>Luxury</button>
            
                </div>
                <div className="van-list-filter-buttons">
                <button className={typeFilter === "rugged" ? ` van-type rugged selected` : `van-type rugged` } onClick={()=>setSearchParams({type:"rugged"})}>Rugged</button>
            
                </div>
                <div className="van-list-filter-buttons" onClick={()=>setSearchParams({})}>
                {typeFilter && <button className="van-type clear-filters">Clear Filters</button>}
            
                </div>
            </div>
            <div className="cards">
                {vanElements}
            </div>
        </div>
        
    )
}