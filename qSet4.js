var question = [{
    "qNo": "Question One",
    "q": "Adrenaline is available as 10 in 100,000 (10g in 100,000mL), what is the concentration in mg/mL? (2dp)",
    "answer": "0.24",
    "answerS": "0.24mg/ml",
    "units": "mg/ml"
   },{
    "qNo": "Question Two",
    "q": "digoxin suspension is available at a strength of 100micrograms/5ml.  250micrograms is required for a patient. How many mls are needed per dose?",
    "answer": "12.5",
    "answerS": "12.5ml",
     "units": "mls"
   },{
    "qNo": "Question Three",
    "q": "a 500ml phosphate polyfusor is to be given at a rate of 7.5ml/hour. How many mls will be left in the polyfusor once it has been run for 12 hours?",
    "answer": "410",
    "answerS": "410mls",
     "units": "mls"
   },{
    "qNo": "Question Four",
    "q": "A patient requires 1mmol/kg of potassium per day.  They weigh 75kg and are prescribed tablets each containing 12mmol/kg. How many tablets are required to the nearest whole tablet?",
    "answer": "6",
     "answerS": "6 tablets",
     "units": "tablets"
   },{
    "qNo": "Question Five",
    "q": "a patient is prescribed 1⁄2 L of Hartmann’s solution to run over 3hours using a volumetric pump. How many mL. /hr will you set the pump to one decimal place?",
    "answer": "1.66",
     "answerS": "166.6 mL/hr",
     "units": "mls/hour"
   },{
    "qNo": "Question Six",
    "q": "a patient is prescribed Furosemide 45mg i.v. to be added to 50mL of Normal Saline 0.9%. Stock available is Furosemide 50mg/5mL. How many mL. of Furosemide will you need to add to the bag of Normal Saline?",
    "answer": "4.5",
     "answerS": "4.5ml",
     "units": "ml"
   },{
    "qNo": "Question Seven",
    "q": "A 1 year old child on the paediatric ward is prescribed a dose of aspirin 12.5mg/kg four times daily for Kawasakis disease. The child weighs 11.5kg. There is no liquid preparation available and you have to use aspirin 75mg dispersible tablets to the ward. How many tablets(to the nearest whole tablet) would you need for a two week course?",
    "answer": "112",
     "answerS": "112 tablets",
     "units": "tablets"
   },{
    "qNo": "Question Eight",
    "q": "An ampoule contains 12.5% w/v of active ingredient. The ampoules are supplied as 10mL volume. How many ampoules are needed to produce a 1 litre bag of final concentration 0.5% w/v active ingredient? ",
    "answer": "4",
     "answerS": "4 ampoules",
     "units": "ampoules"
   },{
    "qNo": "Question Nine",
    "q": " Dopamine is prescribed at 2.5micrograms/kg/day. Patient A weighs 63kg, what is the total amount of Dopamine that Patient A will require in micrograms (1dp)?",
    "answer": "157.5",
     "answerS": "157.5micrograms",
     "units": "micrograms"
   },{
    "qNo": "Question Ten",
    "q": "A post-operative patient is prescribed 80mg Pethidine i.m.every 4hours. Stock available is 100mg/2mL. If the patient has had 3 doses so far, what is the total volume of Pethidine in mL they have received? (1dp)",
    "answer": "4.8",
     "answerS": "4.8ml",
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

