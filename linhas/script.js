const ulX = document.querySelector("ul.ulX");
const ulY = document.querySelector("ul.ulY");

const random = (min,max) => Math.random() * (max - min) + min
const randomEnd = (min,max) => Math.random() * (max - min) + min

const randomColors = ["blue","red","yellow","green","white"];
for(let i = 0; i < 50; i++){
  const liX = document.createElement("li");
  const liY = document.createElement("li");

  const position = random(10000,5000)
  const delay = random(5,0.1);
  const duration = random(24,12);

  liX.style.backgroundColor = randomColors[Math.floor(random(5,0))]
  liX.style.animationDelay = `${delay}%`
  liX.style.animationDuration = `${duration}%`
  liX.style.transform = `translateX(${position})%`
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
// const lis = document.querySelectorAll("li");

// console.log(lis)

// lis.forEach(li => {
//   li.addEventListener('animationstart', (event) => {
//     const randomStart = (min,max) => Math.random() * (max - min) + min
//     li.style.animationDelay =  randomStart(1,5)
//     li.style.animationDuration = randomStart(1,100)
//     li.style.animationTimingFunction = `
//     cubic-bezier ${Math.random()}, ${Math.random()}, 
//                  ${Math.random()}, ${Math.random()}
//   `
//   });
// })