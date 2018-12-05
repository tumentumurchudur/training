import { ModelCollection } from "./base-models/model-collection";
import { TestModel } from "./test-model";

/**
 * A collection of @type{TestModel}
 */
export class TestModels extends ModelCollection<TestModel> {
	constructor(data: any) {
			super(TestModel, data);
	}
}
/*

const collection = new TestModels([
    { name: 't1', age: 20 },
    { name: 't2', age: 30 }
]);

*/
