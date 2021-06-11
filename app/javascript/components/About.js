import React from "react"
import PropTypes from "prop-types"

class About extends React.Component {
  state = {
    showAbout: false,
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ showAbout: !this.state.showAbout});
  };

  render () {
    return (
      <React.Fragment>
        <a onClick={this.handleClick.bind(this)} href="*">
          <h1>This is all about me</h1>
        </a>
        {this.state.showAbout && <img src ="Warlock_Stasis_1.jpg" alt="Ruby Dev"></img> }
      </React.Fragment>
    );
  }
}

export default About
