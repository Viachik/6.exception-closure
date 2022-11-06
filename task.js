// Задача №1. Форматтер чисел

function parseCount(element) {
  const parsed = parseInt(element);
  if (isNaN(parsed)) {
    throw new Error("Невалидное значение");
  }
  return parsed;
}
console.log(parseCount('5', 10))

function validateCount(element) {
  try{
    parseCount(element)
    return parsed;
  } catch(error) {
    console.log(error)
  }
}

// Задача №2. Треугольник

class Triangle {
    constructor(side1, side2, side3) {
        if ((side1 + side2) < side3 && (side1 + side3) < side2 && (side2 + side3) < side1) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.getPerimeter = side1 + side2 + side3;
        this.getArea = Math.sqrt((getPerimeter/2)*(getPerimeter/2 - side1)*(getPerimeter/2 - side2)*(getPerimeter/2 - side3)).toFixed(2);

/*        return [
            getPerimeter = side1 + side2 + side3,
            getArea = Math.sqrt((getPerimeter/2)*(getPerimeter/2 - side1)*(getPerimeter/2 - side2)*(getPerimeter/2 - side3)).toFixed(2)
        ];
*/
    }
}

let triangle = new Triangle(1, 2, 3);
console.log(triangle)

function getTriangle(side1, side2, side3){
    try {
        let triangle = new Triangle(side1, side2, side3);
        return triangle;
    } catch {
        let exception = {};
        exception.getArea(() => "Ошибка! Треугольник не существует");
        exception.getPerimeter(() => "Ошибка! Треугольник не существует");
        return exception;
    }
}