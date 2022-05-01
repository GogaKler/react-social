export const updateObjectInArray = (items, itemId, objectPropName) => {
	return items.map(e => { 
		if (e[objectPropName] === itemId) {
			return { ...e, followed: !e.followed }
		};
		return e;
	})
}