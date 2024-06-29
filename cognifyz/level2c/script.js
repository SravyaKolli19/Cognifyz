function result() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerHTML = "Please enter valid numbers...";
    } else {
      var result = num1 + num2;
      document.getElementById('result').innerHTML = "Addition of two numbers is: " + result;
    }
  }