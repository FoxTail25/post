const onResponce = (res) => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(res));
}

class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }
    
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(onResponce)
    }

    getAllPosts() {
        return fetch(`${this._baseUrl}/posts`, {
            headers: this._headers
        }).then(onResponce)
        // .then((e) => console.log(e.json))
    }
    
    changePostLike(postId, islike) {
        return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
            method: islike ? "DELETE" : "PUT",
            headers: this._headers
        }).then(onResponce)
            .catch((err) => { console.log(`ошибка ${err}`) })
    }
    
    
    getDeletePostById(idPost) {
        return fetch(`${this._baseUrl}/posts/${idPost}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(onResponce)
    }
    
    getPostById(idPost) {
        return fetch(`${this._baseUrl}/posts/${idPost}`, {
            headers: this._headers
        }).then(onResponce)
    }


}

const config = {
    baseUrl: 'https://api.react-learning.ru/v2/group-7',
    headers: {
        'content-type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNzU5Yjk4YjAzOGY3NzlkMjUiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NTAsImV4cCI6MTY5OTQ0Nzk1MH0.cjcOe0rjB3beNMR3s0mfo6geqWswLbsgNe7MSqYmx5s'
    }
}

const api = new Api(config);

export default api;
//GET https://api.react-learning.ru/v2/:groupId/posts