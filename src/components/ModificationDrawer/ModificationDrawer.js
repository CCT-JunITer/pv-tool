import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../../assets/Icons/CloseIcon'
import classes from './ModificationDrawer.css'

const modificationMasks = [
  {
    name: 'Allgemeines',
    component: (<div>Allgemeines</div>)
  },
  {
    name: 'Projekte',
    component: (<div>Projekte</div>)
  },
  {
    name: 'Kompetenzen',
    component: (<div>Kompetenzen</div>)
  }
];

class ModificationDrawer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
  }

  constructor () {
    super();

    this.state = { selectedTabIndex: 0 }
  }

  getTabNavigation () {
    const { selectedTabIndex } = this.state;

    return modificationMasks.map((item, index) => {
      const { name } = item;

      const handleClick = (e) => {
        e.preventDefault();
        this.setState({ selectedTabIndex: index })
      }

      const itemClasses = [
        classes['ModificationDrawer__TabLink'],
        selectedTabIndex === index ? classes['ModificationDrawer__TabLink--Selected'] : null
      ].join(' ');

      return (
        <div
          key={name}
          onClick={handleClick.bind(this)}
          className={itemClasses}
        >{name}</div>
      )
    })
  }

  render () {
    const {
      open,
      handleToggle
    } = this.props;

    const { selectedTabIndex } = this.state;

    const mergedClasses = [
      classes['ModificationDrawer'],
      open ? classes['ModificationDrawer--Open'] : null
    ].join(' ');

    const exitButtonClasses = [
      classes['ModificationDrawer__CloseButton']
    ].join(' ');

    const tabNavigationClasses = [
      classes['ModificationDrawer__TabNavigation']
    ].join(' ');

    const tabContentClasses = [
      classes['ModificationDrawer__TabContent']
    ].join(' ');

    const selectedTabComponent = modificationMasks[selectedTabIndex].name;

    const tabNavigation = this.getTabNavigation();

    return (
      <div className={mergedClasses}>
        <span className={exitButtonClasses} onClick={handleToggle} >
          <CloseIcon />
        </span>

        <div className={tabNavigationClasses}>{tabNavigation}</div>
        <div className={tabContentClasses}>{selectedTabComponent}</div>
      </div>
    )
  }
}

export default ModificationDrawer;
