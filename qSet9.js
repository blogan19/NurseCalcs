var question = [{
    "qNo": "Question One",
    "q": "A Patient is receiving a Diamorphine infusion 150mg over 24 hours using a syringe pump that is calibrated to 36mm/24 hours.  The rate of infusion is increased to 54mm/24 hours. What dosage is the patient now receiving?",
    "answer": "175",
    "answerS": "175mg/24hours",
    "units": "mg/24hours"
   },{
    "qNo": "Question Two",
    "q": "A patient requires 400mg of ciprofloxacin over one hour as an intravenous infusion. It is available as a 2mg/ml infusion. What rate do you recommend in mls/min? (2 d.p)",
    "answer": "3.33",
    "answerS": "3.33mls/min",
     "units": "mls/min"
   },{
    "qNo": "Question Three",
    "q": "A 70 year old man (weighing 80Kg) is prescribed dopamine 2.5mcg/Kg/min IV over 60 minutes.  Dopamine is administered as a 4mg/ml solution on ITU and the Dr would like this administering via a 0.02% w.v infusion.  How much normal saline is required to produce this infusion?",
    "answer": "57",
    "answerS": "57ml",
     "units": "ml"
   },{
    "qNo": "Question Four",
    "q": "A dopamine infusion is set up for a patient weighing 56Kg, to deliver 2.5mcg/kg/min.  The infusion syringe contains 300mg dopamine in 50mls normal saline.  What should the infusion rate be?",
    "answer": "1.4",
     "answerS": "1.4ml/hour",
     "units": "mls/hour"
   },{
    "qNo": "Question Five",
    "q": "A suspension contains 100mg of drug x in every 5ml of suspension. How many grams are in a 65ml bottle?",
    "answer": "1.3",
     "answerS": "1.3g",
     "units": "g"
   },{
    "qNo": "Question Six",
    "q": "An infusion of 240ml needs to be given over 12 hours.  The drop factor of the giving set is 60.  What is the rate of the infusion in drops per minute?",
    "answer": "20",
     "answerS": "20 drops per minute",
     "units": "20 drops per minute"
   },{
    "qNo": "Question Seven",
    "q": "A patient has a daily fluid allowance of 2200ml. The patient has had 400ml.  What is this expressed as a percentage to the nearest whole number?",
    "answer": "18",
     "answerS": "18%",
     "units": "%"
   },{
    "qNo": "Question Eight",
    "q": "A patients fluid balance chart is as follows <ul><li>Input: IV fluid 850ml, oral fluids 1125ml</li><li>Output: Urine 480ml, wound drainage 40ml, Vomit: 135ml</li> Calculate the patients total ouput</ul>",
    "answer": "1975",
     "answerS": "1975ml",
     "units": "ml"
   },{
    "qNo": "Question Nine",
    "q": "A patient is administered an infusion of 400ml over 6 hours. What is the rate in ml/hour?",
    "answer": "67",
     "answerS": "67ml/hour",
     "units": "ml/hour"
   },{
    "qNo": "Question Ten",
    "q": "An IV infusion of 840ml is to be given over 10 hours.  The drop factor is 20.  How many drops per minute will be administered",
    "answer": "28",
     "answerS": "28 drops per minute",
     "units": "drops per minute"
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

