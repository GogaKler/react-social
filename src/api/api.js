import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	headers: { 'API-KEY': process.env.REACT_APP_API_KEY },
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


export const authApi = {
	getAuthUser() { 
		return instance.get(`auth/me`).then(response => response.data)
	},
	login(email, password, rememberMe) {
		return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
	},
	logout() {
		return instance.delete(`auth/login`).then(response => response.data)
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
	},
	getUserStatus(userId){
		return instance.get(`profile/status/${userId}`).then(response => response.data) 
	},
	updateUserStatus(status){
		return instance.put('profile/status', {status: status}).then(response => response.data) 
	},
	savePhoto(photoFile){
		const formData = new FormData();
		formData.append('image', photoFile)
		return instance.put(`profile/photo`, formData).then(response => response.data)
	}
}
export const followApi = { 
	getFollow(userId) {return instance.post(`/follow/${userId}`).then(response => response.data )},
	deleteFollow(userId) {return instance.delete(`/follow/${userId}`).then(response => response.data )}
}


