var question = [{
    "qNo": "Question One",
    "q": "A consultant prescribes infliximab for ankylosing spondylitis in a patient weighing 56kg. The prescribed dose is 5mg/kg, repeated 2 weeks and 6 weeks after the initial infusion. How many 100mg vials will be required in total, for the three treatments?",
    "answer": "9",
    "answerS": "9 vials",
    "units": "vials"
   },{
    "qNo": "Question Two",
    "q": "A 900ml infusion is to be given over 4 hours. The drop factor of the giving set is 20. How many drops per minutes will be given?",
    "answer": "75",
    "answerS": "75 drops per minute",
     "units": "drops per minute"
   },{
    "qNo": "Question Three",
    "q": "A 5 year old child weighing 23kg requires desferrioxamine mesilate at a dose of 15mg/kg/hour for the first hour and then reduce to 10mg/kg/hour for a further 2 hours How much desferrioxamine mesilate would the patient receive in the first three hours of treatment in mg?",
    "answer": "805",
    "answerS": "805mg",
     "units": "mg"
   },{
    "qNo": "Question Four",
    "q": "A patient is prescribed 0.7mg buprenorphine. Stock solution is 500 micrograms/ml. What volume should be administered?",
    "answer": "1.4",
     "answerS": "1.4ml",
     "units": "ml"
   },{
    "qNo": "Question Five",
    "q": "There are 860mls remaining in an infusion.  The drop factor of the set is 60. The rate of insuion is 80 drops/minute. How many minutes will the infusion take to complete?",
    "answer": "645",
     "answerS": "645 minutes",
     "units": "minutes"
   },{
    "qNo": "Question Six",
    "q": "A patient has a daily fluid allowance of 800ml and the patient has taken 200ml so far.  What is this expressed as a percentage?",
    "answer": "25",
     "answerS": "25%",
     "units": "%"
   },{
    "qNo": "Question Seven",
    "q": "You have been asked to administer 150mg of a drug in 1 litre of NaCl at a rate of 60 micrograms per Kg/Hour for a 50Kg Female Patient. Assuming 20 drops per ml, what is the nearest approximate whole drop rate per minute that needs to be set on the giving set",
    "answer": "7",
     "answerS": "7 drops/minute",
     "units": "drops/minute"
   },{
    "qNo": "Question Eight",
    "q": "You have drug x available a 60mg tablet.  You are required to use the tablet to make up powders to sprinkle on a childs food.  10 powders are required each weighing 200mg.  Each powder will contain 24mg of drug and the rest will be made up with lactose.  How much lactose would be required in grams?",
    "answer": "2",
     "answerS": "2g",
     "units": "g"
   },{
    "qNo": "Question Nine",
    "q": "A bottle contains carbamazepine 5mg/2ml. How many milligrams of carbamazepine will there be in a 30ml bottle?",
    "answer": "75",
     "answerS": "75mg",
     "units": "mg"
   },{
    "qNo": "Question Ten",
    "q": "The recommended dosage for Dobutamine hydrochloride by IV infusion is 10mcg / Kg / minute. One 20ml vial is added to 1 Litre of Sodium Chloride 0.9% w/v. The patient is an 75Kg adult. Assuming no adjustment is required for ideal body weight. If Dobutamine vials contain 250mg Dobutamine in a 20ml, what should the infusion rate bein mls/minute",
    "answer": "3",
     "answerS": "3ml/min",
     "units": "ml/min"
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

