console.log('C:/>');

const flynn = {
	lives: 3,
	xCoordinate: 8, 
	yCoordinate: 0,

	hack(){
		const newLogic = new Logic(this.xCoordinate);
		newLogic.moveLogic();
	},
	moveLeft(){
		if(this.xCoordinate > 0){
			console.log("ROOM TO MOVE LEFT")
			$(`.grid-square-${this.xCoordinate}-0`).removeClass('flynn');
			this.xCoordinate -= 1;
			$(`.grid-square-${this.xCoordinate}-0`).addClass('flynn')
			$('.comm-matrix').append(`P.DIR-LT/`);
		}
	},
	moveRight(){
		if(this.xCoordinate < 15){
			console.log("ROOM TO MOVE RIGHT")
			$(`.grid-square-${this.xCoordinate}-0`).removeClass('flynn');
			this.xCoordinate += 1;
			$(`.grid-square-${this.xCoordinate}-0`).addClass('flynn')
			$('.comm-matrix').append(`P.DIR-RT[]`);
		}
	},
	moveUp(){
		if(this.yCoordiante < 20){
			console.log("ROOM TO MOVE UP")
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('flynn');
			this.yCoordinate += 1;
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('flynn');
			$('.comm-matrix').append(`P.DIR-UP^`);
		}
	}

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
	$('.comm-matrix').append(`U${keyPressed}`);
	console.log(keyPressed);

	if(keyPressed == 37){
		console.log("FLYNN LEFT");
		flynn.moveLeft();
	} else if(keyPressed == 38){
		console.log("FLYNN UP");
		//flynn.moveUp();
	} else if(keyPressed == 39){
		console.log("FLYNN RIGHT");
		flynn.moveRight();
	} else if(keyPressed == 40){
		console.log("FLYNN DOWN");
		//flynn.moveDown();
	} else if(keyPressed == 90){
		console.log("ACTION");
		//flynn.attack();
	
	}
})

;


