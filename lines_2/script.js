const ulY = document.querySelector("ul.lines_y");
const ulX = document.querySelector("ul.lines_x");

const randomColors = ["blue","yellow","green","grey","white","red","pink"]
for(let i = 0; i < 50; i++){
  const random = (max,min) => Math.random() * (max - min) + min;
  const liY = document.createElement("li");
  const liX = document.createElement("li");

  const delay = random(2,0.1)
  const duration = random(24,12)

  liY.style.backgroundColor = randomColors[Math.floor(Math.random() * 8)]
  liY.style.animationDelay = `${delay}s`
  liY.style.animationDuration = `${duration}s`
  liY.style.animationTimingFunction = `
    cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})
  `

  liX.style.backgroundColor = randomColors[Math.floor(Math.random() * 8)]
  liX.style.animationDelay = `${delay}s`
  liX.style.animationDuration = `${duration}s`
  liX.style.animationTimingFunction = `
    cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})
  `
  ulX.appendChild(liX);
  ulY.appendChild(liY);
}