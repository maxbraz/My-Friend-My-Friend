import React from 'react';
import {List, ListItem} from 'material-ui/List';
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