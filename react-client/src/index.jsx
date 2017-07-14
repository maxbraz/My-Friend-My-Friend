import React from 'react';
import ReactDOM from 'react-dom';
import Center from 'react-center';
import axios from 'axios';
import Conversations from './components/Conversations.jsx';
import Input from './components/Input.jsx';
import data from '../../sampleData.json'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      question: '',
      conversations: [],
      isFetchingAnswer: false,
      isFetchingConversations: false,
    }

    this.askQuestion = this.askQuestion.bind(this);
    this.renderConversations = this.renderConversations.bind(this);
  }

  componentWillMount() {
    this.renderConversations();
  }

  renderConversations() {
    this.setState({ isFetchingConversations: true });

    axios.get('/conversations')
      .then((response) => {
        this.setState({
          conversations: response.data,
          isFetchingConversations: false,
        })
      })
      .catch((error) => {
        console.log('get error ', error);
      })
  }

  askQuestion(question) {
    this.setState({
      isFetchingAnswer: true,
      question: question,
    });

    axios.post('/question', {
      question: question
    })
    .then((answer) => {
      this.setState({
        isFetchingAnswer: false,
        answer: answer.data.answer,
      });
    })
    .catch((error) => {
      console.log('post error: ', error);
    })
  }

  render () {
    return (
      <Center>
        <MuiThemeProvider>
            { this.state.isFetchingConversations ? (
                <CircularProgress size={80} thickness={5} />
              ) : (
                <div>
                  <h1>My Friend, My Friend</h1>
                  <Input
                    askQuestion={this.askQuestion}
                    isFetchingAnswer={this.state.isFetchingAnswer}
                  />
                  <Conversations
                    answer={this.state.answer}
                    question={this.state.question}
                    conversations={this.state.conversations}
                    isFetchingAnswer={this.state.isFetchingAnswer}
                  />
                </div>
              )
            }
        </MuiThemeProvider>
      </Center>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));