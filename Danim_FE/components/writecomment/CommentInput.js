import React, { Component } from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
    width: 78%;
    height: 40%;
    align-self: center;
    border-radius: 5px;
    border-width: 1px;
    border-color: #a5a5a5;
    textAlignVertical: top;
    margin-top: 15px;
`;

class CommentInput extends Component
{
    render(){
        return(
          <TextInput
              style = {{flexShrink:1}}
              multiline ={true}
          > </TextInput>
        )
    }
}

export default CommentInput;