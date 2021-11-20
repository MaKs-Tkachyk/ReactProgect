import axios from "axios";



const inctanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "d6e7e37a-2f98-4327-a70c-b26211c6e3fd"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return inctanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return inctanse.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return inctanse.delete(`follow/${userId}`)
    }
}
export const profileAPI = {
    getUser(userId) {
        return inctanse.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        return inctanse.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return inctanse.put(`profile/status`, { status: status })
    }
}

export const authAPI = {
    me() {
        return inctanse.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe=false) {
        return inctanse.post(`auth/login`, { email, password, rememberMe})
    },
    loginOut() {
        return inctanse.delete(`auth/login`)
    }

}
