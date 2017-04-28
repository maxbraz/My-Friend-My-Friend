import React from 'react';

const ListItem = ({message, index}) => (
  <div className="messages">
    { message.question }
    <div>
      { message.answer }
    </div>
  </div>
)

export default ListItem;