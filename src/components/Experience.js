import React, {Component} from "react";
import uniqid from "uniqid";

export default class Experience extends Component {
    constructor() {
        super();
    
        this.state = {
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        experience: [
            {
                id: uniqid(),
                company: "Dummy LLC",
                title: "CEO",
                date: "12/2000 - 13/2100",
                location: "Dummy location",
                description: "Corpa",
            }
        ],
        edit: false,
    }
    }

    onSubmitExperience = e => {
        e.preventDefault();
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.company,
                title: this.state.title,
                date: this.state.startDate + " + " + this.state.endDate,
                location: this.state.location,
                description: this.state.description
            }),
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        })
        this.toggleEdit()
    }

    toggleEdit = e => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleCompanyChange = e => {
        this.setState({
            company: e.target.value
        })
    }

    handleDescriptionChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    handleEndDateChange = e => {
        this.setState({
            endDate: e.target.value
        })
    }

    handleStartdateChange = e => {
        this.setState({
            startDate: e.target.value
        })
    }

    handleLocationChange = e => {
        this.setState({
            location: e.target.value
        })
    }

    handleRemove = key => {
        const newExp = this.state.experience.filter(exp => exp.id !== key)
        
        this.setState({
            experience: newExp
        })
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        const {
            company,
            title,
            startDate,
            endDate,
            location,
            description,
            experience,
            edit,
        } = this.state;

        return(
            <div id="Experience">
                <h2>Experience</h2>
                {experience.map(exp => {
                    return(
                        <div key={exp.id} onClick={() => this.handleRemove(exp.id)}>
                            <div>
                                <p className="exp-date">{exp.date}</p>
                                <p className="exp-title">{exp.title}</p>
                            </div>
                            <div>
                                <p className="exp-company">{exp.company}</p>
                                <p className="exp-location">{exp.location}</p>
                                <p className="exp-description">{exp.description}</p>
                            </div>
                        </div>
                    )
                })}

                <button type="button" onClick={this.toggleEdit}>
                    Add
                </button>

                {edit &&
                    <form id="experience-add" className="edit-form">
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            value={company}
                            id="company"
                            onChange={this.handleCompanyChange}
                        >
                        </input>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            value={title}
                            id="title"
                            onChange={this.handleTitleChange}
                        >
                        </input>
                        <label htmlFor="startDate">Starting Date</label>
                        <input
                            type="date"
                            value={startDate}
                            id="startDate"
                            onChange={this.handleStartdateChange}
                        >
                        </input>
                        <label htmlFor="endDate">endDate</label>
                        <input
                            type="date"
                            value={endDate}
                            id="endDate"
                            onChange={this.handleEndDateChange}
                        >
                        </input>
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            value={location}
                            id="location"
                            onChange={this.handleLocationChange}
                        >
                        </input>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            value={description}
                            id="company"
                            onChange={this.handleDescriptionChange}
                        >
                        </input>
                        <button type="button" onClick={this.onSubmitExperience}>
                            Add
                        </button>
                        <button type="button" onClick={this.toggleEdit}>
                            Close
                        </button>
                    </form>
                }

            </div>

        )
    }
}