import { IModelConstructor } from "./interfaces";

/**
 * Wraps a serialized Dictionary<string, Model> in a JavaScript Array of key/value pairs.
 *
 * This class cannot extend Map due to limitations with the JSON serialization performed by
 * chromium during ipc communication (the client is accessed remotely in renderer/webview processes).
 * This process does not use the global JSON object for serialization, and so it must be created
 * as an array of key/value pairs in order to be deserialized for use by the consumer as an iterable,
 * this Array could also then be used to easily create a new Map.
 */
export abstract class ModelDictionary<T> extends Array<[string, T]> {
	constructor(model: IModelConstructor<T>, data?: object) {
		super();

		if (data) {
				Object.keys(data).forEach(key => {
						this.push([key, new model(data[key])]);
				});
		}
	}
}
