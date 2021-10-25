import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    value: 0,
    title: '',
  }

  changeTitle = (e) => {
    this.setState(() => ({ title: e.target.value }));
  }

  increment = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  render() {
    return (
      <div>
        <input value={this.state.title} id="title" 
        onChange={this.changeTitle} />
        <b>{this.state.value}</b>
        <button className="up" onClick={this.increment}>증가</button>
      </div>
    );
  }
}