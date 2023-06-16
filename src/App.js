import React, { useState, useRef }from "react";
import uniqid from "uniqid";
import CVForm from "./components/CVForm";
import Preview from "./components/Preview/Preview";
import EmptyCV from "./components/Utils/EmptyCV";
import ExampleCV from "./components/Utils/ExampleCV";
import "./styles.css"


function App() {

  const [cv, setCv] = useState(EmptyCV);

  const handleChangeGeneral = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      }
    }))
  }

  const handleChangeExperience = (e, id) => {
    const {name, value} = e.target;

    setCv((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return {...experienceItem, [name]: value}
        }
        return experienceItem;
      })
      return {...prevState, experience: [...newExperience]}
    })
  }

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uniqid(),
          position: "",
          company: "",
          city: "",
          from:"",
          to: "",
        }
      ]
    }))
  }

  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      )
      return {...prevState, experience: [...newExperience]}
    })
  }

  const handleChangeEducation = (e, id) => {
    const {name, value} = e.target;

    setCv((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return {...educationItem, [name]: value}
        }
        return educationItem;
      })
      return {...prevState, education: [...newEducation]}
    })
  } 

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uniqid(),
          universityName: "",
          city: "",
          degree:"",
          subject: "",
          from: "",
          to: "",
        }
      ]
    }))
  }

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      )
      return {...prevState, education: [...newEducation]}
    })
  }

  const handleLoadExample = () => {
    setCv(ExampleCV);
  }

  const handleReset = () => {
    setCv(EmptyCV)
  }

  const componentRef = useRef();

  return (
    <div className="App">
      <CVForm 
        cv={cv}
        onChangeGeneral={handleChangeGeneral}
        onChangeEducational={handleChangeEducation}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onDeleteExperience={handleDeleteExperience}
        onLoadExample={handleLoadExample}
        onReset={handleReset}
      />
      <Preview cv={cv} ref={componentRef} />
    </div>
  );
}

export default App;
