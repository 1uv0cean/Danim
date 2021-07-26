import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const MainText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
  color: red;
`;

interface Props {}

const App = ({ }:Props) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <Container>
      <MainText>다님</MainText>
    </Container>
  );
}

export default App;