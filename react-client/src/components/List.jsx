import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Message from './Item.jsx';

const Messages = ({conversations}) => (
  <div>
    <List>
      <Subheader> Your Conversation </Subheader>
        { conversations.map((conversation, index) =>
          <Message conversation={conversation} key={index} />
        )}
    </List>
  </div>
)

export default Messages;