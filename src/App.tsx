import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './State/Actions/App';

// import background from './images/countries.jpg';
// background-image: url(${background}); 

const GlobalStyle = createGlobalStyle`
  html{
  height: 100%;
  font-family: arial;
  background-size: cover;
  }
  body {
    font-weight: bold;
    padding: 0;
    margin:0;
    height: 100%;
  }
  .App{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .Game{
    background-color: white;
    border: 5px solid black;
    width: 87vw;
    height: 87vh;
  }
  .Header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 9vh;
    background-color: black;
    padding:1.5%;
  }
  .Header-Text{
    font-size: 5vw;
    font-weigh: bold;
    color: yellow;  
    text-shadow: 3px 3px 4px gray; 
  }
`;



const App: React.FunctionComponent = () => {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  });

  return (
    <div className='App'>
      <GlobalStyle />
Hello
    </div>
  );
}

export default App;