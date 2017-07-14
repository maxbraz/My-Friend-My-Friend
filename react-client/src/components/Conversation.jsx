import React from 'react';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    }
  }

  render() {
    let conversation = this.props.conversation;
    let isFetchingAnswer = this.props.isFetchingAnswer;

    return (
      <div>
      { isFetchingAnswer || conversation.response === undefined ? (
        <div>
          <ListItem
            leftAvatar={<ActionAndroid />}
            primaryText={`${conversation.input}`}
            secondaryText={
              <LinearProgress mode="indeterminate" />
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
        </div>
      ) : (
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
      )}
      </div>
    )
  }
}

export default Conversation;