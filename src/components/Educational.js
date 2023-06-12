import React, {Component} from "react";
import uniqid from "uniqid";

export default class Educational extends Component {
    constructor() {
        super()

        this.state = {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
            grade: "",
            education: [
                {
                    id: uniqid(),
                    school: "Dummy school",
                    degree: "Dummy degree",
                    date: "Dummy 2000 - Dummy 2003",
                    location: "Dummy location",
                    grade: "1,0",
                }
            ],
            edit: false,
        }
    }

    handleDegreeChange = e => {
        this.setState({
            degree: e.target.value
        })
    }

    handleStartDateChange = e => {
        this.setState({
            startDate: e.target.value
        })
    }

    handleEndDateChange = e => {
        this.setState({
            endDate: e.target.value
        })
    }

    handleGradeChange = e => {
        this.setState({
            grade: e.target.value
        })
    }

    handleLocationChange = e => {
        this.setState({
            location: e.target.value
        })
    }

    handleRemove = key => {
        const newEdu = this.state.education.filter(education => education.id !== key)

        this.setState({
            education: newEdu
        })
    }

    handleSchoolChange = e => {
        this.setState({
            school: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    onSubmitEducation = e => {
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                id: uniqid(),
                school: this.state.school,
                degree: this.state.degree,
                date: this.state.startDate + " + " + this.state.endDate,
                location: this.state.location,
                grade: this.state.grade
            }),
            school: "",
            degree: "",
            date: "",
            startDate: "",
            endDate: "",
            location: "",
            grade: "",

        })
        this.toggleEdit()
    }


    render() {
        const {
            school,
            degree,
            startDate,
            endDate,
            location,
            grade,
            education,
            edit
        } = this.state
        return(
            <div id="Education">
                <h2>Education</h2>
                {education.map(edu => {
                    return(
                        <div key={edu.id} onClick={() => this.handleRemove(edu.id)}> 
                            <div>
                                <p className="edu-date">{edu.date}</p>
                                <p className="edu-degree">{edu.degree}</p>
                            </div>
                            <div>
                                <p className="edu-school">{edu.school}</p>
                                <p className="edu-location">{edu.location}</p>
                                <p className="edu-grade">{edu.grade}</p>
                            </div>
                        </div>
                    )
                })}
                <button className="edit-toggle" onClick={this.toggleEdit} type="button">
                    Add
                </button>

                {edit &&
                    <form id="education-add" className="edit-form">
                        <label htmlFor="school">School</label>
                        <input
                            id="school"
                            type="text"
                            value={school}
                            onChange={this.handleSchoolChange}
                        ></input>
                        <label htmlFor="degree">Degree</label>
                        <input
                            id="degree"
                            type="text"
                            value={degree}
                            onChange={this.handleDegreeChange}
                        ></input>
                        <label htmlFor="startDate">Starting Date</label>
                        <input
                            id="startDate"
                            type="date"
                            value={startDate}
                            onChange={this.handleStartDateChange}
                        ></input>
                        <label htmlFor="endDate">Ending Date</label>
                        <input
                            id="endDate"
                            type="date"
                            value={endDate}
                            onChange={this.handleEndDateChange}
                        ></input>
                        <label htmlFor="location">Location</label>
                        <input
                            id="location"
                            type="text"
                            value={location}
                            onChange={this.handleLocationChange}
                        ></input>
                        <label htmlFor="grade">Grade</label>
                        <input
                            id="grade"
                            type="text"
                            value={grade}
                            onChange={this.handleGradeChange}
                        ></input>
                        <button
                            type="button"
                            onClick={this.onSubmitEducation}
                        >
                            Add Education
                        </button>
                        <button
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close
                        </button>
                    </form>
                }
            </div>
        )
    }
}