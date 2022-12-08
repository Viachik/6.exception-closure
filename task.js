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
    return parseCount(element);
  } catch(error) {
    return error;
  }
}

// Задача №2. Треугольник

class Triangle {
  constructor(side1, side2, side3) {
      if ((side1 + side2) < side3 || (side1 + side3) < side2 || (side2 + side3) < side1) {
          throw new Error("Треугольник с такими сторонами не существует");
      }
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
  }
  getPerimeter() {
    return (this.side1 + this.side2 + this.side3);
  }
  getArea() {
    return (Number(Math.sqrt((getPerimeter/2)*(getPerimeter/2 - this.side1)*(getPerimeter/2 - this.side2)*(getPerimeter/2 - this.side3)).toFixed(2)));
  }
}

let triangle = new Triangle(1, 2, 3);
console.log(triangle)

function getTriangle(side1, side2, side3){
    try {
      return new Triangle(side1, side2, side3);
    } catch {
        let exception = {};
        exception.getArea = "Ошибка! Треугольник не существует";
        exception.getPerimeter = "Ошибка! Треугольник не существует";
        return exception;
    }
}

/*
Задача №2. Треугольник

class Triangle {
  constructor(side1, side2, side3) {
      if ((side1 + side2) < side3 || (side1 + side3) < side2 || (side2 + side3) < side1) {
          throw new Error("Треугольник с такими сторонами не существует");
      }
      this.getPerimeter = getPerimeter;
      this.getArea = getArea;
  }
  getPerimeter(side1, side2, side3) {
    return (side1 + side2 + side3);
  }
  getArea(getPerimeter, side1, side2, side3) {
    return Math.sqrt((getPerimeter/2)*(getPerimeter/2 - side1)*(getPerimeter/2 - side2)*(getPerimeter/2 - side3)).toFixed(2);
  }
}

let triangle = new Triangle(1, 2, 3);
console.log(triangle)

function getTriangle(side1, side2, side3){
    try {
      return new Triangle(side1, side2, side3);
    } catch {
        let exception = {};
        exception.getArea = "Ошибка! Треугольник не существует";
        exception.getPerimeter = "Ошибка! Треугольник не существует";
        return exception;
    }
}
*/