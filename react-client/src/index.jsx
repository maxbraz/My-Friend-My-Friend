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
      conversations: data //change back to array with live data
    }

    this.askQuestion = this.askQuestion.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/conversations')
  //     .then((response) => {
  //       console.log('axios get response ', response);
  //       // this.setState({
  //       //   conversations: response //this is going to have to be checked
  //       // })
  //     })
  //     .catch((error) => {
  //       console.log('get error ', error);
  //     })
  // }

  askQuestion(question) {
    console.log('firing the post from index.jsx')
    axios.post('/question', {
      question: question
    })
      .then((response) => {
        console.log('post response index.jsx: ', response);
      })
      .catch((error) => {
        console.log('post error: ', error);
      })
  }

  render () {
    return (
      <div>
        <h1>Hello Robot aka My Only Friend</h1>
        <List conversations={this.state.conversations}/>
        <Input askQuestion={this.askQuestion} />
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));