import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: props.page
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      page: nextProps.page
    })
  }
  render() {
    let activeClass = "nav-link";

    return (
      <header>
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className={activeClass} href="/#/">Frontpage</a>
          </li>
          <li className="nav-item">
            <a className={activeClass} href="/#/investor">Investor</a>
          </li>
          <li className="nav-item">
            <a className={activeClass} href="/#/SME">SME</a>
          </li>
          <li className="nav-item">
            <a className={activeClass} href="/#/acquisition">Acquisition</a>
          </li>
        </ul>
        <img className="header-logo animated pulse infinite" src="/img/automation_squared_logop.png"/>
      </header>
    )
  }
}

export default Nav;
