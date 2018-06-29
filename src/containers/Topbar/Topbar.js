import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions'
import Dropdownbar from '../../components/DropdownBar/DropdownBar';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import Toolbar from '../../components/ToolBar/ToolBar'
import FilterDrawer from '../../components/FilterDrawer/FilterDrawer'
import UserMaskDrawer from '../../components/UserMaskDrawer/UserMaskDrawer'

class Topbar extends Component {
  state = {
    expandFilter: false,
    expandUserMask: false
  };

  resetDrawers () {
    this.setState({
      expandFilter: false,
      expandUserMask: false
    })
  }

  filterToggelHandler () {
    this.resetDrawers();
    if (!this.state.expandFilter) this.setState({ expandFilter: true });
  }

  userMaskToggleHandler () {
    this.resetDrawers();
    if (!this.state.expandUserMask) this.setState({ expandFilter: false });
  }

  render(){
    return(
      <Aux>
        <Toolbar
          openFilter={this.state.expandFilter}
          filterToggle={this.filterToggelHandler.bind(this)}
          userMaskToggle={this.userMaskToggleHandler.bind(this)}
          style={{zIndex: '100000'}} />
        <Dropdownbar
          change={this.props.dropDownChanged}
          style={{zIndex: '100000'}} />
        <FilterDrawer open={this.state.expandFilter} />
        <UserMaskDrawer open={this.state.expandUserMask} />
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
