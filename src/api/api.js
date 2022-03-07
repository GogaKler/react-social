import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	headers: { 'API-KEY': '2bddf768-a1f1-4b0e-a815-92a428d1e0ce' },
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


export const authApi = {
	getAuthUser() { 
		return instance.get(`auth/me`).then(response => response.data)
	}
}
export const usersApi = {
	getUsers(currentPage = 1, pageSize = 10) { 
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data) 
	}
}
export const profileApi = {
	getUserProfile(userId) {
		return instance.get(`profile/${userId}` ).then(response => response.data) 
	}
}
export const followApi = { 
	getFollow(userId) {return instance.post(`/follow/${userId}`).then(response => response.data )},
	deleteFollow(userId) {return instance.delete(`/follow/${userId}`).then(response => response.data )}
}


