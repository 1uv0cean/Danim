import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
    width: 85%;
    alignSelf: center;
    border-radius: 5px;
    border-width: 1px;
    borderColor: #a5a5a5;
`;

interface Props {
  setterCheckNum: (value: string) => void;
}

const NumInput: React.FC<Props> = (props: Props) => {
  return (
    <TextInput
      keyboardType="numeric"
      onChangeText={value => props.setterCheckNum(value)}
    />
  );
};

export default NumInput;
