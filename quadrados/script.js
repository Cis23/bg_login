const ulX = document.querySelector("ul.ulX");
const ulY = document.querySelector("ul.ulY");

const randomStart = (min,max) => Math.random() * (max - min) + min
const randomEnd = (min,max) => Math.random() * (max - min) + min

const randomColors = ["blue","red","yellow","green","white"];
for(let i = 0; i < 50; i++){
  const liX = document.createElement("li");
  const liY = document.createElement("li");

  // const position = Math.random() * (99 - 1) + 1;
  const delay = random(0,10);
  const duration = random(10,40);

  liX.style.backgroundColor = randomColors[Math.floor(random(5,0))]
  liX.style.animationDelay = `${delay}%`
  liX.style.animationDuration = `${duration}%`
  liX.style.animationTimingFunction = `
    cubic-bezier ${Math.random()}, ${Math.random()}, 
                 ${Math.random()}, ${Math.random()}
  `
  liY.style.backgroundColor = randomColors[Math.floor(random(5,0))]
  liY.style.animationDelay = `${delay}%`
  liY.style.animationDuration = `${duration}%`
  liY.style.animationTimingFunction = `
    cubic-bezier ${Math.random()}, ${Math.random()}, 
                 ${Math.random()}, ${Math.random()}
  `
  ulY.appendChild(liY);
  ulX.appendChild(liX);
}