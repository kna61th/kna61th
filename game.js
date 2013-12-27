	var canvasBg =  document.getElementById('canvasBg');
	var ctxBg = canvasBg.getContext('2d');
	
	var canvasJet =  document.getElementById('canvasJet');
	var ctxJet = canvasJet.getContext('2d');
	
	var clearCanvasBtn = document.getElementById('clearCanvasBtn');
	clearCanvasBtn.addEventListener('click',clearCanvas,false);
	
	var gameWidth = canvasBg.width;
	var gameHeight = canvasBg.height;
	
	var imgSprite = new Image();
	imgSprite.src = 'images/total.png';
	imgSprite.addEventListener('load',init,false);
	
	function init(){
		drawBg();
		drawJet();
	}
	
	function drawJet(){
		var srcX = 0;
		var srcY = 540;
		var drawX = 100;
		var drawY = 100
		var width = 100;
		var height = 100;
		ctxBg.drawImage(imgSprite,srcX,srcY,width, height, drawX, drawY,width, height);
	}
	
	function drawBg(){
		var srcX = 0;
		var srcY = 0;
		var drawX = 0;
		var drawY = 0;
		ctxBg.drawImage(imgSprite,srcX,srcY,gameWidth, gameHeight, drawX, drawY,gameWidth, gameHeight);
	}
	
	function clearCanvas(){
		ctxBg.clearRect(0,0,800,500);
	}
