import React, {Component} from "react";

class General extends Component {
    constructor() {
        super()
    
        this.state = {
            photo: "https://animalcrossingwiki.de/_media/nachbarn/dietmar/dietmar_nh.png?w=300&h=300&tok=77a220",
            name: "",
            date: "",
            email: "",
            phone: "",
            address1: "",
            address2: "",
            website: "",
            edit: false,
            editPhoto: false,
        }
    }

    handlePhotoChange = (e) => {
        this.setState({
            photo: e.target.value
        })
    }

    handleAddress1Change = (e) => {
        this.setState({
            address1: e.target.value
        })
    }

    handleAddress2Change = (e) => {
        this.setState({
            address2: e.target.value
        })
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleWebsiteChange = (e) => {
        this.setState({
            website: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    toggleEditPhoto = () => {
        this.setState(prevState => ({
            editPhoto: !prevState.editPhoto
        }))
    }

    render() {
        const {photo, name, date, email, phone, address1, address2, website, edit, editPhoto} = this.state

        const portrait = {
            backgroundImage: 'url(' + photo + ')'
        }
        return(
            <div id="info">
                <div className="header">Resume</div>
                <div 
                    id="photo"
                    style={portrait}
                    onClick={this.toggleEditPhoto}
                ></div>
                <div className="name">
                    <p className="fullName">{name ? name: "Dummy Name"}</p>
                </div>
                <div className="date">
                    <p className="date__birth">{date ? date: "Date of Birth"}</p>
                </div>
                <div className="address">
                    <p>Address:</p>
                    <p>{address1 ? address1 : "Dummy address"}</p>
                    <p>{address2 ? address2 : "Dummy Postcode"}</p>
                </div>
                <div className="email">
                    <p>{email ? email : "E-mail@website.com"}</p>
                </div>
                <div className="phone">
                    <p>{phone ? phone: "123456789"}</p>
                </div>
                <div className="website">
                    <p>{website ? website : "website.com"}</p>
                </div>
                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>

                {edit &&
                    //<dialog>
                        <form className="edit-form" id="general-form">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Name here..."
                                onChange={this.handleNameChange}
                            ></input>
                            <label htmlFor="date">Date of Birth</label>
                            <input
                                id="date"
                                type="date"
                                placeholder="01.01.1999"
                                onChange={this.handleDateChange}
                            ></input>
                            <label htmlFor="address1">Address 1</label>
                            <input
                                id="address1"
                                type="text"
                                placeholder="Your street here..."
                                onChange={this.handleAddress1Change}
                            ></input>
                            <label htmlFor="address2">Address 2</label>
                            <input
                                id="address2"
                                type="text"
                                placeholder="Your postcode here..."
                                onChange={this.handleAddress2Change}
                            ></input>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="your@email.here"
                                onChange={this.handleEmailChange}
                            ></input>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="123456789"
                                onChange={this.handlePhoneChange}
                            ></input>
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                type="text"
                                placeholder="your.website"
                                onChange={this.handleWebsiteChange}
                            ></input>
                            <button
                                type="button"
                                onClick={this.toggleEdit}
                            >
                                Save Edit
                            </button>
                        </form>
                    //</dialog>
                }

                {editPhoto &&
                    <form className="edit-form" id="photo-edit">
                        <label htmlFor="photo">Photo URL</label>
                        <input
                            id="photo"
                            type="text"
                            onChange={this.handlePhotoChange}
                        >
                        </input>

                        <button
                            type="button"
                            onClick={this.toggleEditPhoto}
                        >
                            Save Photo
                        </button>
                    </form>
                }
            </div>
        )
    }
}

export default General;