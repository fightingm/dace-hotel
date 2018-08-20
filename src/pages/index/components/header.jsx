import React, { Component } from 'react';
import Touchable from 'yo-component/touchable';

export default class Header extends Component {
  back() {
    console.log('22222');
  }
  render() {
    return (
      <div>
        <Touchable
          touchClass="touchable-highlight"
          onTap={this.back}
        >
          <i className="back yo-ico yo-ico-back" />
        </Touchable>
      </div>
    );
  }
}

