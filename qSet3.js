var question = [{
    "qNo": "Question One",
    "q": "A patient is prescribed prednisolone 1% eye drops 1 drop into both eyes 8 times daily for 5 days followed by 6 times daily for a further 5 days then four times a day for 14 days. Assuming 1 drop = 0.05ml and a bottle contains 2.5ml. How many bottles will be required for the whole course rounded to the nearest bottle?",
    "answer": "5",
    "answerS": "5 bottles",
    "units": "bottles"
   },{
    "qNo": "Question Two",
    "q": "A patient weighing 51kg requires drug x at a dose of 2.5mg/kg. What dose should be prescribed?",
    "answer": "127.5",
    "answerS": "127.5mg",
     "units": "mg"
   },{
    "qNo": "Question Three",
    "q": "You place a 400mg vial of drug x in 50mls NaCl 0.9%. What rate in mls/hour should the infusion be set at to give 150mg in 30 minutes (to 1dp)?",
    "answer": "37.5",
    "answerS": "37.5ml/hour",
     "units": "mls/hour"
   },{
    "qNo": "Question Four",
    "q": "A baby weighing 0.72kg requires an infusion of insulin at a rate of 0.04unit/kg/hour. The insulin is available as 10units in 50ml sodium chloride 0.9%. What is the rate of the infusion in ml/hour (to 2 decimal points)?",
    "answer": "0.14",
     "answerS": "0.14ml/hour",
     "units": "ml/hour"
   },{
    "qNo": "Question Five",
    "q": "stock strength of drug A is 750mg per vial. Each vial is reconstituted with 10ml water for injection. What will the final concentration in mg/ml if giving a dose of 1200mg?",
    "answer": "16",
     "answerS": "16mg/ml",
     "units": "mg/ml"
   },{
    "qNo": "Question Six",
    "q": "A patient is prescribed metronidazole 400mg TDS.  How much metronidazole will the patient receive after 7 days treatment?",
    "answer": "8.4",
     "answerS": "8.4g",
     "units": "g"
   },{
    "qNo": "Question Seven",
    "q": "You have a stock solution of drug y 50mg/10ml. What volume of stock solution in mls solution is needed to make 200ml of a solution containing 50microgram/ml?",
    "answer": "2",
     "answerS": "2ml",
     "units": "ml"
   },{
    "qNo": "Question Eight",
    "q": "120mls of an IV infusion needs to be given over 20 minutes.  What rate is this in mls/hour?",
    "answer": "360",
     "answerS": "360mls/hour",
     "units": "mls/hour"
   },{
    "qNo": "Question Nine",
    "q": "A 1L infusion is to be given over 7 hours using an infusion set which delivers 20drops/ml. How many drops/min does the infusion need to be set at?",
    "answer": "48",
     "answerS": "48 drops/min",
     "units": "drops/min"
   },{
    "qNo": "Question Ten",
    "q": "A patient is prescribed aminophylline 0.5mg/kg/hour. The patient weighs 60kg. The nurse adds 750mg aminophylline to a 500ml bag of 5% glucose. What rate in mls/minute should the infusion be set?",
    "answer": "20",
     "answerS": "20 ml/hour",
     "units": "ml/hour"
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

