import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Layout, Card, Input} from 'antd';
import { Radio } from 'antd';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
const {RadioGroup} = Radio.Group;
const {Header, Sider, Footer, Content} = Layout;
const {Meta} = Card;

function Appp() {
  return (
    <RadioGroup name="radiogroup" defaultValue={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </RadioGroup>
  );
}

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
