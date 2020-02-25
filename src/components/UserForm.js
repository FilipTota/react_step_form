import React, { Component } from 'react'
import UserDetails from './UserDetails'
import PersonalUserDetails from './PersonalUserDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const {step} = this.state
        const {firstname, lastname, email, occupation, city, bio} = this.state
        const values = {firstname, lastname, email, occupation, city, bio}
        switch(step) {
            case 1:
                return(
                    <UserDetails handleChange={this.handleChange} values={values} nextStep={this.nextStep} />
                )
            case 2:
                return(
                    <PersonalUserDetails handleChange={this.handleChange} values={values} nextStep={this.nextStep} prevStep={this.prevStep} />
                )
            case 3:
                return(
                    <Confirm values={values} nextStep={this.nextStep} prevStep={this.prevStep}/>
                )
            case 4:
                return(
                    <Success />
                )
            default:
                break
        }
    }
}

export default UserForm