import React from 'react';

const ListItem = ({message, index}) => (
  <div className="messages">
    <dd>
      { message.question }
    </dd>
    <div>
      <dd>
        { message.answer }
      </dd>
    </div>
  </div>
)

export default ListItem;