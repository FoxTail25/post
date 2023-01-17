
let token = localStorage.getItem('postApi')
console.log('display token from api', token)


const onResponce = (res) => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
    
}

class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    changeUserInfo(data, token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`
              }  
            // headers: this._headers
        }).then(onResponce)
    }


    getUserInfo(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`
              }  
            // headers: this._headers
        }).then(onResponce)
    }

    getUserInfoById(userId,  token) {
        return fetch(`${this._baseUrl}/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
              }  
            // headers: this._headers
        }).then(onResponce)
    }

    getAllPosts() {
        return fetch(`${this._baseUrl}/posts`, {
            headers: this._headers
        }).then(onResponce)
    }

    // posts/paginate?page=<номер страницы>&limit=<число ограничивающее вывод на страницу>

    getPaginatePosts(page, number, token ,query = '') {
        return fetch(`${this._baseUrl}/posts/paginate?page=${page}&limit=${number}&query=${query}`, {
            headers: {
                Authorization: `Bearer ${token}`
              }            
            // headers: this._headers

        }).then(onResponce)
    }


    changePostLike(postId, islike, token) {
        return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
            method: islike ? "DELETE" : "PUT",
            headers: {
                Authorization: `Bearer ${token}`
              } 
            // headers: this._headers
        }).then(onResponce)
            .catch((err) => { console.log(`ошибка ${err}`) })
    }


    deletePostById(idPost, token) {
        return fetch(`${this._baseUrl}/posts/${idPost}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
              } 
            // headers: this._headers
        }).then(onResponce)
    }

    getPostById(idPost, token) {
        return fetch(`${this._baseUrl}/posts/${idPost}`, {
            headers: {
                Authorization: `Bearer ${token}`
              } 
            // headers: this._headers
        }).then(onResponce)
    }

    addNewPost(post, token) {
        return fetch(`${this._baseUrl}/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                Authorization: `Bearer ${token}`
              } 
            // headers: this._headers
        }).then(onResponce)
    }

    // POST https://api.react-learning.ru/v2/:groupId/posts/comments/

    addNewComments(comment, postId, token) {
        return fetch(`${this._baseUrl}/posts/comments/${postId}`, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                Authorization: `Bearer ${token}`
              } 
            // headers: this._headers
        }).then(onResponce)
    }

    deleteComments(commentId, postId, token) {
        return fetch(`${this._baseUrl}/posts/comments/${postId}/${commentId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
              } 
            // headers: this._headers
        }).then(onResponce)
    }

    changePost(post, postid, token) {
        return fetch(`${this._baseUrl}/posts/${postid}`, {
            method: 'PATCH',
            body: JSON.stringify(post),
            headers: {
                Authorization: `Bearer ${token}`
              } 
            // headers: this._headers
        }).then(onResponce)
    }

    // https://api.react-learning.ru/v2/:groupId/posts/comments/:postId
    getPostComments(postid, token) {
        return fetch(`${this._baseUrl}/posts/comments/${postid}`, {
            headers: {
                Authorization: `Bearer ${token}`
              } 
            // headers: this._headers
        }).then(onResponce)
    }

    // POST https://api.react-learning.ru/signin

    singInUser(user) {
        return fetch('https://api.react-learning.ru/signin', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(user),
        }).then(onResponce)
    }


    // changeUserData(user, token) {
    //     return fetch(`${this._baseUrl}/me`, {
    //         method: 'PATCH',
    //         headers: {
    //              Authorization: `Bearer ${token}`
    //          } 
    //         headers: this._headers
    //         body: JSON.stringify(user),
    //     }).then(onResponce)
    // }



}


const config = {
    baseUrl: 'https://api.react-learning.ru/v2/group-7',
    headers: {
        'content-type': 'application/json',
        // Authorization: token
        // Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNzU5Yjk4YjAzOGY3NzlkMjUiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NTAsImV4cCI6MTY5OTQ0Nzk1MH0.cjcOe0rjB3beNMR3s0mfo6geqWswLbsgNe7MSqYmx5s'
    }
}

const api = new Api(config);

export default api;