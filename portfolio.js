const parent = document.getElementById("container");
const projectBtn = document.querySelector("a")
const projectTxt = document.querySelector("#projectTxt");
const container2 = document.querySelector("#container2")


//star spawning
function clone() {
  let newdiv = document.createElement('div')
  newdiv.className = "star";
  const randomNum = Math.floor(Math.random() * 98);
  const randomNum2 = Math.floor(Math.random() * 95);
  newdiv.style.left = randomNum + "%";
  newdiv.style.top = randomNum2 + "%";

  parent.appendChild(newdiv)

  let amount = document.querySelectorAll('.star');

  if (amount.length >= 25) {
    for (let i = 0; i < 10; i++) {
      amount[i].remove()
    }
  }
}

let interval = setInterval(() => clone(), 90);


//project animation
projectBtn.addEventListener('click', () => {
  projectTxt.classList.add("animation");
})

//shooting stars
function shooting(){
  const randomNum3 = Math.floor(Math.random() * 100);
  const randomNum4 = Math.floor(Math.random() * 100);

  let newStar = document.createElement("div");
  newStar.classList.add("shootingStar");

  newStar.style.top = randomNum3 + "%";
  newStar.style.left = randomNum4 + "%";

  setTimeout(()=>{
    newStar.remove()
  },1000)


  container2.appendChild(newStar);
}

let interval2 = setInterval(()=> shooting(), 100)






