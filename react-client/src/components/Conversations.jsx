import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Conversation from './Conversation.jsx';

class Conversations extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let orderedConversations = this.props.conversations.sort((a, b) => {
      return b.id - a.id;
    });

    return (
      <div>
        <List>
            { orderedConversations.map((conversation) =>
              <Conversation conversation={conversation} key={conversation.id} />
            )}
        </List>
      </div>
    )
  }
}

export default Conversations;