console.log("Hello, World!")

clicking = false

function colorSquare(click) {
  if (clicking) this.classList.add("colored")
}

function createGrid(gridSize) {
  const gridContainer = document.querySelector(".grid-container")
  gridContainer.innerHTML = ""
  for (i = 0; i < gridSize; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    for (j = 0; j < gridSize; j++) {
      const column = document.createElement("div")
      column.classList.add("column")
      column.setAttribute("draggable", false)
      row.appendChild(column)
      column.addEventListener('mouseover', colorSquare)
    }
    gridContainer.appendChild(row)
  }
}

function changeGridSize() {
  const gridSize = prompt("What size do you want the grid to be?")
  createGrid(gridSize)

  console.log("changing grid size")
}

document.addEventListener("mousedown", mouseDown)
document.addEventListener("mouseup", mouseUp)

const sizeButton = document.querySelector(".size-button").firstElementChild
console.log(sizeButton)
sizeButton.addEventListener("click", changeGridSize)

function mouseDown() {
  clicking = true
}

function mouseUp() {
  clicking = false
}

createGrid(16)

