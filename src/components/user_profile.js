import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'


class UserProfile extends Component {
  componentWillMount() {
    // Defautlt search query...
    this.props.fetchData('JamesIves');
  }

  render() {
    const { profile } = this.props;
    console.log({profile});

    // If this.props.info is empty then show a loading screen...
    if (!profile) {
      return (
        <div className="profile-container mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
      )
    }

    return (
      <div className="profile-container material-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title" style={{background: `url(${profile.avatar_url}) center/cover`}}>
          <h2 className="mdl-card__title-text">
            {profile.name}
          </h2>
        </div>
        <div className="mdl-card__supporting-text">
          <div>
            {profile.bio}
          </div>
          {profile.location && 
            <div>
              <span className="bio-detail">Location:</span> {profile.location}
            </div>
          }
          {profile.company &&
            <div>
              <span className="bio-detail">Work:</span> {profile.company}
            </div>
          }
          <ul className="material-list-icon mdl-list">
            <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                <a href={`https://github.com/${profile.login}/?tab=repositories`}>
                  <i className="material-icons mdl-list__item-avatar">code</i>
                </a>
                <span className="mdl-badge" data-badge={profile.public_repos}>Repositories</span>
              </span>
            </li>
            <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                <a href={`https://gist.github.com/${profile.login}`}>
                  <i className="material-icons mdl-list__item-avatar">reorder</i>
                </a>
                <span className="mdl-badge" data-badge={profile.public_gists}>Gists</span>
              </span>
            </li>
            <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                <a href={`https://github.com/${profile.login}/?tab=followers`}>
                  <i className="material-icons mdl-list__item-avatar">people</i>
                </a>
                <span className="mdl-badge" data-badge={profile.followers}>Followers</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            href={`https://github.com/${profile.login}/`}>
            Profile
          </a>
          {profile.blog &&
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
              href={profile.blog}>
              Website
            </a>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    profile: state.profile.info
  };
}

export default connect(mapStateToProps, actions)(UserProfile);