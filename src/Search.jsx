function Search({ onSetTodo, search, onSetSearch }) {
	return (
		<>
			<input
				setTodos={onSetTodo}
				// set
				value={search}
				placeholder="search"
				onChange={(event) => {
					console.log(event.target.value);

					onSetSearch(event.target.value);
				}}
			/>
		</>
	);
}

export default Search;
