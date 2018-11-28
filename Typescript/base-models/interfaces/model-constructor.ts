import { Model } from "../../base-models";

/**
 * Interface for the construction of models objects.
 */
export interface IModelConstructor<T extends Model> {
    new (data: any): T;
}
