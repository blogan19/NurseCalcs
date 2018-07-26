var question = [{
    "qNo": "Question One",
    "q": "How much glucose 5% w/v would you need to add to diazepam solution 0.5% w/v to make an intravenous infusion of diazepam of 200mg in 1 litre?",
    "answer": "960",
    "answerS": "960ml",
    "units": "ml"
   },{
    "qNo": "Question Two",
    "q": "An 8 month old child weighing 6kg is prescribed Fusidic acid  50mg/ml orally three times daily for 7 days. A dose of 15mg/kg is recomended. what is the total amount in mls required  for 7 days (answer to one dp)?",
    "answer": "37.8",
    "answerS": "37.8ml",
     "units": "ml"
   },{
    "qNo": "Question Three",
    "q": "A dose of 125mg amoxicillin TDS is prescribed for a child. It is available as a 250mg/5ml solution.  How many mls are required per dose?",
    "answer": "2.5",
    "answerS": "2.5mls",
     "units": "mls"
   },{
    "qNo": "Question Four",
    "q": "Paracetamol is prescribed at 12mg/kg. The patient weighs 9.8 kg. What is the dose required in mg (1dp)?",
    "answer": "117.6mg",
     "answerS": "mg",
     "units": "mg"
   },{
    "qNo": "Question Five",
    "q": "A patient weighs 42 kg. They are prescribed drug X 50mg/kg/day in four divided doses to control their epilepsy. What is the single dose in mg?",
    "answer": "525",
     "answerS": "525mg",
     "units": "mg"
   },{
    "qNo": "Question Six",
    "q": "A dose of drug X is required prior to surgery. The drug is available as an elixir containing 160 mg in 4 mL. How many mls are required? (to 2 dp)",
    "answer": "3.25",
     "answerS": "3.25ml",
     "units": "ml"
   },{
    "qNo": "Question Seven",
    "q": "you are required to infuse 30mls of drug over 30minutes.  The drops factor is 15. How many drops per minute will be delivered?",
    "answer": "15",
     "answerS": "15 drops per minute",
     "units": "drops per minute"
   },{
    "qNo": "Question Eight",
    "q": "180mls of an infusion is remaining.  The drop factor is set to 60. The rate is set to 30 drops per minute.  How many minutes will it take for the infusion to finish?",
    "answer": "360",
     "answerS": "360 minutes",
     "units": "minutes"
   },{
    "qNo": "Question Nine",
    "q": "A dose of 0.2g of allopurinol is required for a patient. The largest tablet availble is 50mg.  How many tablets are required for one dose?",
    "answer": "4",
     "answerS": "4 tablets",
     "units": "tablets"
   },{
    "qNo": "Question Ten",
    "q": "How many grams of sodium chloride are there in a 500mls infusion of sodium chloride 0.45% and glucose 2.5% solution?",
    "answer": "2.25",
     "answerS": "2.25g",
     "units": "g"
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

