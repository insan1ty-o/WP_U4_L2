const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
const bodytag = document.getElementsByTagName("body")[0];
const phrases = ["BURGER","CIRCLE","NUGGET","BETTER","FASTER","STRONGER","STARDEW","ISAAC","PUNCHOUT","CALAMITY"]
const choice =  phrases[Math.floor(Math.random() * (9 - 0 + 1)) + 0]
let deathcounter = 0 
let wincounter = 0 
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
    if (i == 3) {
      console.log(choice)
      length = choice.length
      holder = document.getElementsByClassName("in_and_out")[0]
      console.log(length)
      for(let i= 0; i < length; i++) {
        let newletter = document.createElement("div");
        newletter.className = "letter";
        newletter.id = i
        holder.appendChild(newletter);
        console.log("increased div amount")
      }
    }
  }

}
function keyPress(id) {
  let output = document.getElementsByTagName("div")[3];
  index = []
  id = id.toUpperCase();
  length = choice.length
  if (choice.includes(id)) {
    console.log("yo")  
    for(let i= 0; i < length; i++) {
      console.log(choice[i])
      if (choice[i] == id) {
        index.push(i)
        
      }
    }

    id = id.toLowerCase()  
    const key = document.getElementById(id);
    key.style.backgroundColor = "green";
    key.style.cursor = "auto";
    key.removeAttribute("onclick")
    console.log(index)
    for (let i = 0; i < index.length; i++) {
      phrasebox = document.getElementById(`${[index[i]]}`)
      phrasebox.textContent = id.toUpperCase()
      wincounter +=1
    }
    if (wincounter == choice.length) {
      winstate = document.getElementById("winstate")
      winstate.textContent = "Congratulations, YOU WON!!!"
      winstate = winstate.style.visibility = "visible"  
      document.body.style.backgroundImage = "url('resources/index/download.jpg')";
      const resetbutton = document.getElementById("replay")
      resetbutton = resetbutton.style.visibility = "visible"
    }
  }
  else {

    id = id.toLowerCase()
    const key = document.getElementById(id);
    key.style.backgroundColor = "red";
    key.style.cursor = "auto";
    key.removeAttribute("onclick")
    deathcounter +=1
    guy = document.getElementById(`w${[deathcounter]}`)
    guy = guy.style.visibility = "visible"
    console.log(deathcounter)
    console.log(choice.length)
    if (deathcounter == 6) {
      winstate = document.getElementById("winstate")
      winstate.textContent = "Congratulations, YOU LOSE!!!"
      winstate = winstate.style.visibility = "visible"
      document.body.style.backgroundImage = "url('resources/index/eyedeath.gif')";
      const resetbutton = document.getElementById("replay")
      resetbutton = resetbutton.style.visibility = "visible"
      
      

    }
  }
}
function Reset(){
  location.reload()
}
