function myFun(str) {
    if(str.length > 0 && str.length <= 10){
      return str.length;
    }
    throw new Error("Doesn't match 1-10chars")
  }

  function reverseStr(str){
    return str.split('').reverse('').join('');
  }

  function cap(str){
    return str[0].toUpperCase() + str.slice(1)
  }
console.log(cap("hello"))
  class Calculator{
    static Add(a,b){
      return a + b
    }
    static Subtract(a,b){
      return a - b
    }
    static Divide(a,b){
      return a / b
    }
    static Multiply(a,b){
      return a * b
    }
  }
module.exports = {myFun, reverseStr, Calculator, cap};
