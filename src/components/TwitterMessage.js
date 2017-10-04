import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charsLeft: this.props.maxChars,
    };
    this.updateState = this.updateState.bind(this)
  }

  updateState(e){
    this.setState({
      value: e.target.value,
      charsLeft: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: ({this.state.charsLeft})</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.updateState}
        />
      </div>
    );
  }
}

export default TwitterMessage;
