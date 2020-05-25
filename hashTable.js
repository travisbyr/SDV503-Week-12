/*
function Hash() {
  this.length = 0;
  this.items = new Array();
  for (var i = 0; i < arguments.length; i += 2) {
    if (typeof arguments[i + 1] != "undefined") {
      this.items[arguments[i]] = arguments[i + 1];
      this.length++;
    }
  }  this.removeItem = function (in_key) {
    var tmp_value;
    if (typeof this.items[in_key] != "undefined") {
      this.length--;
      var tmp_value = this.items[in_key];
      delete this.items[in_key];
    }
    return tmp_value;
  };

  this.getItem = function (in_key) {
    return this.items[in_key];
  };
  this.setItem = function (in_key, in_value) {
    if (typeof in_value != "undefined") {
      if (typeof this.items[in_key] == "undefined") {
        this.length++;
      }

      this.items[in_key] = in_value;
    }
    return in_value;
  };

  this.hasItem = function (in_key) {
    return typeof this.items[in_key] != "undefined";
  };
}

var myHash = new Hash("1", [1, 10, 5], "2", [2, 1, 8], "3", [3, 30, 300]);



for (var i in myHash.items) {
  console.log("| KEY: " + i + " |, VALUE: " + myHash.items[i]);
}

console.log(myHash.getItem(1));

console.log(myHash.removeItem(1));

console.log(myHash.items);

//********************************************************************************** */

/*


function Hash() {
    length = 0 (bucket length)
    items = a new array
    for (i is less than length of arguments (bucket length); i + 2) {
      if (typeof arguments[i + 1] (index value) is not hashed) {
        index of items array = arguments index;
        length ++ (increase bucket size)
      }
    }
}
  
  var myHash = new Hash("index value", data);
  

  */
