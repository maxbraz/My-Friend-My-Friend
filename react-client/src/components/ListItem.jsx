import React from 'react';

const ListItem = ({conversation, index}) => (
  <div className="conversations">
    <dd>
      Me:
      { `  ${conversation.input}` }
    </dd>
    <div>
      <dd>
        Cleverbot:
        { `  ${conversation.response}` }
      </dd>
    </div>
  </div>
)

export default ListItem;