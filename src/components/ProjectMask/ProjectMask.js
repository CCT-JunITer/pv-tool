import React, { Component, Fragment } from 'react'

import classes from './ProjectMask.css'

class ProjectMask extends Component {
  constructor () {
    super()
    this.state = {
      projectName: '',
      bt: 0,
      points: 0
    }
  }

  handleChange (event) {
    event.preventDefault()
    const { target } = event
    const { name, type } = target
    const value = type === 'checkbox' ? target.checked : target.value

    this.setState({ [name]: value })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.dir(this.state)
  }

  render () {
    return (
      <Fragment>
        <h2>Projekt verwalten</h2>

        <form
          className={classes['ProjectMask__Form']}
          onSubmit={this.handleSubmit.bind(this)}
        >
          <label>
            <span className={classes['ProjectMask__Label']}>
              Projektbezeichnung
            </span>
            <input
              type="text"
              name="projectName"
              onChange={this.handleChange.bind(this)}
              required
            />
          </label>

          <label>
            <span className={classes['ProjectMask__Label']}>
              BT
            </span>
            <input
              type="number"
              name="bt"
              onChange={this.handleChange.bind(this)}
              required
            />
          </label>

          <label>
            <span className={classes['ProjectMask__Label']}>
              Points
            </span>
            <input
              type="number"
              name="points"
              onChange={this.handleChange.bind(this)}
              required
            />
          </label>

          <input type="submit" value="Änderungen speichern"></input>
        </form>
      </Fragment>
    )
  }
}

export default ProjectMask
