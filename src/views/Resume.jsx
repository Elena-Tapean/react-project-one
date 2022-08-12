import { LeftSide, RightSide } from "../components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ResumeContext } from "../context/resume";

export const Resume = function () {
    const [data, setData] = useState({})
    const {name} = useParams();

    useEffect(() => {
      axios.get(`/api/resume/${name}`)
        .then(({data}) => {
            setData(data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="resume-page">
            <ResumeContext.Provider value={data}>
            <LeftSide />
            <RightSide />
            </ResumeContext.Provider>
        </div>
    )
}