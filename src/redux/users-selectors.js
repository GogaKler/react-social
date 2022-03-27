import { createSelector } from "reselect"


const getUsersSelector = (state) => {
	return state.users.Users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
	return users.filter(u => true)
})

export const getPageSize = (state) => {
	return state.users.pageSize
}
export const getTotalUsersCount = (state) => {
	return state.users.totalUsersCount
}
export const getCurrentPage = (state) => {
	return state.users.currentPage
}
export const getIsFetching = (state) => {
	return state.users.isFetching
}
export const getFollowProgress = (state) => {
	return state.users.followProgress
}
