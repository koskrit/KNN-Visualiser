
let class_val;
let status='stop';
let input=[];
let output=[];
let class_lab;
let knnClassifier;
let classes;
function setup(){
	createCanvas(500,500);
	background(255,255,255);
	strokeWeight(2);
	classes=createSelect();
	classes.position(600,300);
	classes.option('A');
	classes.option('B');
	classes.option('C');
	knnClassifier = ml5.KNNClassifier();
	training_start=createButton('train');
	training_start.position(600,350);
	training_start.mousePressed(training);
	training_stop=createButton('train stop');
	training_stop.position(600,400);
	training_stop.mousePressed(training_stops);
	predict=createButton('predict');
	predict.position(600,450);
	predict.mousePressed(predicts);



}

function training_stops(){
	status='stop';
}

function predicts(){
	status='predict';
}

function training(){
	status='train';
}

function gotresults(err,result){
	if(err){
		console.error(err);
	}
	else{
		class_lab=result.label;
		console.log(result.label);		
		text(class_lab,mouseX,mouseY);

	}
}
function mousePressed(){
	stroke(0);
	console.log(status);
	if(status=='train'){
		fill(255);
		ellipse(mouseX,mouseY,30,30);
		class_val=classes.value();
		text(class_val,mouseX,mouseY);

		knnClassifier.addExample([mouseX,mouseY],class_val);


	}
	if(status=='predict'){
		if(knnClassifier.getNumLabels()>0){
		fill(255);
		ellipse(mouseX,mouseY,30,30);
		knnClassifier.classify([mouseX,mouseY],gotresults);
	
		}
		
		
	}
	


}

function draw(){
			
}