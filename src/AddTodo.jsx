function AddTodo({ onSubmit, refValue, edit }) {
	return (
		<>
			<form onSubmit={onSubmit}>
				<input ref={refValue} placeholder="rửa chén" />

				<button type="submit">{edit ? "Save" : "Add"}</button>
			</form>
		</>
	);
}

export default AddTodo;
