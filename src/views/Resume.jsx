import { LeftSide, RightSide } from "../components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Resume = function () {
    const [data, setData] = useState({})
    const {name} = useParams();

    useEffect(() => {
      axios.get(`/api/resume/${name}`)
        .then(response => {
            setData(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="resume-page">
            <LeftSide data={data} />

            <RightSide data={data} />
        </div>
    )
}