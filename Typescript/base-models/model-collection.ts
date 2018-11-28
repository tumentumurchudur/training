import { IModelConstructor } from "./interfaces";

/**
 * Wraps a serialized IEnumerable<T> in a javascript array.
 */
export abstract class ModelCollection<T> extends Array<T> {
    constructor(model: IModelConstructor<T>, data?: Array<object>) {
        super();

        if (data && data.length) {
            data.forEach(modelData => this.push(new model(modelData)));
        }
    }
}
