/**
 * ==================================================================================================
 * This file is part of the Navitaire dotREZ application.
 * Copyright © 2017 Navitaire LLC  An Amadeus company. All rights reserved.
 * ==================================================================================================
 */

import { Model } from "../../base-models";

/**
 * Interface for the construction of models objects.
 * 
 * @export
 * @interface IModelConstructor
 * @template T
 */
export interface IModelConstructor<T extends Model> {
    new (data: any): T;
}
