import React from "react";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

const Preview = ({cv}) => {
    return(
        <div className="preview">
            <Header personalInfo={cv.personalInfo}></Header>
            <Content 
                personalInfo={cv.personalInfo}
                experience={cv.experience}
                education={cv.education}
            />
            <Sidebar personalInfo={cv.personalInfo}/>
        </div>
    )
}

export default Preview;