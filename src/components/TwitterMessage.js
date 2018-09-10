import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetMessage: '',
      charsRemaining: 140
    };
  }
  calculateCharsRemaining = stringLength =>
    this.setState({
      charsRemaining: this.props.maxChars - stringLength
    })

  handleInput = event => {
    this.setState({ tweetMessage: event.target.value })
    this.calculateCharsRemaining(event.target.value.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInput} type="text" value={this.state.tweetMessage} />
        <small>{this.state.charsRemaining} chars left</small>
      </div>
    );
  }
}

export default TwitterMessage;
