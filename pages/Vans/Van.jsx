import React from "react";
import {Link} from "react-router-dom"

export default function van(props){
    
    return(
        <Link to={`/vans/${props.id}`} className="van-links" aria-label={`View details for ${props.name} price at $${props.price} per day`}>
            <div className="card">
                <img className="card--img"src={props.imgUrl} alt="" />
                <div className="card--details">
                    <div>
                        <p>{props.name}</p>
                        <p>${props.price}<br/><span>/day</span></p>
                    </div>
                    <i className={props.type}>{props.type}</i>
                </div>
            </div>
        </Link>
    )
}