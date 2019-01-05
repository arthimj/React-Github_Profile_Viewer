import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

/** The SearchBar component lets you determine which profile to view. */
class SearchBar extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      user: '',
    };
  }

  /**
   * Changes the component state whenever there is a change to the input.
   * @param {object} event - The object containing the input change event.
   * @returns {undefined}
   */
  handleChange(event) {
    this.setState({user: event.target.value});
  }

  /**
   * Fetches new user data when the form is submitted.
   * @param {object} event - The object containing the click event.
   * @returns {undefined}
   */
  handleSubmit(event) {
    event.preventDefault();

    this.props.fetchData(this.state.user);

    this.setState({
      user: '',
    });
  }

  /**
   * Determines which error to display
   * @returns {string} - Returns the error string.
   */
  showError() {
    if (this.props.error.response.request.status == 404) {
      return 'Unable to find GitHub username, please try again...';
    } else {
      return this.props.error.response.message;
    }
  }

  /**
   * Renders the SearchBar component.
   * @returns {string} JSX representation of the component.
   */
  render() {
    const {error} = this.props;

    return (
      <form
        className="search-container"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div
          className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${
            error.invalid ? 'is-invalid' : ''
          }`}
        >
          <input
            className="mdl-textfield__input"
            type="text"
            id="search"
            value={this.state.user}
            onChange={this.handleChange.bind(this)}
          />
          <label className="mdl-textfield__label" htmlFor="search">
            {error.invalid ? this.showError() : 'Enter a GitHub username...'}
          </label>
          <span className="mdl-textfield__error">{error.invalid}</span>
        </div>
      </form>
    );
  }
}

/**
 * Maps Redux application state to props.
 * @param {string} state - Application state handed down by Redux.
 * @returns {Object} - Returns an object containing the Redux state.
 */
function mapStateToProps(state) {
  return {
    error: state.profile.error,
  };
}

export default connect(
  mapStateToProps,
  actions
)(SearchBar);
