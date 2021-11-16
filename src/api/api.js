import axios from "axios";


const baseURL = `https://social-network.samuraijs.com/api/1.0/`

const inctanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "d6e7e37a-2f98-4327-a70c-b26211c6e3fd"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return inctanse.get(baseURL + `users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return inctanse.post(baseURL + `follow/${userId}`)
    },
    unfollow(userId) {
        return inctanse.delete(baseURL + `follow/${userId}`)
    }
}
export const profileAPI = {
    getUser(userId) {
        return inctanse.get( baseURL + `profile/` + userId).then(response => response.data)
    }
}

export const headerAPI = {
    getUserInformation() {
        return inctanse.get( baseURL + `auth/me`).then(response => response.data)
    }
}
