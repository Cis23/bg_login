const ulY = document.querySelector("ul.lines_y");
const ulX = document.querySelector("ul.lines_x");

const randomColors = ["blue","yellow","green","grey","white","red","pink"]
const randomLinearGradientX = [
  "linear-gradient(to left, #e66465, #9198e5)",
  "linear-gradient(to left, #eee341, #e66465)",
  "linear-gradient(to left, #9198e5, #e66465)",
  "linear-gradient(to left, red, yellow)",
]
const randomLinearGradientY = [
  "linear-gradient(#e66465, #9198e5)",
  "linear-gradient(#eee341, #e66465)",
  "linear-gradient(#9198e5, #e66465)",
  "linear-gradient(red, yellow)",
]
for(let i = 0; i < 100; i++){
  const random = (max,min) => Math.random() * (max - min) + min;
  const liY = document.createElement("li");
  const liX = document.createElement("li");

  const delay = random(2,0.1)
  const duration = random(5,2)
  const height = random(90,10)
  const width = random(90,10)
  const bg_y = randomLinearGradientY[Math.floor(Math.random() * 4)]
  const bg_x = randomLinearGradientX[Math.floor(Math.random() * 4)]

  liY.style.height = `${height}vh`
  liY.style.background = bg_y
  liY.style.animationDelay = `${delay}s`
  liY.style.animationDuration = `${duration}s`
  liY.style.animationTimingFunction = `
    cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})
  `

  liX.style.width = `${width}vw`
  liX.style.background = bg_x
  liX.style.animationDelay = `${delay}s`
  liX.style.animationDuration = `${duration}s`
  liX.style.animationTimingFunction = `
    cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})
  `
  ulX.appendChild(liX);
  ulY.appendChild(liY);
}
const body = document.querySelector("body");
const styleBody = getComputedStyle(body)
const btn = document.querySelector("#btn"); 

btn.addEventListener("click", e => {
  e.preventDefault();
  if(styleBody.backgroundColor == "rgb(0, 0, 0)"){
    body.style.backgroundColor = "rgb(255,255,255)"
    btn.textContent = "Escuro";
  }else{
    body.style.backgroundColor = "rgb(0, 0, 0)";
    btn.textContent = "Claro";
  }
},false);

window.addEventListener("load", e => {
  if(styleBody.backgroundColor == "rgb(0, 0, 0)"){
    btn.textContent = "Claro";
  }else{
    btn.textContent = "Escuro";
  }
})