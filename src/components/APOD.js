import React, {
    useState,
    useEffect
} from "react";
import axios from "axios";
import ImgCard from "./ApodCard";

export default function Apod() {
    const [pod, setPod] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=50ybZCFVhLHWeuIXuhWG1AzwyAIQTDhJUYWLCCNA`)
            .then(response => {
                // console.log(response.data)
                setPod(response.data)
            })
            .catch(e => {
                console.log(`Encountered an error`, e)
            })
    }, []);

    return (
        <div>
            <ImgCard
                title={pod.title}
                description={pod.explanation}
                date={pod.date}
                imgUrl={pod.url}
            />
        </div>
    );
}