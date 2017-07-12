import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const Message = ({conversation, index}) => (
  <div>
    <ListItem
      leftAvatar={<ActionAndroid />}
      primaryText={`${conversation.input}`}
      secondaryText={
        <p>
          <span style={{color: '#00bcd4'}}> Cleverbot </span> --
          {` ${conversation.response}`}
        </p>
      }
      secondaryTextLines={2}
    />
    <Divider inset={true} />
  </div>
)

export default Message;