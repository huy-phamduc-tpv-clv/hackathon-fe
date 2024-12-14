import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://10.0.108.57:8081',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`,
	},
});

export default instance;
