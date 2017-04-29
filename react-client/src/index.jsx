import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import List from './components/List.jsx';
import Input from './components/Input.jsx';
import data from '../../sampleData.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      conversations: []
    }

    this.askQuestion = this.askQuestion.bind(this);
    this.renderConversations = this.renderConversations.bind(this);
  }

  componentDidMount() {
    axios.get('/conversations')
      .then((response) => {
        this.setState({
          conversations: response.data
        })
      })
      .catch((error) => {
        console.log('get error ', error);
      })
  }

  renderConversations() {
    axios.get('/conversations')
      .then((response) => {
        this.setState({
          conversations: response.data
        })
      })
      .catch((error) => {
        console.log('get error ', error);
      })
  }

  askQuestion(question) {
    axios.post('/question', {
      question: question
    })
      // .then((response) => {
      // })
      .then(() => {
        this.renderConversations();
      })
      .catch((error) => {
        console.log('post error: ', error);
      })
  }

  render () {
    return (
      <div>
        <h1>My Friend, My Friend</h1>
        <List conversations={this.state.conversations}/>
        <Input askQuestion={this.askQuestion} />
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));