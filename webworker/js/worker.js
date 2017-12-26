function fib() {
  var a = 1,
      k = 20,
      b = 1;
  for (var i = 3; i <= k; i++) {
    var c = a + b;
    a = b;
    b = c;
      postMessage(c);
    }
  }

fib();
