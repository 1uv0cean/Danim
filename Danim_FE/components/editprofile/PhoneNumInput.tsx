import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  width: 85%;
  align-self: center;
  border-radius: 5px;
  border-width: 1px;
  border-color: #a5a5a5;
`;

interface Props {
  setUserPhone: (value: string) => void;
}

const PhoneNumInput: React.FC<Props> = (props: Props) => {
  return (
    <TextInput
      keyboardType="numeric"
      onChangeText={value => props.setUserPhone(value)}
    />
  );
};

export default PhoneNumInput;
