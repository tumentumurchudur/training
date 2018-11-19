/**
 * ==================================================================================================
 * This file is part of the Navitaire dotREZ application.
 * Copyright © 2017 Navitaire LLC  An Amadeus company. All rights reserved.
 * ==================================================================================================
 */

/**
 * Abstract class for creating a model from a serialized JSON response.
 * 
 * @Internal
 * @export
 * @abstract
 * @class Model
 */
export abstract class Model {
    /**
     * Creates an instance of Model.
     * 
     * @Internal
     * @param {object} [data]
     * 
     * @memberof Model
     */
    constructor(data?: object) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
