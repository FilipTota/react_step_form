import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault()
        // process form //
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const {values: {firstname, lastname, email, occupation, city, bio}} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Details" />
                    <List>
                        <ListItem primaryText="First Name" secondaryText={firstname} />
                        <ListItem primaryText="Last Name" secondaryText={lastname} />
                        <ListItem primaryText="Email" secondaryText={email} />
                        <ListItem primaryText="Occupation" secondaryText={occupation} />
                        <ListItem primaryText="City" secondaryText={city} />
                        <ListItem primaryText="Bio" secondaryText={bio} />
                    </List>
                    <RaisedButton label="Continue & Confirm" primary={true} styles={styles} onClick={this.continue} />
                    <RaisedButton label="Back" primary={false} styles={styles} onClick={this.back} />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm