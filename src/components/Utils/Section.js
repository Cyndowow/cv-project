import React from "react";

const Section = ({
    title,
    children,
}) => {
    return(
        <div className="section">
            <h3 className="title">{title}</h3>
            <div className="children" >{children}</div>
        </div>
    )
}

export default Section