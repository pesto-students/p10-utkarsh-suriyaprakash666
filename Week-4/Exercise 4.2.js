function Person() {
    this.name = undefined
  }
  
  Person.prototype.initial = function (name) {
    this.name = name
  }
  
  function Teacher() {
    this.teach = function (subject) {
      return `${this.name} is now teaching ${subject}`
    }
  }
  
  // Inheritance took place

  Teacher.prototype = Person.prototype
  
  let me = new Teacher()
  
  me.initial('Suriya')
  console.log(me.teach('Inheritance'))