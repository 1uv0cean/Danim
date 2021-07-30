import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  border-color: gray;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

interface Props {
  setterUserName: (value: string) => void;
}

const NameInput: React.FC<Props> = (props: Props) => {
  return (
    <TextInput
      placeholderTextColor="#2C3E50"
      onChangeText={value => props.setterUserName(value)}
    />
  );
};

export default NameInput;
