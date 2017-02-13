function fizzbuzz(num) {
  var word = ""

  // for(var i = 0; i < 100; i++)
    if(num % 5 && num % 3){
      word += "fizzbuzz"
    }
    else if (num % 5) {
      word += "buzz"
    }
    else if (num % 3){
      word += "fizz"
    }else{
      word += num
    }
}

module.exports = fizzbuzz
