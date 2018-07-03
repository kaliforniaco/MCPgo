console.log('C:/>');

const flynn = {
	lives: 3,
	xCoordinate: 5
}

const coreGrid = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

];

for(let i=coreGrid.length-1; i>= 0; i--){
	let row = coreGrid[i];
	$('.grid-wrapper').append(`<div class="grid-row-${i} grid-row"></div>`)
	for(let x=0;x<row.length;x++){
		$(`.grid-row-${i}`).append(`<div class="grid-square grid-square-${x}-${i}"></div>`)
		if(row[x]==flynn) {
			$(`grid-square-${x}-${i}`).addClass('flynn');
		}
	}
}
$('.grid-square-8-0').addClass('flynn');
$(document).keydown(function(e){
	let keyPressed = e.which;
	console.log(keyPressed);
/*
	if(keyPressed == 37){
		flynn.moveLeft();
	} else if(keyPressed == 39){
		flynn.moveRight();
	} else if(keyPressed == 32){
		flynn.attack();
	
	}*/
})

;


