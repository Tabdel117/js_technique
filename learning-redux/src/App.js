import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment as incrementAction } from './action';

class Counter extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.props.increment}>+</button>
        {this.props.value}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = {
  increment: incrementAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
