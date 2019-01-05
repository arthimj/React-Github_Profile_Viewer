import React, {Component} from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import Credits from './Credits';

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
