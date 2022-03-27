//generic class
interface Generic4<T> {
  propA: T;
  methodA(): T;
}

class GenericClass4<T> implements Generic4<T> {
  constructor(public propA: T) {}
  methodA(): T {
    return this.propA;
  }
}

console.info(new GenericClass4("yudi").methodA());
