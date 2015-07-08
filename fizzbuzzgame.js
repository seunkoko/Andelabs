function fizzBuzz(x){
  
    var fizz = x % 3;
    var buzz = x % 5;
    var fizzbuzz = x % 15;
    if (fizz === 0 && buzz === 0){
        return "FizzBuzz";
    }
    else if(buzz === 0){
        return "Buzz";
    }
    else if(fizz === 0){
        return "Fizz";
    }
    else{
        return x;
    }
}

fizzBuzz(15);