import React, { Component } from "react";
import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h4 className='main-heading'>Playground of Sass Components</h4>
      </>
    );
  }
}

export default Home;
