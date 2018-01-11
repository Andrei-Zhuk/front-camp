// Singleton

var scope;

function Singleton(){
  if (scope) {
    return scope
  }
  scope = this
}

console.log(new Singleton() === new Singleton())

// Factory and Prototype

function User() {
  this.readRights = true;
}

User.prototype.hasReadRights = function() {
  return !!this.readRights
}

User.prototype.hasWriteRights = function() {
  return !!this.writeRights
}

function Admin() {
  User.apply(this);
  this.writeRights = true
}

Admin.prototype.__proto__ = User.prototype

var a = new Admin()

console.log(a.hasWriteRights())

// Adapter

function complicatedFunc() {
  //some complicated lines of code

  return [
    {
      isComplicated: true
    },
    {
      isHardToRead: true
    },
    {
      isCouldBeEasier: true
    }
  ]
}

function adapter(func) {
  var complicatedResult = func()
  var simpleResult = {};

  for(var i = 0; i < complicatedResult.length; i++) {
    for (var key in complicatedResult[i]) {
      simpleResult[key] = complicatedResult[i][key]
    }
  }

  return simpleResult
}

console.log(adapter(complicatedFunc))

// Decorator

function Painter() {
  this.color = 'red'
}

Painter.prototype.paint = function(){
  document.body.style.backgroundColor = this.color
}

var painter = new Painter()

function paintGreen(target) {
  target.color = 'green'
}

paintGreen(painter)

// Command

function Manager() {
  this.employees = [
    {
      level: 'junior',
      salary: 800
    },
    {
      level: 'middle',
      salary: 1500
    }
  ]
}

Manager.prototype.execute = function(command, ...args) {
    return this[command](...args)
}

Manager.prototype['tell salary'] = function(id) {
    return this.employees[id].salary
}

Manager.prototype['tell job level'] = function(id) {
    return this.employees[id].level
}

var manager = new Manager()

console.log(manager.execute('tell salary', 1))

// Mediator

function Commander(){

}

Commander.prototype.execute = function(command) {
  switch (command) {
    case 'wash floor':
      return new BadSoldier().washFloor();
      break;

    case 'paint grass':
      return new BoredSoldier().paintGrass();
      break;

    default:
      return new Sergeant().execute(command)
  }
}

function BadSoldier(){

}

BadSoldier.prototype.washFloor = function(){
  return true
}

function BoredSoldier(){

}

BoredSoldier.prototype.paintGrass = function(){
  return true
}

function Sergeant(){

}

Sergeant.prototype.execute = function(){
  return true
}

console.log(new Commander().execute('wash floor'))
