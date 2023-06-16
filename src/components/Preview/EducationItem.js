import React from "react";
import Subsection from "../Utils/Subsection";

const EducationItem = ({ educationItem }) => {
    return(
        <div className="education-wrapper">
            <div className="period">
                {educationItem.from} - {educationItem.to}
            </div>
            <div className="info">
                <Subsection title={`${educationItem.universityName}, ${educationItem.city}`}>
                    <p>Degree: {educationItem.degree}</p>
                    <p>Subject: {educationItem.subject}</p>
                </Subsection>
            </div>
        </div>
    )
}

export default EducationItem;