import React, { Component } from 'react';
import { render } from 'react-dom';
import TimePicker from 'react-time-picker';

import './Sample.less';

export default class Sample extends Component {
  state = {
    value: new Date(),
  }

  onChange = value => this.setState({ value })

  render() {
    const { value } = this.state;

    return (
      <div className="Sample">
        <header>
          <h1>react-time-picker sample page</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <TimePicker
              onChange={this.onChange}
              value={value}
            />
          </main>
        </div>
      </div>
    );
  }
}

render(<Sample />, document.getElementById('react-container'));
