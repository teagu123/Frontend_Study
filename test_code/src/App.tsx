import React, { useState } from 'react'
import './styles.css'

export default function App({
	totalItems,
	itemsPerPage,
	pageNumberTestId,
}: {
	totalItems: number
	itemsPerPage: number
	pageNumberTestId?: string
}) {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i)
	}

	const [currentPage, setCurrentPage] = useState(1)

	const handleClick = (number: number) => {
		setCurrentPage(number)
	}

	const handlePrevClick = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handleNextClick = () => {
		if (currentPage < pageNumbers.length) {
			setCurrentPage(currentPage + 1)
		}
	}

	const renderPageNumbers = pageNumbers.map(number => {
		return (
			<li key={number}>
				<span
					data-testid={pageNumberTestId}
					className={currentPage === number ? 'active' : undefined}
				>
					{number}
				</span>
			</li>
		)
	})

	return (
		<nav>
			<ul className="pagination">
				<li>
					<a
						href="#"
						onClick={handlePrevClick}
						className={currentPage === 1 ? 'disabled' : undefined}
					>
						Previous
					</a>
				</li>
				{renderPageNumbers}
				<li>
					<a
						href="#"
						onClick={handleNextClick}
						className={
							currentPage === pageNumbers.length ? 'disabled' : undefined
						}
					>
						Next
					</a>
				</li>
			</ul>
		</nav>
	)
}
