"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelDictionary extends Array {
    constructor(model, data) {
        super();
        if (data) {
            Object.keys(data).forEach(key => {
                this.push([key, new model(data[key])]);
            });
        }
    }
}
exports.ModelDictionary = ModelDictionary;
//# sourceMappingURL=model-dictionary.js.map