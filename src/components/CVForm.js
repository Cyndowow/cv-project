import React from "react";
import General from "./General";
import Experience from "./Experience";
import Educational from "./Educational";
import Button from "./Utils/Button"

const CVForm = ({
    cv,
    onChangeGeneral,
    onChangeExperience,
    onChangeEducational,
    onAddExperience,
    onAddEducation,
    onDeleteExperience,
    onDeleteEducation,
    onLoadExample,
    onReset,
}) => {
    return(
        <div className="form-wrapper">
            <General  personalInfo={cv.personalInfo} onChange={onChangeGeneral}/>
            <Experience 
                experience={cv.experience}
                onChange={onChangeExperience}
                onAdd={onAddExperience}
                onDelete={onDeleteExperience}
            />
            <Educational 
                education={cv.education}
                onChange={onChangeEducational}
                onAdd={onAddEducation}
                onDelete={onDeleteEducation}
            />
            <>
                <Button text="Load Example" onClick={onLoadExample}></Button>
                <Button text="Reset" onClick={onReset}></Button>
            </>
        </div>
    )
}

export default CVForm;