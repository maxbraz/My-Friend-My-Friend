import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Message from './Item.jsx';

class Messages extends React.Component {
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
          <Subheader> Your Conversation </Subheader>
            { orderedConversations.map((conversation) =>
              <Message conversation={conversation} key={conversation.id} />
            ).sort((a, b) => {
              return a.id - b.id;
            })}
        </List>
      </div>
    )
  }
}

export default Messages;