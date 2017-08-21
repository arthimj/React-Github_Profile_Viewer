import React, { Component } from 'react';
import SearchBar from './search_bar';
import UserProfile from './user_profile';
import Credits from './credits';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <UserProfile />
        <Credits />
      </div>
    );
  }
}
