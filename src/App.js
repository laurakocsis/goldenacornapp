import React, { Component } from 'react';
import Button from './Button';

class App extends Component {
  state = {
    buttons: [
      {
        text: 'Buy one'
      },
      {
        text: 'Eat one'
      }
    ]
  }
  render() {
    return (
      <React.Fragment>
        <Button value={this.state.buttons[0].text} />
        <Button value={this.state.buttons[1].text} />
      </React.Fragment>
    )
  }
}

export default App;