function trim(){
 const a = "    Ranjeet          "
 console.log(a.trim())
}

function changetoLowerCase(){
  const b = "JAVASCRIPT IS A FORGIVING LANGUAGE"
  console.log(b.toLocaleLowerCase())
}
function changeToUpperCase(){
 const c = "i am a trainee at functionup"
 console.log(c.toLocaleUpperCase())
}


module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase