function drawKnappingGrid(grid) {
    const ctx = document.getElementById("canvas").getContext("2d"); // Sandboxels canvas
    const cellSize = 20; // pixels per grid cell
    const startX = 50;    // x offset on screen
    const startY = 50;    // y offset on screen

    // draw background
    ctx.fillStyle = "#444"; // dark gray background
    ctx.fillRect(startX, startY, cellSize * grid[0].length, cellSize * grid.length);

    // draw each cell
    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid[0].length; x++) {
            if(grid[y][x] === 1) {
                ctx.fillStyle = "#888"; // stone color
            } else {
                ctx.fillStyle = "#222"; // removed / empty
            }
            ctx.fillRect(startX + x*cellSize, startY + y*cellSize, cellSize-2, cellSize-2); 
        }
    }
}
function openKnappingGUI(material) {
    // create 5x5 grid
    let grid = [];
    for(let y=0;y<5;y++){
        grid[y]=[];
        for(let x=0;x<5;x++){
            grid[y][x]=1;
        }
    }
    drawKnappingGrid(grid);
}
