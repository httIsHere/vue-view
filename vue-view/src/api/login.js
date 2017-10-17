import axios from 'axios'

export function login(url, username, password,cb) {
	axios.post(url, {
		username: username,
		password: password
	}).then((res) => {
		cb(res);
	}, (err) => {
		cb(err);
	})
}