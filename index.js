function receivesAFunction(fn){
  fn()
}

function returnsANamedFunction(argument){
  return function silly(){
    console.log(`an ${argument}`)
  }
}

function returnsAnAnonymousFunction(irrelevant){
  return function(){
    console.log(`${irrelevant}`)
  }
}
