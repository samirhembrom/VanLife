import React from "react";
import { Link } from "react-router-dom";

export default function Vans(){
    const [vans,setVans] = React.useState([]);
    React.useEffect(()=>{
        fetch("/api/host/vans")
            .then(res=> res.json())
            .then(data=>setVans(data.vans))
    },[])

    const vanList = vans.map( van => (
        <Link to={van.id} key={van.id}>
            <div key={van.id}>
                <img className="van-img" src={van.imageUrl} alt="" />
                <div>
                    <p className="van-name">{van.name}</p>
                    <p className="van-price">${van.price}/day</p>
                </div>  
            </div>
        </Link>
    ))

    return (
        <div className="vanslist">
            <h1>Your Listed vans list</h1>
            <div className="vanslist--card">
                { vans.length > 0 ? (
                    <section>
                        {vanList}
                    </section>
                ): (
                    <h2>Loading</h2>
                )
            }
            </div>
        </div>
        
    )
}