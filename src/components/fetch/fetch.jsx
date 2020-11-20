import React, { useEffect, useState } from 'react';
import { Loop } from '../../utility';
import styles from './fetch.module.scss';


const Fetch = function () {

	const [employees, setEmployees] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		fetch("http://dummy.restapiexample.com/api/v1/employees", { signal })
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setEmployees(data.data);
			})
			.catch((error) => {
				console.warn(error);
			});
		
		return () => {
			controller.abort();
		};
	});

	return (
		<React.Fragment>
			{!employees &&
				<div>Betöltés</div>
			}
			{employees &&
				<table>
					<tbody>
						<Loop forEach={employees}>
							{(item) => (
								<tr key={item.id}>
									<td>{item.employee_name}</td>
									<td>{item.employee_age}</td>
									<td>{item.employee_salary}</td>
								</tr>
							)}
						</Loop>
					</tbody>
				</table>
			}
		</React.Fragment>
	);
};

export default Fetch;