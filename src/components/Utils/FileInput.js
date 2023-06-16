import React from "react";

const FileInput = ({ label, name, onChange}) => {
    return(
        <label className="label">
            <input className="file-input" type="file" onChange={onChange} name={name} />
            {label}
        </label>
    )
}

export default FileInput;