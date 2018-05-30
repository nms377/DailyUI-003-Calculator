

/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 function calculatorModule () {

  var _memory = 0;
  var _total = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function _load (x) {
    //validator(x);
    _total = x;
    return _total;
  }



  /**
   * Return the value of `total`
   * @return { Number }
   */
  // function _getTotal() {

   // return _total;
  // }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   //updated add function to work with two parameters
  function _add(x, y) {
   // validator(x,y);
    _total = x + y;
    return _total;
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   //updated subtract to two parameters and returning a number
  function _subtract(x, y) {
    //validator(x,y);
    _total = x - y;
    return _total;
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function _multiply(x, y) {
     _total = x * y;
     return _total;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function _divide(x, y) {
     _total = x / y;
     return _total;
   }




  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   // function _getMemory() {
   //   return _memory;
   // }

  /**
   * Stores the value of `total` to `memory`
   */
   // function _storeTotal( ) {
   //    _memory = _memory + cashReg.register;

   // }


  /**
   * Clear the value stored at `memory`
   */
   function _clear() {
     _memory = 0;
   }
  /**
   * Validation
   */
   //added y to validator
   //function validator(x,y) {
   //  if (typeof x !== "number" && typeof y !== "number") {
   //   throw Error();
   //  }
   //}

   return {
    load: _load,
    //getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
   // recallMemory: _getMemory,
   // storeTotal: _storeTotal,
    clearMemory: _clear
   };
 }
