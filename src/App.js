import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import './EmployeeList';

var EMPLOYEES = [
  {name: 'Joe Biden', age: 45, years: 5},
  {name: 'President Obama', age: 54, years: 8},
  {name: 'Crystal Mac', age: 34, years: 12},
  {name: 'James Henry', age: 33, years: 2}
];

class Employee extends Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}

class EmployeeTable extends Component{
  render() {
//    var rows = [];
//    this.props.employees.forEach(employee) {
//      rows.push(<Employee employee={employee} />);
//    });
  return <h1>Hello, {this.props.name}</h1>;
   
//      <table>
//        <thead>
//          <tr>
//            <th>Name</th><th>Age</th><th>Years</th>
//          </tr>
//        </thead>
//        <tbody>{rows}</tbody>
//      </table>);
  }
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			activeEmployee: 0,
		};
	}
  render() {
    const activeEmployee = this.state.activeEmployee;
	return (
      <div className="App">
        <EmployeeTable name={EMPLOYEES[activeEmployee].name}/>
			{EMPLOYEES.map((employees, index) => (
			<button
			key={index}
			onClick={() => {
			this.setState({ activeEmployee: index});
				console.log("Clicked index " + index);
			}}
			>
			{employees.name}
			</button>
			))}
		</div>
    );
  }
}

export default App;
