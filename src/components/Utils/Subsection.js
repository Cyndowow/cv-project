import React from "react";

const Subsection = ({title, children}) => {
    return(
        <div className="subsection">
            <h4 className="subheader">{title}</h4>
            <div className="subchildren">{children}</div>
        </div>
    )
}

export default Subsection;