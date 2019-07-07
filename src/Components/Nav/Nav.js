import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavToolBar, NavToolBarButton } from '../../StyledComponents/global';

class Nav extends Component {
  render() {
    return (
      <NavToolBar>
        <Link to='/'>
          <NavToolBarButton>{"<"} Back</NavToolBarButton>
        </Link>
      </NavToolBar>
    )
  }
}

export default Nav;
