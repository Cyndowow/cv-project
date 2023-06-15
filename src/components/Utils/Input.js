import React from "react";

const Input = ({type, name, placeholer, onChange, value}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholer}
            onChange={onChange}
            value={value}
        >
        </input>
    )
}

export default Input;