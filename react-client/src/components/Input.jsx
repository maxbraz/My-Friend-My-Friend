import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import TextField from 'material-ui/TextField';
import blue500 from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';

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
        <TextField
          hintText={this.props.isLoading ? <CircularProgress style={{marginLeft: '20px'}}/> : "Ask me a question"}
          id="inputQuestion"
          value={this.state.input}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyPress}
        />
        <RaisedButton
          style={{marginLeft: '20px'}}
          primary
          icon={<ActionAndroid />}
          onTouchTap={this.ask}
        />
      </div>
    )
  }
}

export default Input;