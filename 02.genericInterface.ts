//generic interface
interface Generic2<T> {
  propA: T;
}

function genericInterface2<T>(val: T): Generic2<T> {
  let data: Generic2<T> = {
    propA: val,
  };
  return data;
}

console.info(genericInterface2<string>("jodi"));
console.info(genericInterface2<number>(123));
// console.info(genericInterface2<string>(true));//error
