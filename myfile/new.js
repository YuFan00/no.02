//剋起檔案時讀取
window.onload = function(){
	//持續置入文字字串
	var str = "";

	for(var i=0;i<3;i+=1){
		str = str+
		//col 全部有 12
		'<div class="col-4">'+
        	'<div class="card">'+
         		'<div id="sketch'+i+'"></div>'+       
        		'<div class="card-body">'+
        			'<p>'+i+'</p>'+
          		'</div>'+
        	'</div>'+
      	'</div>';
	}
	document.getElementById("cards").innerHTML = str;

var brushSketch = function(p5j){
	p5j.setup = function() {
		p5j.createCanvas(250,250);
		p5j.background(100,100,100);
  // put setup code here
}

	p5j.draw = function() {
	var x1 = p5j.map(p5j.mouseY, p5j.height, 0, 100, 150);
	var nsize = p5j.width/8+p5j.cos(p5j.mouseY*p5j.PI/180)*p5j.width/16;
	p5j.fill(255-x1,p5j.mouseX,p5j.mouseY,100);
	p5j.stroke(255);
	p5j.ellipse(p5j.mouseX, p5j.mouseY, nsize, x1);
	p5j.ellipse(p5j.mouseX, p5j.mouseY, x1, nsize);
  // put drawing code here
}
}
	new p5(brushSketch, 'sketch0');
 	new p5(brushSketch, 'sketch1');
  	new p5(brushSketch, 'sketch2');

}