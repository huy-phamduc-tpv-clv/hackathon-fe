import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://47c5fd34-0f4d-4df8-9eb7-e4adbc0f0e80.mock.pstmn.io',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`,
	},
});

export default instance;
