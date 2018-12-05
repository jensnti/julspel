let canvas = document.getElementById("spel");
let ctx = canvas.getContext("2d");
let imgX = 0;
let dudeX = 200;
let dudeY = 200;

function draw() {

	let fgImg = document.getElementById("fg-gfx");
	let bgImg = document.getElementById("bg-gfx");
	let treesImg = document.getElementById("trees-gfx");
	let dudeImg = document.getElementById("dude-gfx");

	ctx.clearRect(0,0,640,480);
	ctx.drawImage(bgImg, (imgX * 0.2), 0, 1280, 480);	
	ctx.drawImage(fgImg, imgX, 0, 640, 480);
	ctx.drawImage(fgImg, (imgX + 640), 0, 2560, 480);

	ctx.drawImage(dudeImg, dudeX, dudeY, 128, 128);

	ctx.drawImage(treesImg, 0, 0, 1280, 480);

	imgX = imgX - 2;
	if (imgX <= -640) imgX= 0;

	window.requestAnimationFrame(draw);
}

document.addEventListener("keydown", function(e) {
	console.log(e.key);
	switch(e.key) {
		case "d":
			dudeX = dudeX + 10;
		default:
			// no
	}
}, false);


window.requestAnimationFrame(draw);