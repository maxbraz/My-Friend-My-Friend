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
      conversations: [],
      isLoadingConversations: false,
      isFetchingAnswer: false,
    }

    this.askQuestion = this.askQuestion.bind(this);
    this.renderConversations = this.renderConversations.bind(this);
  }

  componentDidMount() {
    this.renderConversations();
  }

  renderConversations() {
    this.setState({ isFetchingAnswer: false });
    this.setState({ isLoadingConversations: true });

    axios.get('/conversations')
      .then((response) => {
        this.setState({
          conversations: response.data,
          isLoadingConversations: false,
        })
      })
      .catch((error) => {
        console.log('get error ', error);
      })
  }

  askQuestion(question) {
    this.setState({ isFetchingAnswer: true });

    axios.post('/question', {
      question: question
    })
      .then(() => {
        this.renderConversations();
      })
      .catch((error) => {
        console.log('post error: ', error);
      })
  }

  render () {

    return (
      <Center>
        <MuiThemeProvider>
            { this.state.isLoadingConversations ? (
                <CircularProgress size={80} thickness={5} />
              ) : (
                <div>
                  <h1>Hello Robot</h1>
                  <Input askQuestion={this.askQuestion} isLoading={this.state.isFetchingAnswer}/>
                  <Conversations conversations={this.state.conversations} isLoading={this.state.isLoadingConversations}/>
                </div>
              )
            }
        </MuiThemeProvider>
      </Center>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));