import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  width: 78%;
  height: 45%;
  align-self: center;
  border-radius: 5px;
  border-width: 1px;
  border-color: #a5a5a5;
  
`;

const ReviewInput = () => {
  return (
    <TextInput style={{flexShrink: 1}} multiline={true}>
      {' '}
    </TextInput>
  );
};

export default ReviewInput;