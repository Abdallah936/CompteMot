var phrases = "Bonjour trop lent";

function nbrO(phrase) {
  var nombre = phrase.includes("o");
  var mot = phrase.split(" ")
  const regex1 = /[a,e,u,i,o,y]/g;
const found1 = phrase.match(regex1)

  const regex = /[a-z]/g;
const found = phrase.match(regex);
  console.log(found)
  for (var i = 0; i < phrase.length; i++) {
    var nombre0 =+ i;
  }
  console.log(mot)
  if (nombre === true) {
    for (var i = 0; i < phrase.length; i++) {
      var nombre0 =+ i;
    }
  }console.log(found1)
  return nombre0;
}
nbrO(phrases)
