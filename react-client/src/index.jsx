import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import List from './components/List.jsx';
import data from '../../sampleData.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: data //change back to array with live data
    }
  }

  componentDidMount() {
    axios.get('/messages')
      .then((response) => {
        console.log('axios get response ', response);
        this.setState({
          messages: response //this is going to have to be checked
        })
      })
      .catch((error) => {
        console.log('get error ', error);
      })
  }

  postQuestion(question) {
    axios.post('/question', {
      question: question
    })
      .then((response) => {
        console.log('post response: ', response);
      })
      .catch((error) => {
        console.log('post error: ', error);
      })
  }

  render () {
    return (<div>
      <h1>Hello Robot aka My Only Friend</h1>
      <List messages={this.state.messages}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));