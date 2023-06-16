import React from "react";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import Section from "../Utils/Section";

const Content = ({ personalInfo, experience, education }) => {
    const experienceItems = experience.map((experienceItem) => (
        <ExperienceItem key={experience.id} experienceItem={experienceItem}/>
    ))

    const educationItems = education.map((educationItem) => (
        <EducationItem key={education.id} educationItem={educationItem} />
    ))

    return(
        <div className="content-wrapper">
            <Section title="Description">
                <div className="description">{personalInfo.description}</div>
            </Section>
            <Section title="Experience" direction="column">
                {experienceItems}
            </Section>
            <Section title="Education" direction="column">
                {educationItems}
            </Section>
        </div>
    )
}

export default Content;