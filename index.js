const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
const bodytag = document.getElementsByTagName("body")[0];

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
    if (i >= 3) {
      newRow.className = "row";
      bodytag.appendChild(newRow);
      let space = document.createElement("div");
      space.className = "key";
      space.id = "spacebar";
      space.setAttribute("onclick", "keyPress(id)");
      space.textContent = " ";
      newRow.appendChild(space);
      
    }
  }

}
function keyPress(id) {
  let input = document.getElementsByTagName("div")[34];
  if (id == "spacebar") {
    input.textContent = input.textContent + " "
  }
  else {
    input.textContent = input.textContent + id
  }
}
function Submittext() {
  let input = document.getElementsByTagName("div")[34]
  let output = document.getElementsByTagName("div")[38]
  output.textContent = input.textContent
  input.textContent = ""
}
