import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';


class App extends Component {
  state = {
    count: 0,
    buttons: [
      {
        text: 'Buy one'
      },
      {
        text: 'Eat one'
      }
    ]
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Button clicked={this.incrementCount} value={this.state.buttons[0].text} />
        <Display>
          <h3>{this.state.count}</h3>
        </Display>
        <Button clicked={this.decreaseCount} value={this.state.buttons[1].text} />
      </React.Fragment>
    )
  }
}

export default App;