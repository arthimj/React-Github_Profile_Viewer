import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    };
  }

  // Determines which error to display...
  showError() {
    if (this.props.error.response.request.status == 404) {
      return 'Unable to find GitHub username, please try again...';
    } else {
      return this.props.error.response.message;
    }
  }

  render() {
    const { error } = this.props;

    return (
      <form className="search-container"
        onSubmit={this.handleSubmit.bind(this)}>
        <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${error.invalid ? 'is-invalid' : ''}`}>
          <input className="mdl-textfield__input" 
          type="text" 
          id="search"
          value={this.state.user}
          onChange={this.handleChange.bind(this)} />
          <label className="mdl-textfield__label" htmlFor="search">
            {error.invalid ? this.showError() : 'Enter a GitHub username...'}
          </label>
          <span className="mdl-textfield__error">{error.invalid}</span>
        </div>
     </form>
    );
  }

  handleChange(event) {
    this.setState({ user: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.fetchData(this.state.user);

    this.setState({
       user: ''
    })

  }
}

function mapStateToProps(state) {
  return {
    error: state.profile.error
  }
}

export default connect(mapStateToProps, actions)(SearchBar);