//generic function
function getData1<T>(value: T) {
  return value;
}

const data = getData1<number[]>([1, 2, 3, 4]);
console.info(data.length); //kalau pake generic kita bisa mengakses properti object
