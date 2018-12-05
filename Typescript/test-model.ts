import { Model } from "./base-models";

export class TestModel extends Model {
	public name: string;
	public age: number;

	constructor(data: any) {
		super(data);
	}
}

// const myModel = new TestModel({ name: 'Nancy', age: 20 });
