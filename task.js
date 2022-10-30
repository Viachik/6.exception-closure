// Задача №1. Форматтер чисел

function parseCount(element, base) {
  const parsed = parseInt(element, base);
  if (isNaN(parsed)) {
    throw new Error("Невалидное значение");
  }
  return parsed;
}
console.log(parseCount('5', 10))

function validateCount(element, base) {
  try{
    parseCount(element, base)
  } catch(error) {
    console.log(error)
  } finally {
    parseCount(element, base)
  }
}

// Задача №2. Треугольник

class Triangle {
    constructor(side1, side2, side3) {
        if ((side1 + side2) < side3) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            let getPerimeter;
            let getArea;
            return [
                getPerimeter = side1 + side2 + side3,
                getArea = Math.sqrt((getPerimeter/2)*(getPerimeter/2 - side1)*(getPerimeter/2 - side2)*(getPerimeter/2 - side3)).toFixed(2)
            ]
        }
    }
}

let triangle = new Triangle(1, 2, 3);
console.log(triangle)

function getTriangle(side1, side2, side3){
    try {
        return triangle = new Triangle(side1, side2, side3);
    } catch {
        let exception;
        exception.getArea: () => "Ошибка! Треугольник не существует";
        exception.getPerimeter: () => "Ошибка! Треугольник не существует";
        return exception;
    } finally {
        console.log(triangle)
    }
}