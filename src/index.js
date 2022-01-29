import React from "react";
import reactDom from "react-dom";
import Hello from "./HelloFunCompenent"
import HelloClass from './HelloclassComponent'
import './App.css'
import App from "./App"

const styles = { 
  color: '#FF5733', 
  fontSize: '22px'
}
const element = [
  {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
  },
  {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
    }];
  console.log(element);
reactDom.render(
  <>
  {element}
  </>
  ,
  document.getElementById('root')
)