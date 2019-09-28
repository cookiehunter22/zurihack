import React from 'react';
import Input from '@material-ui/core/Input';
import { changeEmoji } from '../../store/emoji/actions';
import { emojiSelector } from '../../store/selectors/emoji';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledRemoveButton = styled.span`
  margin-left: 1em;
  cursor: pointer;
`;

const EmojiInput = () => {
  const input = useSelector(emojiSelector);
  const dispatch = useDispatch();
  const handleChange = (event) => dispatch(changeEmoji(event.target.value));
  const handleClear = () => dispatch(changeEmoji(''));

  return (
    <React.Fragment>
      <Input
        placeholder="your emoji"
        onChange={handleChange}
        value={input}
        inputProps={{
          'aria-label': 'emojis',
        }}
      />
      <StyledRemoveButton role="img" aria-label="trash bin icon" onClick={handleClear}>
        🗑️
      </StyledRemoveButton>
    </React.Fragment>
  );
};

export default EmojiInput;
