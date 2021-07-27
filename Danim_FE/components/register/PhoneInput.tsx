import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
border-color: gray;
border-width: 1px;
justify-content: center;
align-items: center;
`;
const PhoneInput = () => {
    return (
        <TextInput
            placeholder=" 예)01012345678 "
            keyboardType="numeric"
            placeholderTextColor="#2C3E50"
        />
    );
}

export default PhoneInput;