import { render } from '@testing-library/react';
import styles from './fetch.module.scss';

fetch("http://dummy.restapiexample.com/api/v1/employees")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	});

const Fetch = function () {
	return (
			"Hello"
	);
}

export default Fetch;