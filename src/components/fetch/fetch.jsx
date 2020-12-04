import { useEffect, useState } from 'react';
import FetchTemplate from './fetch-template';




const Fetch = function () {

	const [employees, setEmployees] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		fetch('http://dummy.restapiexample.com/api/v1/employees', { signal })
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

	return(
		<FetchTemplate employees={employees}/>
	);
	
};

export default Fetch;
