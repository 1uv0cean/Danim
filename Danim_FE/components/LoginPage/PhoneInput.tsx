import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
border-color: gray;
border-width: 1;
justify-content: center;
width:70%;
`;
const PhoneInput = () => {
    return (
        <TextInput
        placeholder="휴대폰 번호   예)01012345678 "
        keyboardType="numeric"
        placeholderTextColor="#2C3E50"
        />
    );
}

export default PhoneInput;