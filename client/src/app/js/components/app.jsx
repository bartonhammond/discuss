import React from 'react';
import { Component } from 'react';

import Header from './shared/header';
import Error from './shared/error';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Error />
          {this.props.children}
        </div>
      </div>
    );
  }
}