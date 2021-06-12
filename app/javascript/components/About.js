import React from "react"
import PropTypes from "prop-types"
import Link from "./Link"

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
      <div>
        <a onClick={this.handleClick.bind(this)} href="*">
          <h1>This is all me...</h1>
        </a>
        {this.state.showAbout && <Link /> }
        
      </div>
      
    );
  }
}

export default About
