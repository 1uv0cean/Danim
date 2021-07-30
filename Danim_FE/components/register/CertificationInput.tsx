import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  border-color: gray;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

interface Props {
  setterCertifyNumber: (value: string) => void;
}

const CertificationInput: React.FC<Props> = (props: Props) => {
  return (
    <TextInput
      keyboardType="numeric"
      placeholderTextColor="#2C3E50"
      maxLength={6}
      onChangeText={value => props.setterCertifyNumber(value)}
    />
  );
};

export default CertificationInput;
