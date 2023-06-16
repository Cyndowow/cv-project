import React from "react";

const Section = ({
    title,
    children,
    direction
}) => {
    return(
        <div className="section">
            <h3 className="title">{title}</h3>
            <div className="children" direction={direction}>{children}</div>
        </div>
    )
}

export default Section