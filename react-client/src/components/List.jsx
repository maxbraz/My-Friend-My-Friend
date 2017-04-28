import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({messages}) => (
  <div>
    <dl>
      <dt>Your Conversations</dt>
        { messages.map((message, index) => 
          <ListItem message={message} key={index} />
        )}
    </dl>
  </div>
)

export default List;