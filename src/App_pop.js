import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './EmployeeList';


class App extends Component {
	
  getInitialState() {
    return {
      EMPLOYEES: [{name: 'Joe Biden', age: 45, years: 5},
  {name: 'President Obama', age: 54, years: 8},
  {name: 'Crystal Mac', age: 34, years: 12},
  {name: 'James Henry', age: 33, years: 2}]
  }};

  componentWillMount() {
    this.setState(state => {
      state.EMPLOYEES.push(state.EMPLOYEES.length + 1);
      return state;
    });

ReactDOM.render(
  <EmployeeTable employees={EMPLOYEES} />, document.getElementById('root')
  
 };
