var question = [{
    "qNo": "Question One",
    "q": "You are required to prepare 300ml of a solution of benzalkonium chloride 10%w/v.  You have available benzalkonium chloride 50%w/v.  How many mls of the 50%w/v solution is required?",
    "answer": "60",
    "answerS": "60ml",
    "units": "ml"
   },{
    "qNo": "Question Two",
    "q": "A child weighing  34lb (1kilogram  = 2.2lb) is prescribed spironolactone oral suspension at a dose of 3 mg/kg daily in divided doses. What is the correct total daily dose in mg to 1dp?",
    "answer": "46.4",
    "answerS": "46.4mg",
     "units": "mg"
   },{
    "qNo": "Question Three",
    "q": "A child is prescribed hydroxyzine 15mg OD for 1 week followed by 25mg OD for 1 week followed by 25mg twice daily.  What volume of hydroxyzine syrup (10mg/5ml) is required to provide a 28 day supply?",
    "answer": "490",
    "answerS": "490ml",
     "units": "mls"
   },{
    "qNo": "Question Four",
    "q": "Drug c is prescribed at a dose of 2.5micrograms/kg/day. If the patient weighs 65kg how many micrograms of drug c is required?",
    "answer": "162.5",
     "answerS": "162.5micrograms",
     "units": "micrograms"
   },{
    "qNo": "Question Five",
    "q": "An infusion set delivers 20drops/ml. A 500ml infusion is to be given over 4 hours. How many drops per minute does the infusion need to be set at?",
    "answer": "42",
     "answerS": "42 drops/min",
     "units": "drops/minutes"
   },{
    "qNo": "Question Six",
    "q": "Chlorambucil is prescribed at a dose of 125micrograms/kg/day for a patient weighing 56kg.  How many miligrams will the patient receive in a day?",
    "answer": "7",
     "answerS": "7mg",
     "units": "mg"
   },{
    "qNo": "Question Seven",
    "q": "A dose of 2g IV flucloxacillin four times daily is required to treat a patient with cellulitis. You have available 22 vials of 1g. How many doses will you be able to administer until you run out?",
    "answer": "11",
     "answerS": "11 doses",
     "units": "doses"
   },{
    "qNo": "Question Eight",
    "q": "A patient is receiving 12mg morphine in 50ml NaCl 0.9%. What concentration is this in micrograms/ml?",
    "answer": "240",
     "answerS": "240micgorams/ml",
     "units": "micrograms/ml"
   },{
    "qNo": "Question Nine",
    "q": "You are required to make a 5% solution of drug X. The prescription asks for a 150ml supply. You have a 30% concentrated solution of drug x available. How many mls of the concentrated solution do you need?",
    "answer": "25",
     "answerS": "25ml",
     "units": "ml"
   },{
    "qNo": "Question Ten",
    "q": "An I.V. infusion contains 1g of drug in 250mL solution. Determine the rate (in drops per minute) needed to infuse 50mg of drug per minute(the infusion set is set to 20drops/ml)",
    "answer": "250",
     "answerS": "250 drops",
     "units": "drops"
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

