import React, {Component} from 'react';

export default class Credits extends Component {
  /** Renders the Credits
   * @returns {String} - JSX representation of the component.
   */
  render() {
    return (
      <div className="credits-container">
        <span>
          Created by <a href="https://jamesiv.es">James Ives</a> using React,
          Redux and the GitHub API.
        </span>
      </div>
    );
  }
}
