const ulSquares = document.querySelector("ul.squares");
const randomColors = ["blue","yellow","green","grey","white","red","pink"]
for(let i = 0; i < 21; i++){
  const random = (max,min) => Math.random() * (max - min) + min;
  const li = document.createElement("li");

  const size = random(120, 10);
  const position = random(99, 1);
  const delay = random(2,0.1)
  const duration = random(24,12)

  li.style.width = `${size}px`; 
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}%`
  li.style.left = `${position}%`
  li.style.backgroundColor = randomColors[Math.floor(Math.random() * 8)]
  li.style.animationDelay = `${delay}s`
  li.style.animationDuration = `${duration}s`
  li.style.animationTimingFunction = `
    cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})
  `

  ulSquares.appendChild(li);
}