import axios from 'axios'

export function login(url, username, password) {
	axios.post(url, {
		username: username,
		password: uPassword
	}).then((res) => {
		console.log(res);
	}, (err) => {
		console.log(err);
	})
}