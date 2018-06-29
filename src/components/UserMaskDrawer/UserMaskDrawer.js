import React, { Component } from 'react';

import classes from './../FilterDrawer/FilterDrawer.css'

const universities = [
  'FU Berlin',
  'TU Berlin',
  'HU Berlin'
]

class UserMaskDrawer extends Component {
  constructor () {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      university: "",
      status: ""
    }
  }

  handleChange (stateCallback) {
    return (event) => stateCallback(event.target.value);
  }

  checkData () {
    const {
      userName
    } = this.state;

    return (
      userName.length >= 6
      && userName.length <= 20
    )
  }

  handleSubmit (event) {
    event.preventDefault();

    if (this.checkData()) {
      console.log('Everything allright');
      // here comes a callback function for submit
    } else {
      console.log('ERROR in form arguments');
    }
  }

  render () {
    const { open } = this.props;

    const {
      firstName,
      lastName,
      userName,
      university,
      status
    } = this.state;

    const mergedClasses = [
      classes.FilterDrawer,
      open ? classes.Open : classes.Close
    ]

    const universityOptions = universities.map((item) => (
      <option key={item} value={item}>{item}</option>
    ))

    const changeFirstName = (value) => this.setState({ firstName: value });
    const changeLastName = (value) => this.setState({ lastName: value });
    const changeUserName = (value) => this.setState({ userName: value });
    const changeUniversity = (value) => this.setState({ university: value });
    const changeStatus = (value) => this.setState({ status: value });

    return (
      <div className={mergedClasses.join(' ')}>
        <h2>Benutzer erstellen</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Vorname:
            <input
              type="text"
              value={firstName}
              onChange={this.handleChange(changeFirstName)}
              required
            />
          </label>

          <label>
            Nachname:
            <input
              type="text"
              value={lastName}
              onChange={this.handleChange(changeLastName)}
              required
            />
          </label>

          <label>
            Benutzername:
            <input
              type="text"
              value={userName}
              onChange={this.handleChange(changeUserName)}
              required
            />
          </label>

          <label>
            Universität/Hochschule:
            <select value={university} onChange={this.handleChange(changeUniversity)}>
              {universityOptions}
            </select>
          </label>

          <label>
            Vereinsstatus:
            <input
              type="text"
              value={status}
              onChange={this.handleChange(changeStatus)}
              required
            />
          </label>
          <input type="submit" value="User erstellen" />
        </form>
      </div>
    )
  }
}

export default UserMaskDrawer;
