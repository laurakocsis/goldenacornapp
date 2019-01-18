import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

class StatesApp extends Component {
  state = {
    count: 0
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
        <Display value={count} />
        <Button clicked={this.decreaseCount} value='Eat one' />
      </div>
    )
  }
}

export default StatesApp;
