import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions'
import Dropdownbar from '../../components/DropdownBar/DropdownBar';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import Toolbar from '../../components/ToolBar/ToolBar'
import FilterDrawer from '../../components/FilterDrawer/FilterDrawer'
import ModificationDrawer from '../../components/ModificationDrawer/ModificationDrawer'

class Topbar extends Component {
  constructor () {
    super();

    this.state = {
      expandFilter: false,
      expandModificationMask: false
    };
  }

  resetDrawers () {
    this.setState({
      expandFilter: false,
      expandModificationMask: false
    })
  }

  filterToggelHandler () {
    this.resetDrawers();
    if (!this.state.expandFilter) this.setState({ expandFilter: true });
  }

  modificationToggleHandler () {
    this.resetDrawers();
    if (!this.state.expandModificationMask) this.setState({ expandModificationMask: true });
  }

  render(){
    return(
      <Aux>
        <Toolbar
          openFilter={this.state.expandFilter}
          filterToggle={this.filterToggelHandler.bind(this)}
          userMaskToggle={this.modificationToggleHandler.bind(this)}
          style={{zIndex: '100000'}} />
        <Dropdownbar
          change={this.props.dropDownChanged}
          style={{zIndex: '100000'}} />
        <FilterDrawer open={this.state.expandFilter} />
        <ModificationDrawer
          open={this.state.expandModificationMask}
          handleToggle={this.modificationToggleHandler.bind(this)}
        />
      </Aux>
    );
  }
}

const mapDispatchToProps  = dispatch => {
  return {
    dropDownChanged:(col, element) => dispatch(actions.dropdownChanged(col, element))
  }
};

export default connect(null, mapDispatchToProps)(Topbar);
