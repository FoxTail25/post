


const onResponce = (res) => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));

}

class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }


    singInUser(user) {
        return fetch('https://api.react-learning.ru/signin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        }).then(onResponce)
    }
    singUpUser(user) {
        return fetch('https://api.react-learning.ru/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        }).then(onResponce)
    }


    getUserInfo() {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
    getUserInfoById(userId) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/users/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
    changeUserInfo(data) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/users/me`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
    changeUserAvatar(data) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/users/me/avatar`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }


    getAllPosts() {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
    getPaginatePosts(page, number, query = '') {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts/paginate?page=${page}&limit=${number}&query=${query}`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }

        }).then(onResponce)
    }
    getPostById(idPost) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts/${idPost}`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
    addNewPost(post) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
    changePost(post, postid,) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts/${postid}`, {
            method: 'PATCH',
            body: JSON.stringify(post),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
    deletePostById(idPost) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts/${idPost}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }


    changePostLike(postId, islike) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts/likes/${postId}`, {
            method: islike ? "DELETE" : "PUT",
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
            .catch((err) => { console.log(`ошибка ${err}`) })
    }


    getPostComments(postid) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts/comments/${postid}`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
    addNewComments(comment, postId) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts/comments/${postId}`, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
    deleteComments(commentId, postId) {
        return fetch(`${this._baseUrl}${localStorage.getItem('group')}/posts/comments/${postId}/${commentId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('postApi')}`
            }
        }).then(onResponce)
    }
}

const config = {
    baseUrl: 'https://api.react-learning.ru/v2/',

}

const api = new Api(config);

export default api;