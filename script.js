var cellWidth = 50;
var cellHeight = 50;
var row = 5;
var col = 6;

var cellValues = [];	// store cell values in array

// return cell position as array using mouse pointer location
function getCellPosition(mousePosX, mousePosY){
	// console output
	console.log('Mouse X : ' + mousePosX);
	console.log('Mouse Y : ' + mousePosY);
	
	var posx = Math.floor(mousePosX / cellWidth);
	var posy = Math.floor(mousePosY / cellHeight);
	
	return [posx, posy];
}

function getCellValue(cellRow, cellCol){
	var index = ((col * cellRow) + cellCol);
	
	// console output
	console.log('Row: ' + cellRow);
	console.log('Col: ' + cellCol);
	console.log('Array Index: ' + index);
	
	return cellValues[index];
}

function cellClickEvent(event){
	// console output
	console.log('Cell Clicked.');
	
	var posx = event.clientX;
	var posy = event.clientY;
	
	cellPos = getCellPosition(posx, posy);
	cellValue = getCellValue(cellPos[1], cellPos[0]);
	
	// console output
	console.log('(' + cellPos[0] + ', ' + cellPos[1] + ')');
	console.log('Cell Value: ' + cellValue);
	
	this.style.backgroundColor = '#fff';
}

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
			cell.onclick = cellClickEvent;
			
			grid.appendChild(cell);
		}
	}
	
	// add grid to the container
	document.getElementById('container').appendChild(grid);
}

function display1dArray(array){
	var n = array.length;
	
	for(var i = 0; i < n; i++){
		// console output
		console.log('Index ' + i + ': ' + array[i]);
	}
}

function shuffle1dArray(array){
	var n = array.length;
	
	for(var i = 0; i < n; i++){
		var randomIndex = Math.floor((Math.random() * n));
		
		var temp = array[i];
		array[i] = array[randomIndex];
		array[randomIndex] = temp;
	}
}

function generateRandomCellValues(){
	var n = row * col;
	var value = 1;
	
	for(var i = 0; i < n/2; i++){
		cellValues.push(value);
		value++;
	}
	
	value = 1;
	
	for(var i = n/2; i < n; i++){
		cellValues.push(value);
		value++;
	}
	
	shuffle1dArray(cellValues);
	
	// test
	display1dArray(cellValues);
}


function displayCellValuesInGrid(){
	var cells = document.getElementsByClassName('cell');
	var len = cells.length;
	
	// console output
	console.log('Length of Cell: ' + len);
	
	for(var i = 0; i < len; i++){
		cells[i].innerHTML = cellValues[i];
	}
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
	
	generateRandomCellValues();
	
	displayCellValuesInGrid();
}