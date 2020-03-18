import React, {
    useState,
    useEffect
} from "react";
import axios from "axios";
import Apod from "./APOD";

const ImgCard = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.imgUrl} alt={props.title} />
            <h3>{props.date}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ImgCard;