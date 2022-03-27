//generic class constraint
interface Product {
  sell(): void;
}

class CarPoduct implements Product {
  sell(): void {
    console.log(`jual Mobil`);
  }
}

class MotorProduct implements Product {
  sell(): void {
    console.log(`jual Motor`);
  }
}

function sellProducts<T extends Product>(products: T[]): void {
  products.forEach((i) => i.sell());
}

sellProducts([new CarPoduct(), new MotorProduct()]);

function getProp<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const prop = {
  a: 1,
  b: 2,
  c: 3,
};

console.info(getProp(prop, "a"));
console.info(getProp(prop, "b"));
// console.info(getProp(prop, "z")); //error
