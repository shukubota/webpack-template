import React from 'react';
import ReactDom from 'react-dom';
import { Main } from './main';

ReactDom.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('app')
);
