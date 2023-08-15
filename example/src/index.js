import React from 'react';
import ReactDOM from 'react-dom/client';

import * as MultiLayout from "multi-layout"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MultiLayout.Container>
      <MultiLayout.Section component={Section1}/>
      <MultiLayout.Section component={Section2}/>
    </MultiLayout.Container>
  </React.StrictMode>
);

function Section1(){
  return <div
    style={{
      backgroundColor: "yellow"
    }}
  ></div>
}

function Section2(){
  return <div
    style={{
      backgroundColor: "green"
    }}
  ></div>
}