import uniqid from "uniqid";

const ExampleCV = {
    personalInfo: {
        firstName: "Clay",
        lastName: "Dietmar",
        title: "Overlord",
        photo: null,
        address: "Your island",
        phoneNumber: "555-123456",
        email: "dietmar@ac.com",
        description: "The only real overlord over this world is a hamster!",
    },
    experience: [
        {
            id: uniqid(),
            position: "World Overlord",
            company: "World Domination LLC",
            city: "Island",
            from: "0",
            to: "2023",
        },
    ],
    education: [
        {
            id: uniqid(),
            universityName: "Overlord College",
            city: "Island",
            degree: "Masters",
            subject: "World Domination",
            from: "-1",
            to: "0",
        }
    ]
}

export default ExampleCV;