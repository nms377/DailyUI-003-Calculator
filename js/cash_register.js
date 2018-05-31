function cashRegister() {
  var calculator = calculatorModule();
  var displayValue = 0;
  var operator = "";
  var firstNum = 0;
  var _memory = 0;

  //DISPLAY BOX <-- THIS WILL HOLD BUTTON VALUES

  var display = document.createElement("h1");
  display.id = "display";
  display.innerHTML = displayValue;
  displayContainer.appendChild(display);

  // NUMBER BUTTONS <-- using event listeners to display button value on click

  var button_seven = document.createElement("button");
  button_seven.innerHTML = "7";
  seven.appendChild(button_seven);
  document.getElementById("seven").addEventListener("click", function() {
    _loadNum(7);
  });

  var button_eight = document.createElement("button");
  button_eight.innerHTML = "8";
  eight.appendChild(button_eight);
  document.getElementById("eight").addEventListener("click", function() {
    _loadNum(8);
  });

  var button_nine = document.createElement("button");
  button_nine.innerHTML = "9";
  nine.appendChild(button_nine);
  button_nine.addEventListener("click", function() {
    _loadNum(9);
  });

  var button_four = document.createElement("button");
  button_four.innerHTML = "4";
  four.appendChild(button_four);
  button_four.addEventListener("click", function() {
    _loadNum(4);
  });

  var button_five = document.createElement("button");
  button_five.innerHTML = "5";
  five.appendChild(button_five);
  button_five.addEventListener("click", function() {
    _loadNum(5);
  });

  var button_six = document.createElement("button");
  button_six.innerHTML = "6";
  six.appendChild(button_six);
  button_six.addEventListener("click", function() {
    _loadNum(6);
  });

  var button_one = document.createElement("button");
  button_one.innerHTML = "1";
  one.appendChild(button_one);
  button_one.addEventListener("click", function() {
    _loadNum(1);
  });

  var button_two = document.createElement("button");
  button_two.innerHTML = "2";
  two.appendChild(button_two);
  button_two.addEventListener("click", function() {
    _loadNum(2);
  });

  var button_three = document.createElement("button");
  button_three.innerHTML = "3";
  three.appendChild(button_three);
  button_three.addEventListener("click", function() {
    _loadNum(3);
  });

  var button_zero = document.createElement("button");
  button_zero.innerHTML = "0";
  zero.appendChild(button_zero);
  button_zero.addEventListener("click", function() {
    _loadNum(0);
  });

  ///Not sure how to get it to add a double zero. Right now it only prints a single zero. - Coco
  // var button_dblZero = document.createElement('button');
  // button_dblZero.innerHTML = "00";
  // dblZero.appendChild(button_dblZero);
  // button_dblZero.addEventListener("click", function() {
  //   _loadDblZero();
  // });

  ///Created a decimal button, however, I'm not sure how to execute a decimal using the current function. I get a throw error so I thought I could do number || string to allow the '.' to pass but it still showed up as an error - Coco

  var button_decimal = document.createElement("button");
  button_decimal.innerHTML = ".";
  decimal.appendChild(button_decimal);
  button_decimal.addEventListener("click", function() {
  });

  //FUNCTIONS USED TO GRAB CURRENT TOTAL, LOAD CURRENT TOTAL INTO DISPLAY
  //function regAdd(x) {
  //   displayValue = x;
  //   display.innerHTML = displayValue;
  //}

  // loadNum initialize number to display
  function _loadNum(x) {
    calculator.load(x);
    displayValue = x;
    display.innerHTML = displayValue;
    console.log(displayValue);
  }

  //OPERATION BUTTONS

  //Moved the operating buttons outside of first child scope to avoid possible malfunction -Coco

  var button_divide = document.createElement("button");
  button_divide.innerHTML = "/";
  divide.appendChild(button_divide);
  button_divide.addEventListener("click", function() {
    operator = "/";
    firstNum = displayValue;
  });

  var button_multiply = document.createElement("button");
  button_multiply.innerHTML = "*";
  multiply.appendChild(button_multiply);
  button_multiply.addEventListener("click", function() {
    operator = "*";
    firstNum = displayValue;
  });

  var button_subtract = document.createElement("button");
  button_subtract.innerHTML = "-";
  subtract.appendChild(button_subtract);
  //click changes operator to - and stores display into firstNumhello everyone.
  button_subtract.addEventListener("click", function() {
    operator = "-";
    firstNum = displayValue;
  });

  var button_add = document.createElement("button");
  button_add.innerHTML = "+";
  add.appendChild(button_add);
  //click changes operator value to + and firstNum to current displayValue
  button_add.addEventListener("click", function() {
    operator = "+";
    firstNum = displayValue;
  });

  //Created a function to display total of the current calculation. Doesn't work prints out the getTotal function in calculator.js
  var button_equals = document.createElement("button");
  button_equals.innerHTML = "TOTAL";
  equals.appendChild(button_equals);
  button_equals.addEventListener("click", function() {
    _calculateEquation(operator);
  });
  //Created function to check operator and which will execute the correct operation - aukai
  function _calculateEquation(operator) {
    switch (operator) {
      case ".":
        displayValue = calculator.decimal(firstNum, displayValue);
        display.innerHTML = displayValue;
      case "+":
        displayValue = calculator.add(firstNum, displayValue);
        display.innerHTML = displayValue;
        break;
      case "-":
        displayValue = calculator.subtract(firstNum, displayValue);
        display.innerHTML = displayValue;
        break;
      case "*":
        displayValue = calculator.multiply(firstNum, displayValue);
        display.innerHTML = displayValue;
        break;
      case "/":
        displayValue = calculator.divide(firstNum, displayValue);
        display.innerHTML = displayValue;
    }
  }

  // BUTTONS TO CLEAR, GET BALANCE, DEPOSIT, WITHDRAW

  //Created a function to reset calculator total to zero, but it dosn't clear on click or at all and prints an undefined in the console log
  var button_clear = document.createElement("button");
  button_clear.innerHTML = "A/C";
  clear.appendChild(button_clear);
  button_clear.addEventListener("click", function() {
    _clearCalculator();
  });

  function _clearCalculator() {
    display.innerHTML = 0;
  }

  function _getMemory() {
    return _memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */
  function _storeTotal() {
    _memory = _memory + displayValue;
  }

  function _withdrawCash() {
    _memory = _memory - displayValue;
  }

  var button_getBalance = document.createElement("button");
  button_getBalance.innerHTML = "BALANCE";
  getBalance.appendChild(button_getBalance);
  button_getBalance.addEventListener("click", function() {
    display.innerHTML = _getMemory();
  });

  var button_depositCash = document.createElement("button");
  button_depositCash.innerHTML = "DEPOSIT";
  depositCash.appendChild(button_depositCash);
  button_depositCash.addEventListener("click", function() {
    _storeTotal();
  });

  var button_withdrawCash = document.createElement("button");
  button_withdrawCash.innerHTML = "WITHDRAW";
  withdrawCash.appendChild(button_withdrawCash);
  button_withdrawCash.addEventListener("click", function() {
    _withdrawCash();
  });
}

cashRegister();
