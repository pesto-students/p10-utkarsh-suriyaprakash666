function customPromise(mainCallback) {
  this.thenArr = [];
  this.status = "pending⌛";
  this.catchArr = () => {};
  this.value = undefined;

  this.resolve = function (value) {
    this.value = value;
    this.handleResolve();
    return this;
  }.bind(this);

  this.reject = function (value) {
    this.value = value;
    this.handleReject();
    return this;
  }.bind(this);

  this.then = function (callback) {
    this.thenArr.push(callback);
    return this;
  };

  this.catch = function (callback) {
    this.catchArr = callback;
    return this;
  };

  this.handleResolve = function () {
    try {
      this.thenArr.forEach((callback) => {
        callback(this.value);
        this.status = "fulfilled👍";
      });
    } catch (error) {
      this.status = "rejected👎";
      this.catchArr(this.value, error);
    }
  };

  this.handleReject = function (error) {
    this.status = "rejected👎";
    this.thenArr = [];
    this.catchArr(this.value, error);
  };

  mainCallback && mainCallback(this.resolve, this.reject);
  return this.value;
}

function getNumber() {
  return parseInt(Math.random() * 100);
}

function isDivisibleBy5() {
  let num = getNumber();
  let isDivisible = false;
  if (num % 5 == 0) isDivisible = true;
  return new customPromise(function (resolve, reject) {
    setTimeout(() => {
      isDivisible
        ? resolve(`${num} is Divisible By 5`)
        : reject(`${num} is not Divisible By 5`);
    });
  });
}

let prom = isDivisibleBy5(1000).then(console.log).catch(console.log);

console.log(prom.status);
setTimeout(() => console.log(prom.status), 2000);
