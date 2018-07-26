var question = [{
    "qNo": "Question One",
    "q": "AB has been prescribed capecitabine at a dose of 1.2mg/m<sup>2</sup> twice daily.  His body surface area is 1.8m<sup>2</sup>.  How many 150mg capsules are needed for a 14 day course?  ",
    "answer": "240",
    "answerS": "240 capsules",
    "units": "capsules"
   },{
    "qNo": "Question Two",
    "q": "A 6 year old child has been prescribed Sytron elixir at a dose of 5ml three time daily. There is 27.5mg of iron in each 5mls of Sytron. How much iron in mg will the patient receive in a week? (1dp)",
    "answer": "577.5",
    "answerS": "577.5mg",
     "units": "mg"
   },{
    "qNo": "Question Three",
    "q": "A patient receives 40mg of drug A over half an hour. The infusion is available as a 40mg/50ml infusion. What rate in ml/min was the infusion set?",
    "answer": "100",
    "answerS": "100ml/hour",
     "units": "ml/hour"
   },{
    "qNo": "Question Four",
    "q": "Mr S is 50 years old and weighs 65Kg.  He has been admitted to hospital and requires sodium valporate 20mg/Kg and the prescriber would like this to be given via a 25mg/ml infusion in normal saline.  Sodium valporate (400mg/4ml) injections are available on the ward.  What volume of normal saline is necessary to produce this infusion?",
    "answer": "39",
     "answerS": "39ml",
     "units": "ml"
   },{
    "qNo": "Question Five",
    "q": "An infusion of 60ml is due to be given over 2 hours.  The drop factor of the infusion is 60.  How many drops will be delivered each minutes?",
    "answer": "30",
     "answerS": "30 drops per minute",
     "units": "drops per minute"
   },{
    "qNo": "Question Six",
    "q": "you are asked to give a dose of 4000mg of drug X. It is available as 2g tablets. How many tablets are required?",
    "answer": "2",
     "answerS": "2 tablets",
     "units": "tablets"
   },{
    "qNo": "Question Seven",
    "q": "Convert 00.075g to mg",
    "answer": "75",
     "answerS": "75mg",
     "units": "mg"
   },{
    "qNo": "Question Eight",
    "q": "An infusion has 30ml remaining. The drop factor of the infusion is 15 and the drop rate per minute is 45. How many minutes will it take to infuse the remainder of the infusion?",
    "answer": "10",
     "answerS": "10 minutes",
     "units": "minutes"
   },{
    "qNo": "Question Nine",
    "q": "An infusion of 1200ml is to be administered over 4 hours. What is the rate of the infusion in ml/hour?",
    "answer": "300",
     "answerS": "300ml/hour",
     "units": "mls/hour"
   },{
    "qNo": "Question Ten",
    "q": "A patient is prescribed prednisolone 40mg each day for 3 days then reducing by 5 mg every three days.  How many tablets are required for the entire course?",
    "answer": "108",
     "answerS": "108 tablets",
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

