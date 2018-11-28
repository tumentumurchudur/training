abstract class Model {
  constructor(data?: object) {
      if (data) {
          Object.assign(this, data);
      }
  }
}
class TestModel extends Model {
  public name: string;
  public age: number;

  constructor(data: any) {
      super(data);
  }
}

const myModel = new TestModel({ name: "Tumen", age: 38, race: "Az" });
console.log(myModel)

interface IModelConstructor<T extends Model> {
  new (data: any): T;
}

abstract class ModelCollection<T> extends Array<T> {
  constructor(model: IModelConstructor<T>, data?: object[]) {
      super();

      if (data && data.length) {
          data.forEach(modelData => this.push(new model(modelData)));
      }
  }
}

class TestModels extends ModelCollection<TestModel> {
  constructor(data: any) {
      super(TestModel, data);
  }
}

const collection = new TestModels([
  { name: "t1", age: 20 },
  { name: "t2", age: 30 }
]);

console.log("collection", collection);
