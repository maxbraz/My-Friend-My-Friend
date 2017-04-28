import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.ask = this.ask.bind(this);
  }

  handleChange (event) {
    this.setState({
      input: event.target.value
    })
  }

  ask (question) {
    this.props.askQuestion(question);
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          id="inputQuestion"  
          placeholder="talk to me" 
          value={this.state.input}
          onChange={this.handleChange}
        >
        </input>

        <input type="button" value="ready" onSubmit={this.ask()}></input>
      </div>
    )
  }
}

export default Input;