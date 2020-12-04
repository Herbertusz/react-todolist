import React from 'react';
import { Loop } from '../shared/utility';
import styles from './fetch.module.scss';

const FetchTemplate = function({employees}) {

    return (
		<React.Fragment>
			{!employees &&
				<div>Betöltés</div>
			}
			{employees &&
				<table className={styles.fetchTable}>
					<tbody>
						<tr>
							<th>Name</th>
							<th>Age</th>
							<th>Salary</th>
						</tr>
						<Loop forEach={employees}>
							{(item) => (
								<tr key={item.id}>
									<td>{item.employee_name}</td>
									<td>{item.employee_age}</td>
									<td>{item.employee_salary} $</td>
								</tr>
							)}
						</Loop>
					</tbody>
				</table>
			}
		</React.Fragment>
	);
}

export default FetchTemplate;