var question = [{
    "qNo": "Question One",
    "q": "A paediatric syrup is available at a strength of 7.5mg/5ml. A 3 year old child is prescribed a dose of 2.5mg three times daily. How many mls of the suspension will be needed to cover 7 days of treatment (rounded to the nearest ml)?",
    "answer": "35",
    "answerS": "35ml",
    "units": "ml"
   },{
    "qNo": "Question Two",
    "q": "You are putting up an infusion of 1000ml. You are asked to give the infusion over 90 minutes.  What rate in mls/hour do you need to set the infusion? (to 1 d.p)",
    "answer": "666.7",
    "answerS": "666.7ml/hour",
     "units": "mls/hour"
   },{
    "qNo": "Question Three",
    "q": "a patient requires 50mg of drug A. The stock solution is 25mg/10ml. What volume is required per dose?",
    "answer": "20",
    "answerS": "20ml",
     "units": "ml"
   },{
    "qNo": "Question Four",
    "q": "A patient is prescribed chlorphenamine syrup (2mg/5ml) 4mg four times daily for six days. What quantity is required to the nearest ml for 6 days treatment?",
    "answer": "240ml",
     "answerS": "240ml",
     "units": "mls"
   },{
    "qNo": "Question Five",
    "q": "A patient is prescribed dopamine 2.5microgram/kg/min. Dopamine is available at a strength of 4mg/ml.  At what rate must the infusion be set to (ml/hr) if the patient weighs 80kg?",
    "answer": "3",
     "answerS": "3ml/hour",
     "units": "ml/hour"
   },{
    "qNo": "Question Six",
    "q": "An injection of 150mg of drug X is needed.  You have 60mg/2ml.  How many mls are required?",
    "answer": "5",
     "answerS": "5ml",
     "units": "ml"
   },{
    "qNo": "Question Seven",
    "q": "A dose of 5mg/kg gentamicin is prescribed for a patient weighing 80kg.  Each vial contains 80mg gentamicin in 2ml. how many vials are required per dose?",
    "answer": "5",
     "answerS": "5 vials",
     "units": "vials"
   },{
    "qNo": "Question Eight",
    "q": "450ml of 5% glucose is due to run over 5 hours and 30 minutes. What rate in ml/hour does the pump need to be set?. (to nearest whole number)",
    "answer": "81",
     "answerS": "81mls/hour",
     "units": "mls/hour"
   },{
    "qNo": "Question Nine",
    "q": "A patient is prescribed carbocisteine 750mg TDS.  How many grams of carbocisteine will the patient receive after 5 days? (2dp)",
    "answer": "11.25",
     "answerS": "11.25g",
     "units": "g"
   },{
    "qNo": "Question Ten",
    "q": "A child weighing 6.6kg is prescribed a dose of 12mg/kg/day ciprofloxacin, to be given IV in 2 divided doses.  What is the correct volume of ciprofloxacin 2mg/mL that should be given for each dose, rounded to the nearest mL? ",
    "answer": "20",
     "answerS": "20ml",
     "units": "mls"
   }];

  function createCalculation(){

   
   var a = document.getElementById('container1');
   var textNode ="";
    for(var i = 0; i < question.length; i++){
      textNode += '<br><div class="container" id="question'+i+'"><h3 class="qNo" id="questionNo'+i+'">'+question[i].qNo+'</h3><div class="jumbotron questionHeader" id="qJumbo'+i+'">  <p class="CSpara" id="para'+i+'">'+question[i].q+'</p></div> <div class="jumbotron CSjumbo" id="jumbo'+i+'"> <input type="number" class="CSText" id="input'+i+'" placeholder="Answer Input"> <button type="button" class="btn  checkBtn" id="btn'+i+'" onclick="checkAns('+i+')">Check Answer</button></div></div></div><div class="lineBreak" id="lineBreak'+i+'"></div>';   
       
      }
      a.innerHTML = textNode;
  };
  createCalculation();

  function setUnits(){

    for(var i = 0; i <question.length; i++){
      var unit = question[i].units;
      var a = document.getElementById("input"+i);
      a.placeholder = unit;
      console.log(a);
    }
  }
  setUnits();

  var questionCount = 0;
  var score = 0;
  function checkAns(id){

  	var input = document.getElementById("input"+id).value;
  	var ans =  question[id].answer;
  	var jumbo = document.getElementById("jumbo"+id);
    var qJumbo = document.getElementById("qJumbo"+id);
  	var btn = document.getElementById("btn"+id);
  	var para = document.getElementById("para"+id);
    var reportLi = document.getElementById("reportList" +id);

  	if(input == ans){
  		qJumbo.style.backgroundColor = "#82b74b";
  		para.innerHTML = "Correct"
  		para.style.color = "white";
      btn.style.border = "none";
      reportLi.style.backgroundColor = "#82b74b";
      document.getElementById("snackCMsg").innerHTML = question[id].answerS;
      snackC();
  		score++;
  	}else if(input != ans){
  		qJumbo.style.backgroundColor = "red";
  		para.innerHTML = "Incorrect";
      para.style.color = "white";
      reportLi.style.backgroundColor = "red";
      document.getElementById("snackIMsg").innerHTML = question[id].answerS;
      snackI();
  	}
  	console.log(score);
  	setTimeout(minimise, 2000, id);
  }




function minimise(id){
	document.getElementById("jumbo"+id).style.display = "none"; 
  document.getElementById("qJumbo"+id).style.display = "none";
  document.getElementById("lineBreak"+id).style.display = "none";
  document.getElementById("questionNo"+id).style.display = "none";


	questionCount++;
	if(questionCount == question.length){
		document.getElementById("quizFinish").style.display = "block";
		document.getElementById("scoreDisp").innerHTML = " "+ score + "/" + questionCount;
		document.getElementById("timeFinish").innerHTML = minutes + " minutes and "+ seconds + "seconds";
		document.getElementById("timeRow").style.display = "none";
	}

}

function viewReport(){
  document.getElementById("quizFinish").style.display = "none";
  document.getElementById("reportJumbo").style.display = "block";
}

function generateReport(){
  var div = document.getElementById("reportList");
  for( i = 0; i <question.length; i++){
      var p = document.createElement("p");
      p.id = "reportList" + i;
      p.className ="listStyle";
      var textNode = document.createTextNode(question[i].q + " = " + question[i].answerS);
      p.appendChild(textNode);
      div.appendChild(p);
  }
}
generateReport();

function snackC() {
        var x = document.getElementById("snackbarC");
      x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  function snackI(){
    var x = document.getElementById("snackbarI");
      x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

