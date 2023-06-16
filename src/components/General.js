import React from "react";
import Section from "./Utils/Section";
import Input from "./Utils/Input";
import TextArea from "./Utils/TextArea";
import FileInput from "./Utils/FileInput";

const General = ({personalInfo, onChange}) => {
    return(
        <Section title="Personal Information" >
            <Input 
                onChange={(e) => onChange(e)}
                type="text"
                name="firstName"
                placeholer="First Name"
                value={personalInfo.firstName}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="lastName"
                placeholer="Last Name"
                value={personalInfo.lastName}
            />
            <Input 
                onChange={(e) => onChange(e)}
                type="text"
                name="title"
                placeholer="Title"
                value={personalInfo.title}
            />
            <FileInput 
                onChange={(e) => onChange(e)}
                name="photo"
                label="Photo"
                value={personalInfo.photo}
            />
            <Input 
                onChange={(e) => onChange(e)}
                type="text"
                name="address"
                placeholer="Address"
                value={personalInfo.address}
            />
            <Input 
                onChange={(e) => onChange(e)}
                type="text"
                name="phoneNumber"
                placeholer="Phone number"
                value={personalInfo.phoneNumber}
            />
            <Input 
                onChange={(e) => onChange(e)}
                type="text"
                name="email"
                placeholer="E-Mail"
                value={personalInfo.email}
            />
            <TextArea 
                onChange={(e) => onChange(e)}
                name="description"
                placeholder="Description"
                value={personalInfo.description}
            />
        </Section>
    )
}


export default General;