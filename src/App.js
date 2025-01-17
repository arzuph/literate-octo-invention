

import React from 'react';
import Wrapper from './components/wrapper'; 
import MyScreen from './components/screen'; 
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './context/CalcContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <MyScreen />
        <ButtonBox>
        {
          btnValues.flat().map((btn, i) => (
            <Button 
            value={btn}
            key={i}/>
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;


