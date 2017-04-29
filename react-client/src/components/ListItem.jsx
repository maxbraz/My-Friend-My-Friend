import React from 'react';

const ListItem = ({conversation, index}) => (
  <div className="conversations">
    <dd>
      YOU:
      { conversation.input }
    </dd>
    <div>
      <dd>
        ROBOT FRIEND:
        { conversation.response }
      </dd>
    </div>
  </div>
)

export default ListItem;