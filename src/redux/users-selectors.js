import { createSelector } from "reselect"

const getUsersSelector = (state) => state.users.Users

export const getUsers = createSelector(getUsersSelector, (users) => {
	return users
})

export const getPageSize = (state) => state.users.pageSize
export const getTotalUsersCount = (state) => state.users.totalUsersCount
export const getCurrentPage = (state) => state.users.currentPage
export const getIsFetching = (state) => state.users.isFetching
export const getFollowProgress = (state) => state.users.followProgress
