import React from "react";
import Subsection from "../Utils/Subsection";

const ExperienceItem = ({ experienceItem }) => {
    return(
        <div className="education-wrapper">
            <div className="period">
                {experienceItem.from} - {experienceItem.to}
            </div>
            <div className="info">
                <Subsection title={experienceItem.position}>
                    <div>
                        {experienceItem.company}, {experienceItem.city}
                    </div>
                </Subsection>
            </div>
        </div>
    )
}

export default ExperienceItem;