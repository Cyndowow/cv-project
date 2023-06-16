import uniqid from "uniqid";

const EmptyCV = {
    personalInfo: {
        firstName: "",
        lastName: "",
        title: "",
        photo: null,
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
    },
    experience: [
        {
            id: uniqid(),
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
        },
    ],
    education: [
        {
            id: uniqid(),
            universityName: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: "",
        }
    ]
}

export default EmptyCV;