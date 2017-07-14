import React from 'react';
import Conversation from './Conversation.jsx';
import {List, ListItem} from 'material-ui/List';

class Conversations extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let answer = this.props.answer;
    let question = this.props.question;
    let isFetchingAnswer = this.props.isFetchingAnswer;
    let orderedConversations = this.props.conversations.sort((a, b) => {
      return b.id - a.id;
    });
    let convo;

    if (isFetchingAnswer) {
      convo = (
        <List>
            <Conversation conversation={{input: question}} isFetchingAnswer={isFetchingAnswer} />
            { orderedConversations.map((conversation) =>
              <Conversation conversation={conversation} key={conversation.id} />
            )}
        </List>
      )
    } else if (!isFetchingAnswer && !answer) {
      convo = (
        <List>
            { orderedConversations.map((conversation) =>
              <Conversation
                conversation={conversation}
                key={conversation.id}
                isFetchingAnswer={isFetchingAnswer}
              />
            )}
        </List>
      )
    } else {
      convo = (
        <List>
            <Conversation conversation={{input: question, response: answer}} isFetchingAnswer={isFetchingAnswer} />
            { orderedConversations.map((conversation) =>
              <Conversation
                conversation={conversation}
                key={conversation.id}
                isFetchingAnswer={isFetchingAnswer}
              />
            )}
        </List>
      )
    };

    return (
      <div>
        {convo}
      </div>
    )
  }
}

export default Conversations;