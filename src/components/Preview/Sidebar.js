import React from "react";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";

const Sidebar = ({ personalInfo }) => {
    return(
        <div className="sidebar-wrapper">
            <img src={personalInfo.photo} alt="portrait of person"></img>
            <Section title="Personal Details" >
                <Subsection title="Address">{personalInfo.address}</Subsection>
                <Subsection title="Phone Number">{personalInfo.phoneNumber}</Subsection>
                <Subsection title="Email">{personalInfo.email}</Subsection>
            </Section>
        </div>
    )
}

export default Sidebar;