var myData;
var astronauti = [];
var ii;
var myObject;
var myImageList;
var myImage1, myImage2, myImage3, myImage4, myImage5, myImage6;

function preload() {
	myData = loadJSON('assets/json/peopleinspace.json');
	myImage1 = loadImage("./assets/img/immagine1.png");
	myImage2 = loadImage("./assets/img/immagine2.png");
	myImage3 = loadImage("./assets/img/immagine3.png");
	myImage4 = loadImage("./assets/img/immagine4.png");
	myImage5 = loadImage("./assets/img/immagine5.png");
	myImage6 = loadImage("./assets/img/immagine6.png");
}

function setup() {
	createCanvas(500, 500);
	background(40, 54, 85);

	for (var i = 0; i < myData.people.length; i++) {
		var astroInfo = myData.people[i];
		var newAstronauta = new myObject(astroInfo.name);
		astronauti.push(newAstronauta);
	}
	
	ii = 0;
	
	myImageList = [
		myImage1,
        myImage2,
		myImage3,
		myImage4,
		myImage5,
		myImage6,
	];

	astronauti[0].display(); 
	image(myImageList[0], 150, 150, 190, 190);
}

function draw(){
	
}

function myObject(name) {
	this.name = name;
	this.display = function () {
		fill("white");
		textFont('Inconsolata', 40);
		textAlign(CENTER);
		textStyle('600');
		text(this.name, 250, 400);
	}
}

function mouseClicked() {
	background(40, 54, 85);

	if (ii < astronauti.length - 1) {
		ii = ii + 1;
		astronauti[ii].display();
		image(myImageList[ii], 150, 150, 190, 190);
	} else {
		ii = 0;
		astronauti[ii].display();
		image(myImageList[ii], 150, 150, 190, 190);
	}
}



