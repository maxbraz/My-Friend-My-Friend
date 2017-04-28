import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({messages}) => (
  <div>
    <h4> Your Conversations </h4>
    {/*There are { messages.length } conversations.*/}
    { messages.map((message, index) => 
      <ListItem message={message} key={index} />
    )}
  </div>
)

export default List;