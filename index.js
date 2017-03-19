function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function Vicky(){
    console.log("Vicky");
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log("Hi");
  }
}
