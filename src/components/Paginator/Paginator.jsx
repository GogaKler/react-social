

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

	let pages = [];
	let pagesCount = Math.ceil(totalUsersCount / pageSize);

	for (let i = 1; i <= pagesCount; i++) {
		if (pages.length < 10) {
			pages.push(i);
		}
	}

	const pageNumbers = pages.map(p => (
		<span
			key={p}
			className={currentPage === p ? "pagination__selected" : undefined}
			onClick={() => { onPageChanged(p) }}
		>{p}</span>
	))

	return (
		<div className='pagination'>
			{pageNumbers}
		</div>
	);
}
 
export default Paginator;