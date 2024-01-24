import React from "react";
import Van from "./Van"

export default function Vans(){
    const [vansData, setVansData] = React.useState([]);

    
    React.useEffect(() => {
        fetch("/api/vans")
            .then( res => res.json() )
            .then( data => setVansData(data.vans))
    },[])

    
    let vanElements = vansData.map( van => (
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
                <button className="van--btn" >Simple</button>
                <button className="van--btn" >Luxury</button>
                <button className="van--btn" >Rugged</button>
                <button className="van--btn clear">Clear filters</button>
            </div>
            <div className="cards">
                {vanElements}
            </div>
        </div>
        
    )
}