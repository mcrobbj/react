import React, { Component } from 'react';

class EmployeeList extends Component{
	render() {
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default EmployeeList;
