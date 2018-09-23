import React, { Component } from 'react';

class Header extends Component {
render() {
    return (
      <div className="container" id="header-container">
        <h1 className="header-title">Find Ducky</h1>
        <p className="p-body">
          In painting, you have unlimited power. You have the ability to move mountains.
          Volunteering your time; it pays you and your whole community fantastic dividends.
          I started painting as a hobby when I was little. I didn't know I had any talent.
          I believe talent is just a pursued interest. Anybody can do what I do.
          I can't think of anything more rewarding than being able to express yourself
          to others through painting. A thin paint will stick to a thick paint.
        </p>
      </div>
    );
  }
}

export default Header