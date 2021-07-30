import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
    width: 78%;
    height: 45%;
    alignSelf: center;
    border-radius: 5px;
    border-width: 1px;
    borderColor: #a5a5a5;
    textAlignVertical: top;
`;

const ReviewInput  = () => {
  return (
       <TextInput
           style = {{flexShrink:1}}
           multiline ={true}
       > </TextInput>
  );
};

export default ReviewInput;
