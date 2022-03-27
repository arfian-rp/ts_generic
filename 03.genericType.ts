//generic type
type Generic3<T> = T;

function genericType3<T>(val: T): Generic3<T> {
  return val;
}

console.info(genericType3<string>("jodi"));
console.info(genericType3<number>(1));
// console.info(genericType3<number>(true));//error
