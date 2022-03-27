//generic constraint => menampilkan option setiap type beberapa generic

interface Length {
  length: number;
}

function genericConstraint5<T extends Length> /*T memiliki option length*/(arg: T): T {
  console.info(arg.length); //agar dapat mengakses arg.length
  return arg;
}

console.info(genericConstraint5<number[]>([1, 2, 3]));
