import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';


class App extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  decreaseCount = () => {
    const { count } = this.state;
    if (count > 0) {
      this.setState({ count: count - 1 });
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Button clicked={this.incrementCount} value='Buy one' />
        <Display>
          <h2>{count} 🌰</h2>
        </Display>
        <Button clicked={this.decreaseCount} value='Eat one' />
      </div>
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
