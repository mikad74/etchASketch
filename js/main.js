console.log("Hello, World!")


function createGrid() {
  const gridContainer = document.querySelector(".grid-container")
  for (i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    for (j = 0; j < 16; j++) {
      const column = document.createElement("div")
      column.classList.add("column")
      row.appendChild(column)
    }
    gridContainer.appendChild(row)
  }
}

createGrid()
