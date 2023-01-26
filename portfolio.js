var parent = document.getElementById("container")
const projectBtn = document.getElementById("container2")


//star spawning
function clone() {
  var newdiv = document.createElement('div')
  newdiv.className = "star";
  const randomNum = Math.floor(Math.random() * 98)
  const randomNum2 = Math.floor(Math.random() * 95);
  newdiv.style.left = randomNum + "%";
  newdiv.style.top = randomNum2 + "%";

  parent.appendChild(newdiv)

  var amount = document.querySelectorAll('.star')

  if(amount.length >= 25){
    for(var i = 0; i < 10; i++){
      amount[i].remove()
    }
  }
}

var interval = setInterval(() => clone(), 90)


