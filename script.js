var cellWidth = 50;
var cellHeight = 50;
var row = 10;
var col = 11;

function createGrid(row, col){
	var grid = document.createElement('div');
	
	// set attributes for grid
	grid.id = 'grid';
	grid.style.width = (cellWidth * col) + col + 'px';
	grid.style.height = (cellHeight * row) + row + 'px';
	grid.style.border = '1px solid #000';
	
	// add cells in the grid
	for(var i = 0; i < row; i++){
		for(var j = 0; j < col; j++){
			var cell = document.createElement('div');
			
			// set attributes for cell
			cell.className = 'cell';
			cell.style.width = cellWidth + 'px';
			cell.style.height = cellHeight + 'px';
			
			grid.appendChild(cell);
		}
	}
	
	// add grid to the container
	document.getElementById('container').appendChild(grid);
}

window.onload = function(){
	// console output
	console.log('Window Loaded');
	
	if(col % 2 !== 0){
		alert('Column size must be even');
		alert('Incrementing the column size by 1 to make it even');
		col += 1;
	}
	
	createGrid(row, col);
}