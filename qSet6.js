var question = [{
    "qNo": "Question One",
    "q": "A 1200ml infusion is set to run over 8 hours with a drop factor of 60. How many drops will be delivered per minute?",
    "answer": "150",
    "answerS": "150 drops/minute",
    "units": "drops/minute"
   },{
    "qNo": "Question Two",
    "q": "How many grams of sodium chloride are there in a 500mls bag of sodium chloride 0.9%?",
    "answer": "4.5",
    "answerS": "4.5g",
     "units": "g"
   },{
    "qNo": "Question Three",
    "q": "A patient is prescribed calcium gluconate at a dose of 4800mg over 24 hours. you have available calcium gluconate 10% injection. What rate in ml/hour should it be delivered at?",
    "answer": "2",
    "answerS": "2ml/hour",
     "units": "ml/hour"
   },{
    "qNo": "Question Four",
    "q": "A patient is prescribed 0.8mg of drug A. You have a vial containing 150micrograms/ml. What volume should be administered to the patient(to the nearest 1 decimal point)?",
    "answer": "5.3",
     "answerS": "5.3ml",
     "units": "ml"
   },{
    "qNo": "Question Five",
    "q": "Calculate the amount of drug in a 8ml 0.2% solution(answer in mg)?",
    "answer": "1.6",
     "answerS": "1.6mg",
     "units": "mg"
   },{
    "qNo": "Question Six",
    "q": "An infusion of flucloxacillin has 100ml remaining. The drop factor of the infusion is 60 and the set is running at a rate of 40 drops/minute.  How many minutes will the infusion take>",
    "answer": "150",
     "answerS": "150 minutes",
     "units": "minutes"
   },{
    "qNo": "Question Seven",
    "q": "A patient requires a 0.5mg dose of adrenaline.  You have adrenaline 1 in 1000 available.  What volume should be given (answer in mls to 1dp)?",
    "answer": "0.5",
     "answerS": "0.5mls",
     "units": "ml"
   },{
    "qNo": "Question Eight",
    "q": "A 1 litre bag of sodium chloride 0.9% is set to be given over a 5 hour period. Calculate the rate of delivery in millilitres/minute (to 2 dp)",
    "answer": "3.33",
     "answerS": "3.33mls",
     "units": "ml"
   },{
    "qNo": "Question Nine",
    "q": "A dose of 0.2mg digoxin is required. You have available 100 microgram tablets.  How many tablets are required?",
    "answer": "2",
     "answerS": "2 tablets",
     "units": "tablets"
   },{
    "qNo": "Question Ten",
    "q": "A 5kg baby requires 20mg/kg phenytoin. A 5ml vial of 50mg/ml is available for dilution prior to infusion. The phenytoin is diluted up to 50ml with NaCl 0.9%. Calculate the volume of phenytoin injection that must be used to prepare the infusion",
    "answer": "2",
     "answerS": "2ml",
     "units": "ml"
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

