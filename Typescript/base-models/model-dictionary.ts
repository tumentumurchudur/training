/**
 * ==================================================================================================
 * This file is part of the Navitaire dotREZ application.
 * Copyright © 2017 Navitaire LLC  An Amadeus company. All rights reserved.
 * ==================================================================================================
 */

import { IModelConstructor } from "./interfaces";

/**
 * Wraps a serialized Dictionary<string, Model> in a JavaScript Array of key/value pairs.
 * 
 * @export
 * @abstract
 * @class ModelDictionary
 * @classdesc 
 * This class cannot extend Map due to limitations with the JSON serialization performed by
 * chromium during ipc communication (the client is accessed remotely in renderer/webview processes). 
 * This process does not use the global JSON object for serialization, and so it must be created
 * as an array of key/value pairs in order to be deserialized for use by the consumer as an iterable,
 * this Array could also then be used to easily create a new Map.
 * @extends {Array<[string, T]>}
 * @template T
 */
export abstract class ModelDictionary<T> extends Array<[string, T]> {
    /**
     * Creates an instance of ModelDictionary.
     * 
     * @Internal
     * @param {IModelConstructor<T>} model 
     * @param {object} [data]
     * 
     * @memberof ModelDictionary
     */
    constructor(model: IModelConstructor<T>, data?: object) {
        super();

        if (data) {
            Object.keys(data).forEach(key => {
                this.push([key, new model(data[key])]);
            });
        }
    }
}
