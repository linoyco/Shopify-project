import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import AppRoutes from "./AppRoutes";
import { saveData } from '../State/Actions/App';
import { demoData } from '../Api/DemoApi';

const GlobalStyle = createGlobalStyle`
  html{
  height: 100%;
  font-family: arial;
  overflow: hidden;
  }
  body {
    font-weight: bold;
    padding: 0;
    margin:0;
    height: 100%;
  }
  .App{
    height: 100vh;
  }
`;

const App: React.FunctionComponent = () => {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveData(demoData));
  });

  return (
    <div className='App'>
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

export default App;