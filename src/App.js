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
          <h2>{this.state.count} 🌰</h2>
        </Display>
        <Button clicked={this.decreaseCount} value={this.state.buttons[1].text} />
      </React.Fragment>
    )
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 38) {
        this.incrementCount();
      } else if (e.keyCode === 40) {
        this.decreaseCount();
      }
    });
  }
}

export default App;