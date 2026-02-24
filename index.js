const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
const bodytag = document.getElementsByTagName("body")[0];
const phrases = ["BURGER","CIRCLE","NUGGET","BETTER","FASTER","STRONGER","STARDEW","ISAAC","PUNCHOUT","CALAMITY"]
const choice =  return Math.floor(Math.random() * (9 - min + 1)) + min 
var counter = 0
function genKeyboard(){
  for (let i=0; i < 4; i++){
    let newRow = document.createElement("div");
    newRow.className = "row";
    bodytag.appendChild(newRow);
    while (alpha[counter] != "*" && counter < alpha.length){
      
      let newkey = document.createElement("div");
      newkey.className = "key";
      newkey.id = alpha[counter]
      newkey.setAttribute("onclick", "keyPress(id)")
      newkey.textContent = alpha[counter].toUpperCase();
      newRow.appendChild(newkey);
      counter++
    }
    counter++
  }

}
function keyPress(id) {
  let output = document.getElementsByTagName("div")[3];
  output.textContent = output.textContent + id
}

function randint(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min 
}