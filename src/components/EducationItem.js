import React from "react";
import Input from "./Utils/Input";
import Button from "./Utils/Button";

const EducationItem = ({ id, educationItem, onChange, onDelete}) => {
    return(
        <>
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="universityName"
                placeholer="University Name"
                value={educationItem.universityName}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="city"
                placeholer="City"
                value={educationItem.city}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="degree"
                placeholer="degree"
                value={educationItem.degree}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="subject"
                placeholer="Subject"
                value={educationItem.subject}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="from"
                placeholer="From"
                value={educationItem.from}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="to"
                placeholer="To"
                value={educationItem.to}
            />
            <Button text="Delete" onClick={() => onDelete(id)}></Button>
        </>
    )
}

export default EducationItem;