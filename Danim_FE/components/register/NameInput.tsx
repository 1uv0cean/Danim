import * as React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
border-color: gray;
border-width: 1px;
justify-content: center;
align-items: center;
`;
const NameInput = () => {
    return (
        <TextInput
            placeholderTextColor="#2C3E50"
        />
    );
}

export default NameInput;