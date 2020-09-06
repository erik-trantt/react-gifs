import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  isKeyEnterPressed = keyCode => keyCode === 13;

  handleUpdate = (event) => {
    if (this.isKeyEnterPressed(event.keyCode)) {
      const query = event.target.value;
      console.log(query);
      this.props.searchFunction(query);
    }
  }

  render() {
    return (
      // onChange={this.handleUpdate} is better suited for autocompleting search query. It's not fit for this exercise. Because if search happen on every keystroke, API consumption rate will be costly.
      // onKeyUp={this.handleUpdate} suits this exercise better, because search only happens when users give a 'Enter' keystroke, or click on the icon.
      <input type="text" className="form-control form-search" onKeyUp={this.handleUpdate} />
    );
  }
}

export default SearchBar;
