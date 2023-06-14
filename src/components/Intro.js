import React, { Component } from "react";

export default class Intro extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            title: "",
            profile: "",
            edit: false,
        }
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleProfileChange = e => {
        this.setState({
            profile: e.target.value
        })
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {
        const {name, title, profile, edit} = this.state;

        return(
            <div id="Intro">
                <h1>{name ? name : "Your Name"}</h1>
                <p className="title">{title ? title : "Your Title"}</p>
                <h2>Profile</h2>
                <p className="profile">{profile ? profile : "Describe yourself here"}</p>
                <button className="edit-toggle" type="button" onClick={this.toggleEdit}>Edit</button>

                {edit &&
                    <form id="intro-edit" className="edit-form">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            onChange={this.handleNameChange}
                        ></input>
                        <label htmlFor="title">Your Title</label>
                        <input
                            type="text"
                            id="title"
                            onChange={this.handleTitleChange}
                        ></input>
                        <label htmlFor="profile">Your Profile</label>
                        <textarea
                            id="profile"
                            onChange={this.handleProfileChange}
                        ></textarea>
                        <button type="button" onClick={this.toggleEdit}>Close Edit</button>
                    </form>
                }
            </div>
        )
    }
}