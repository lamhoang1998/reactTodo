let ID = 0;

export class Todo {
	constructor(text) {
		this.text = text;

		this.id = ID;

		ID++;
	}
}

export class TodoStatus extends Todo {
	constructor(text) {
		super(text);

		this.status = "";
	}
}

console.log(new Todo("HTML"));
console.log(new TodoStatus("JS"));
