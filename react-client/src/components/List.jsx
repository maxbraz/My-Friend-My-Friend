import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({conversations}) => (
  <div>
    <dl>
      <dt>Your Conversations</dt>
        { conversations.map((conversation, index) => 
          <ListItem conversation={conversation} key={index} />
        )}
    </dl>
  </div>
)

export default List;