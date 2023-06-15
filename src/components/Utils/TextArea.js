import React from "react";

const TextArea = ({onChange, name, placeholder, value}) => {
    return(
        <textarea onChange={onChange} name={name} placeholder={placeholder} value={value}>

        </textarea>
    )
}

export default TextArea;