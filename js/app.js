console.log('C:/>');

class Logic {
	constructor(logicColumn,logicRow){
		this.xCoordinate = logicColumn;
		this.yCoordinate = logicRow;
		$('.comm-matrix').append(`>`);

	}
	moveLogic(){
		if(this.yCoordinate == 20){
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate-1}`).removeClass('logic');
			$('.comm-matrix').append(`TERM-${this.xCoordinate}<`);
		} else {
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('logic');
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate-1}`).removeClass('logic');
			this.yCoordinate += 1;
			//this.detectCollision();
			setTimeout(()=>{
				this.moveLogic();
			}, 30)
		}
	}
}
const flynn = {
	lives: 3,
	xCoordinate: 8, 
	yCoordinate: 0,

	hack(){
		const newLogic = new Logic(this.xCoordinate,this.yCoordinate);
		$('.comm-matrix').append(`LOG.${this.yCoordinate}`);
		newLogic.moveLogic();
	},
	moveLeft(){
		if(this.xCoordinate > 0){
			console.log("ROOM TO MOVE LEFT")
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('flynn');
			this.xCoordinate -= 1;
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('flynn')
			$('.comm-matrix').append(`T.DIR-LT/`);
		}
	},
	moveRight(){
		if(this.xCoordinate < 15){
			console.log("ROOM TO MOVE RIGHT")
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('flynn');
			this.xCoordinate += 1;
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('flynn')
			$('.comm-matrix').append(`T.DIR-RT[]`);
		}
	},
	moveUp(){
		if(this.yCoordinate < 19){
			console.log("ROOM TO MOVE UP" )
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('flynn');
			this.yCoordinate += 1;
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('flynn');
			$('.comm-matrix').append(`T.DIR-UP ^`);
		}
	},
	moveDown(){
		if(this.yCoordinate > 0){
			console.log("ROOM TO MOVE DOWN" )
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('flynn');
			this.yCoordinate -= 1;
			$(`.grid-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('flynn');
			$('.comm-matrix').append(`T.DIR-DOWN v`);
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
// grid and player
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

// enemy/firewall
let k=0
for(let y=0; y<coreGrid.length; y++){
	let col = coreGrid.length-k;
for(let j=coreGrid.length-1; j>= 0; j--){
	let row = coreGrid.length-(coreGrid.length-j);
	console.log(`You are at ROW ${row} COL ${col}`)
}
k++;
}



$('.grid-square-8-0').addClass('flynn');
$(document).keydown(function(e){
	let keyPressed = e.which;
	$('.comm-matrix').append(`U${keyPressed}`);
	console.log(keyPressed);

	if(keyPressed == 37){
		console.log("QUERY LEFT");
		flynn.moveLeft();
	} else if(keyPressed == 38){
		console.log("QUERY UP");
		flynn.moveUp();
	} else if(keyPressed == 39){
		console.log("QUERY RIGHT");
		flynn.moveRight();
	} else if(keyPressed == 40){
		console.log("QUERY DOWN");
		flynn.moveDown();
	} else if(keyPressed == 90){
		console.log("HACK");
		flynn.hack();
	
	}
})

;


