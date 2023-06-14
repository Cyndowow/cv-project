import React, {Component} from "react";
import uniqid from "uniqid"

export default class Skills extends Component {
    constructor() {
        super();

        this.state = {
            skill: "",
            skills: [
                {
                    id: uniqid(),
                    skill: "Dummy Skill 1"
                }
            ],
            edit: false,
        }
    }

    handleSkillChange = e => {
        this.setState({
            skill: e.target.value
        })
    }

    onSubmitSkill = e => {
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat({
                id: uniqid(),
                skill: this.state.skill
            }),
            skill: "",
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = key => {
        const newSkills = this.state.skills.filter(skill => skill.id !== key)

        this.setState({
            skills: newSkills
        })
    }

    render() {
        const {skill, skills, edit} = this.state;

        return(
            <div id="Skills">
                <h2>Skills</h2>
                <ul>
                    {skills.map(skill => {
                        return(
                            <li key={skill.id} onClick={() => this.handleRemove(skill.id)}>{skill.skill}</li>
                        )
                    })}
                </ul>

                <button className="edit-toggle" type="button" onClick={this.toggleEdit}>Edit</button>
                    
                {edit &&
                    <form id="skill-add" className="edit-form">
                        <label htmlFor="skill">Skill</label>
                        <input
                            id="skill"
                            type="text"
                            value={skill}
                            onChange={this.handleSkillChange}
                        ></input>
                        <button type="button" onClick={this.onSubmitSkill}>
                            Add Skill
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