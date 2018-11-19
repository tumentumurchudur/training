"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelCollection extends Array {
    constructor(model, data) {
        super();
        if (data && data.length) {
            data.forEach(modelData => this.push(new model(modelData)));
        }
    }
}
exports.ModelCollection = ModelCollection;
//# sourceMappingURL=model-collection.js.map