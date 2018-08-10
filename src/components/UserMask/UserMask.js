import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import classes from './UserMask.css'
import {saveUser} from "../../store/actions/actions";

const universities = [
  'FU Berlin',
  'TU Berlin',
  'HU Berlin'
]

class UserMask extends Component {
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
      this.props.submitForm(this.state)
      console.log('User Masks SUBMIT')
      console.dir(this.state)
    } else {
      console.log('ERROR in form arguments');
    }
  }

  render () {
    const {
      firstName,
      lastName,
      userName,
      university,
      status
    } = this.state;

    const universityOptions = universities.map((item) => (
      <option key={item} value={item}>{item}</option>
    ))

    return (
      <Fragment>
        <h2>Benutzer erstellen</h2>
        <div className={classes['UserMask']}>
          <div className={classes['UserMask__ImageArea']}>
            <div className={classes['UserMask__Picture']}>
              Bild hochladen
            </div>
          </div>

          <form className={classes['UserMask__Form']} onSubmit={this.handleSubmit.bind(this)}>
            <label>
              <span className={classes['UserMask__Label']}>Vorname:</span>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleInputChange.bind(this)}
                required
              />
            </label>

            <label>
              <span className={classes['UserMask__Label']}>Nachname:</span>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleInputChange.bind(this)}
                required
              />
            </label>

            <label>
              <span className={classes['UserMask__Label']}>Benutzername:</span>
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={this.handleInputChange.bind(this)}
                required
              />
            </label>

            <label>
              <span className={classes['UserMask__Label']}>Universität/Hochschule:</span>
              <select
                name="university"
                value={university}
                onChange={this.handleInputChange.bind(this)}
              >
                {universityOptions}
              </select>
            </label>

            <label>
              <span className={classes['UserMask__Label']}>Vereinsstatus:</span>
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
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: user => dispatch(saveUser(user))
  }
}
export default connect(null, mapDispatchToProps)(UserMask)
