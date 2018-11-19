/**
 * ==================================================================================================
 * This file is part of the Navitaire dotREZ application.
 * Copyright © 2017 Navitaire LLC  An Amadeus company. All rights reserved.
 * ==================================================================================================
 */

import { IModelConstructor } from "./interfaces";

/**
 * Wraps a serialized IEnumerable<T> in a javascript array.
 * 
 * @Internal
 * @export
 * @abstract
 * @class ModelCollection
 * @extends {Array<T>}
 * @template T
 */
export abstract class ModelCollection<T> extends Array<T> {
    /**
     * Creates an instance of ModelCollection.
     * 
     * @Internal
     * @param {IModelConstructor<T>} model 
     * @param {Array<object>} [data]
     * 
     * @memberof ModelCollection
     */
    constructor(model: IModelConstructor<T>, data?: Array<object>) {
        super();

        if (data && data.length) {
            data.forEach(modelData => this.push(new model(modelData)));
        }
    }
}
