const onResponce = (res) => {
	return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
	constructor({ baseUrl, headers }) {
		this._headers = headers;
		this._baseUrl = baseUrl;
	}

	getPostList() {
		return fetch(`${this._baseUrl}/posts`, {
			headers: this._headers
		}).then(onResponce)
	}

	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: this._headers
		}).then(onResponce)
	}

	setUserInfo(dataUser) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify(dataUser)
		}).then(onResponce)
	}

	changeLikePost(postId, isLike) {
		return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
			method: isLike ? "DELETE" : "PUT",
			headers: this._headers

		}).then(onResponce)
	}

}
const config = {
	baseUrl: 'https://api.react-learning.ru/v2/group-7',
	headers: {
		'content-type': 'application/json',
		authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNzU5Yjk4YjAzOGY3NzlkMjUiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NTAsImV4cCI6MTY5OTQ0Nzk1MH0.cjcOe0rjB3beNMR3s0mfo6geqWswLbsgNe7MSqYmx5s',
	}
}

const api = new Api(config);

export default api;
