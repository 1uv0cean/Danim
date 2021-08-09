import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  border-color: gray;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  width: 65%;
  padding: 7px;
  margin-left: 10px;
  borderTopLeftRadius: 5px;
  borderTopRightRadius: 5px;
  borderBottomLeftRadius: 5px;
  borderBottomRightRadius: 5px;
`;

interface Props {
  setterCertifyNumber: (value: string) => void;
}

const CertificationInput: React.FC<Props> = (props: Props) => {
  return (
    <TextInput
      keyboardType="numeric"
      placeholder="인증번호를 입력해주세요."
      placeholderTextColor="#2C3E50"
      maxLength={6}
      onChangeText={value => props.setterCertifyNumber(value)}
    />
  );
};

export default CertificationInput;
