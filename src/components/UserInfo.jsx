import { useContext } from "react";
import { ResumeContext } from "../context/resume";

export const UserInfo = function () {
    const data = useContext(ResumeContext);

    return (
        <p className="contact-details">
            Call: {data.phone} or
            <br/>
            Email: {data.email}
        </p>
    )
}