import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange (event) {
    this.setState({
      input: event.target.value
    })
  }

  handleKeyPress(event) {
    console.log(event.key);
    console.log('we are in the handleKeyPress');

    if (event.key === 'Enter') {
      this.ask();
    }
  }

  ask () {
    this.props.askQuestion(this.state.input);
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div>
          <input
            type="text"
            id="inputQuestion"
            placeholder="say something here..."
            value={this.state.input}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyPress}
          >
          </input>
          <Button
            bsStyle="info"
            onClick={this.ask}
          >
          {`click here and cleverbot will respond`}
          </Button>
      </div>
    )
  }
}

export default Input;