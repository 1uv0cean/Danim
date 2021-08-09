import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  border-color: gray;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin-left: 10px;
  padding: 7px;
  borderTopLeftRadius: 5px;
  borderTopRightRadius: 5px;
  borderBottomLeftRadius: 5px;
  borderBottomRightRadius: 5px;
`;

interface Props {
  setterUserName: (value: string) => void;
}

const NameInput: React.FC<Props> = (props: Props) => {
  return (
    <TextInput
      placeholder="이름을 입력해주세요."
      placeholderTextColor="#2C3E50"
      onChangeText={value => props.setterUserName(value)}
    />
  );
};

export default NameInput;
