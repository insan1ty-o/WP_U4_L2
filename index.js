const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
const bodytag = document.getElementsByTagName("body")[0];

var counter = 0
function genKeyboard(){
  for (let i=0; i < 3; i++){
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
  let output = document.getElementsByTagName("div")[32];
  output.textContent = output.textContent + id
}

