var question = [{
    "qNo": "Question One",
    "q": "A patient requires dobutamine 500mg in 250ml 5% glucose set at an infusion rate of 10 micrograms/kg/min. The patient weighs 50kg. Calculate the rate on the infusion in ml/hour",
    "answer": "15",
    "answerS": "15ml/hour",
    "units": "ml/hour"
   },{
    "qNo": "Question Two",
    "q": "A chemotherapy regime specifies that each patient should receive 100mg prednisolone each day for 5 days.  How many 5mg tablets are needed for the whole 5 days?",
    "answer": "100",
    "answerS": "100 tablets",
     "units": "tablets"
   },{
    "qNo": "Question Three",
    "q": "An infusion of 960ml is to be given over the next 24 hours.  The drop factor is 15.  How many drops per minute need to be delivered?",
    "answer": "10",
    "answerS": "10 drops per minute",
     "units": "10 drops per minute"
   },{
    "qNo": "Question Four",
    "q": "A patient is prescribed Diazepam Syrup (2mg/5ml) 10mg tds for 5/7. What is the total quantity to be supplied for 5 days?",
    "answer": "375",
     "answerS": "375ml",
     "units": "ml"
   },{
    "qNo": "Question Five",
    "q": "A 60-year-old male patient, weighing 75kg, is prescribed dopamine 4mcg/kg/min. The syringe contains 200mg of dopamine in 50ml. Calculate the rate at which the dopamine solution must be infused ml/hour.",
    "answer": "4.5",
     "answerS": "4.5ml/hour",
     "units": "ml/hour"
   },{
    "qNo": "Question Six",
    "q": "How many grams of dextrose are there in a 500ml bag of 5% dextrose solution?",
    "answer": "25",
     "answerS": "25g",
     "units": "g"
   },{
    "qNo": "Question Seven",
    "q": "A loading dose of amiodarone 300mg IV is required. You need to dilute the amiodarone to 250ml glucose 5%, and give it over 30 minutes.  The injection is available as a 3ml ampoule, with a concentration of 50mg/ml. What rate in mls/minute does the infusion need to be run at? (to 2 dp)",
    "answer": "",
     "answerS": "",
     "units": ""
   },{
    "qNo": "Question Eight",
    "q": "You are asked to advise on the amount of acetylcysteine required for a prescription of 4850mg. You have available a vial of 20% acetylcysteine. How many mls of acetylcysteine are required? (to 2dp)",
    "answer": "24.25",
     "answerS": "24.25ml",
     "units": "ml"
   },{
    "qNo": "Question Nine",
    "q": "An adult recommended dose of Drug X is 4mg/kg/day. What is the strength of each dose if the prescription states QDS and the patient weighs 60kg? ",
    "answer": "40",
     "answerS": "40mg",
     "units": "mg"
   },{
    "qNo": "Question Ten",
    "q": "A dose of 800mg Gabapentin is to be given to a patient.  You have 0.2g capsules.  How many capsules are required>",
    "answer": "4",
     "answerS": "4 tablets",
     "units": "tablets"
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

