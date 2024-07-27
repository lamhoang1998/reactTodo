import { useRef, useState } from "react";
import { Todo } from "./todo";
import { getQueryString } from "./utils";

import Search from "./Search";
import AddTodo from "./AddTodo";

function TodoList() {
	const [todos, setTodos] = useState([]);

	const [search, setSearch] = useState("");

	const [editID, setEditID] = useState(null);

	const inputRef = useRef(null);

	const onSubmitTodo = (event) => {
		event.preventDefault();

		if (editID) {
			const id = editID;
			const tempValue = inputRef.current.value;

			setTodos((todos) => {
				const todo = todos.find((t) => t.id === id);
				todo.text = tempValue;

				return [...todos];
			});

			setEditID(null);
		} else {
			const newTodo = new Todo(inputRef.current.value);

			setTodos((c) => [newTodo, ...c]);
		}

		inputRef.current.value = "";
		inputRef.current.focus();
	};

	const onEditTodo = (event) => {
		inputRef.current.value = event.currentTarget.dataset.text;

		setEditID(+event.currentTarget.dataset.id);
	};

	const onDeleteTodo = (event) => {
		const id = +event.currentTarget.dataset.id;

		setTodos((tds) => {
			return tds.filter((t) => t.id !== id);
		});
	};

	return (
		<>
			{/* two way binding */}
			{/* <input
				setTodos={setTodos}
				
				value={search}
				placeholder="search"
				onChange={(event) => {
					
					console.log(event.target.value);

					setSearch(event.target.value);
				}}
			/> */}

			<Search onSetTodo={setTodos} search={search} onSetSearch={setSearch} />

			<hr />

			<AddTodo onSubmit={onSubmitTodo} refValue={inputRef} edit={editID} />

			<ul>
				{todos.map((t) => {
					return (
						<li key={t.id}>
							<span>{t.text}</span>
							<button data-id={t.id} data-text={t.text} onClick={onEditTodo}>
								Edit
							</button>
							<button data-id={t.id} onClick={onDeleteTodo}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default TodoList;
