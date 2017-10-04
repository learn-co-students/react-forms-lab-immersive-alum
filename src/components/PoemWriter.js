import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      validPoem: false,
    };

    this.updateState = this.updateState.bind(this)
  }

  updateState(e){
    let validPoem = false
    let poem = e.target.value
    let lines = poem.split(/\n/)
    let validLineCount = poem.split(/\n/).length === 3

    if (validLineCount) {
      let validFirstLine = lines[0].split(' ').filter(word=>{return word.length > 0}).length === 5
      debugger
      let validSecondLine = lines[1].split(' ').filter(word=>{return word.length > 0}).length === 3
      let validThirdLine = lines[2].split(' ').filter(word=>{return word.length > 0}).length === 5
      validPoem = validFirstLine && validSecondLine && validThirdLine
    }


    this.setState({
      value: poem,
    })

    if (validPoem) {
      this.setState({
        validPoem: true
      })
    }
  }

  isValidPoem(){

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.updateState}
        />
        {!this.state.validPoem ?
        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
        : null}
      </div>
    );
  }
}

export default PoemWriter;
