import { LeftSide, RightSide } from "../components";
import { useParams } from "react-router-dom";
import { ResumeContext } from "../context/resume";
import { useResume } from "../store/resume";

export const Resume = function () {
    const {name} = useParams();
    const {status, data} = useResume(name);

    return (
        <div className="resume-page">
            {
                status === 'fetching'
                ? <h1>Loading</h1>
                : status === 'error'
                ? <h1>Error</h1>
                : <ResumeContext.Provider value={data}>
                    <LeftSide />
                    <RightSide />
                  </ResumeContext.Provider>
            }
        </div>
    )
}