import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userInfo : {}, // Corrected the key name to formData
    };

    // Bind the handleData function to the current instance
    this.handleData = this.handleData.bind(this);

    // Call handleData after 4 seconds
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const name = 'gdhong';
    const id = '홍길동';
    this.setState({
      loading: false,
      userInfo: {id: id, name: name}, //
    });
    console.log('loading값', this.state.loading);
  }

  render() {
    return (
      <div>
        <span>{this.state.loading?'로딩중':JSON.stringify(this.state.userInfo)} </span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
