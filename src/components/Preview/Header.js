import React from "react";

const Header = ({ personalInfo }) => {
    const { firstName, lastName, title} = personalInfo;

    return(
        <div className="header-wrapper">
            <h1>
                {firstName} {lastName}
            </h1>
            <p>{title}</p>
        </div>
    )
}

export default Header;