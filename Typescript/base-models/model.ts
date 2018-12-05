/**
 * Abstract class for creating a model from a serialized JSON response.
 */
export abstract class Model {
	constructor(data?: object) {
		if (data) {
				Object.assign(this, data);
		}
	}
}
