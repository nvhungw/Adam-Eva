// https://learn.codegym.vn/courses/nen-tang-lap-trinh-v2-1/lessons/lop-va-doi-tuong-3/quizzes/bai-tap-phat-trien-ung-dung-nho-mo-phong-cau-chuyen-adam-va-eva

class Fruit {
  constructor(weightInit = 10) {
    this.weight = weightInit;
  }

  descrease() {
    if (!this.isEmpty()) {
      this.weight--;
    }
  }

  isEmpty() {
    return this.getWeight() == 0;
  }

  getWeight() {
    return this.weight;
  }
}

class Human {
  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  }

  isMale() {
    return this.gender == 'Male';
  }

  setGender(gender) {
    this.gender = gender;
  }

  checkFruit(fruitObj) {
    return !fruitObj.isEmpty(); // Check khối lượng có khác 0 (Hàm isEmpty = 0). Tương đương là fruit.weight > 0
  }

  eat(fruitObj) {
    if (this.checkFruit(fruitObj)) {
      // Ăn được
      this.weight++;
      fruitObj.descrease(); // Khối lượng quả táo giảm đi 1
    } else {
      // Không ăn được
      alert('Ăn hết rồi');
    }
  }

  // setName(name) {
  //   this.name = name;
  // }

  // getName(name) {
  //   return this.name;
  // }

  // setWeight(weight) {
  //   this.weight = weight;
  // }

  // say(string) {
  //   console.log(string);
  // }
}

console.log('---Tạo quả táo');
let apple = new Fruit(1);
console.log(apple);

console.log('---Tạo Human');
let adam = new Human('Adam', 'Male', 70);
let eva = new Human('Eva', 'Female', 45);
console.log(adam, eva);

console.log('---Ăn táo');
adam.eat(apple);
eva.eat(apple);
console.log(adam, eva);
console.log(apple);

// console.log('---Đặt tên');
// adam.setName('HungNV91');
// console.log(adam);

// console.log('---Set khối lượng');
// adam.setWeight('100');
// console.log(adam);

// console.log('---Nói');
// adam.say('hello');
