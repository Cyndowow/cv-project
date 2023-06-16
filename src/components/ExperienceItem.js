import React from "react";
import Input from "./Utils/Input";
import Button from "./Utils/Button";

const ExperienceItem = ({ id, experienceItem, onChange, onDelete}) => {
    return(
        <>
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="position"
                placeholer="Position"
                value={experienceItem.position}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="company"
                placeholer="Company"
                value={experienceItem.company}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="city"
                placeholer="City"
                value={experienceItem.city}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="from"
                placeholer="From"
                value={experienceItem.from}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type="text"
                name="to"
                placeholer="To"
                value={experienceItem.to}
            />
            <Button text="Delete" onClick={() => onDelete(id)}></Button>
        </>
    )
}

export default ExperienceItem;