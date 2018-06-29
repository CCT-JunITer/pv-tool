import React, { Component } from 'react';
import PropTypes from 'prop-types'

import classes from './../FilterDrawer/FilterDrawer.css'

const universities = [
  'FU Berlin',
  'TU Berlin',
  'HU Berlin'
]

class UserMaskDrawer extends Component {
  static propTypes: {
    open: PropTypes.bool.isRequired
  }

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

  handleInputChange (event) {
    event.preventDefault();
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
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
      // here comes a callback function for submit
      console.log('Everything allright');
      console.dir(this.state);
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

    return (
      <div className={mergedClasses.join(' ')}>
        <h2>Benutzer erstellen</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <span className={classes.MaskLabel}>Vorname:</span>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange.bind(this)}
              required
            />
          </label>

          <label>
            <span className={classes.MaskLabel}>Nachname:</span>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange.bind(this)}
              required
            />
          </label>

          <label>
            <span className={classes.MaskLabel}>Benutzername:</span>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleInputChange.bind(this)}
              required
            />
          </label>

          <label>
            <span className={classes.MaskLabel}>Universität/Hochschule:</span>
            <select
              name="university"
              value={university}
              onChange={this.handleInputChange.bind(this)}
            >
              {universityOptions}
            </select>
          </label>

          <label>
            <span className={classes.MaskLabel}>Vereinsstatus:</span>
            <input
              type="text"
              name="status"
              value={status}
              onChange={this.handleInputChange.bind(this)}
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
