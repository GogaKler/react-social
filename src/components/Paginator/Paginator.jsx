import { useState } from 'react';
import { Button } from '../../components_style/components/Button/Button';
import { FlexContainer } from '../../components_style/components/Containers/Containers';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

	let pages = [];
	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	const pageNumbers = pages
		.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
		.map(p => (
			<span
				key={p}
				className={currentPage === p ? "pagination__selected" : undefined}
				onClick={() => { onPageChanged(p) }}
			>{p}</span>
		))

	return (
		<div className='pagination'>
			<FlexContainer align='center'>
				{portionNumber > 1 &&
					<Button transparent onClick={() => { setPortionNumber(portionNumber - 1) }} margin='0 10px 0 0'>Назад</Button>}
				{pageNumbers}
				{portionCount > portionNumber &&
					<Button transparent onClick={() => { setPortionNumber(portionNumber + 1) }} margin='0 0 0 10px'>Далее</Button>}
			</FlexContainer>
		</div>
	);
}

export default Paginator;