/* eslint react/prefer-stateless-function: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */
/* eslint jsx-a11y/click-events-have-key-events: off */
import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    const { selectGif, id } = this.props;
    console.log(selectGif);
    console.log(id);
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const { id, mode } = this.props;
    const width = mode === "small" ? 400 : 200;
    const src = `https://images.unsplash.com/photo-${id}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=${width}&fit=max&ixid=eyJhcHBfaWQiOjE2MzQxM30`;

    return (
      <img src={src} alt="selected gif file" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
