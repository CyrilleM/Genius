var qids = []
var p1ids = []
var p2ids = []
var p3ids = []
var a_ids = []
var smsids = []
var sol_ids = []
var f1_ids = []
var f2_ids = []
var f3_ids = []
var nxt_ids = []

qList = []
p1List = []
p2List = []
p3List = []
p3List = []
aList = []
smsList = []
solList = []
f1List = []
f2List = []
f3List = []
nxtsList = []

var pks = [1,2,3,5,6]

for (i=0;i<pks.length;i++){qids.push(pks[i]+'Q');p1ids.push(pks[i]+'P1');p2ids.push(pks[i]+'P2');p3ids.push(pks[i]+'P3');a_ids.push(pks[i]+'A');
smsids.push(pks[i]+'Sms');sol_ids.push(pks[i]+'Sol');f1_ids.push(pks[i]+'F1');f2_ids.push(pks[i]+'F2');f3_ids.push(pks[i]+'F3');nxt_ids.push(pks[i]+'NxtS')}

for (j=0; j<pks.length; j++){qList.push(document.getElementById(qids[j]).innerHTML);p1List.push(document.getElementById(p1ids[j]).innerHTML);p2List.push(document.getElementById(p2ids[j]).innerHTML);
p3List.push(document.getElementById(p3ids[j]).innerHTML);aList.push(document.getElementById(a_ids[j]).innerHTML);smsList.push(document.getElementById(smsids[j]).innerHTML);
solList.push(document.getElementById(sol_ids[j]).innerHTML);f1List.push(document.getElementById(f1_ids[j]).innerHTML);f2List.push(document.getElementById(f2_ids[j]).innerHTML);
f3List.push(document.getElementById(f3_ids[j]).innerHTML);nxtsList.push(document.getElementById(nxt_ids[j]).innerHTML)}

//question and different choices
var q0 = document.querySelector('#qst')
var q1 = document.querySelector('#pr1')
var q2 = document.querySelector('#pr2')
var q3 = document.querySelector('#pr3')

//answer and congratulations and solution
var q4 = document.querySelector('#nxt')
var q9 = document.querySelector('#sms')
var q5 = document.querySelector('#ans')
var q8 = document.querySelector('#sol')

//The two buttons submit and approve
var q6 = document.querySelector('#btn1')
var q7 = document.querySelector('#btnxt')
var q10 = document.querySelector('#currentQ')

//rel is the Answer transition state, A for I clicked button A etc... myTable houses the table for scoring grid
var selected = document.querySelector('#rel')
var t = document.querySelector('#myTable')
var t1 = 0
var t2 = 0
var score = 0
var count_ = 0
var scorePos = count_*5
var countBon = score/5
var theScore = []
var theCount = []
var myScore = document.querySelector('#score')

//First load the initial questions
var qIndex = 0
q0.innerHTML = qList[qIindex]
q1.innerHTML = p1List[qIindex]
q2.innerHTML = p2List[qIindex]
q3.innerHTML = p3List[qIindex]
q9.innerHTML = smsList[qIindex]
q5.innerHTML = aList[qIindex]
q8.innerHTML = solList[qIindex]
selected.innerHTML='my_selection'


//Select a question: 1. Change colors 2. load value for next Q {Success or not}
q1.addEventListener('click', function(){
q1.style.background = '#BAE4F5';q2.style.background = '#FFFFFF';q3.style.background = '#FFFFFF';selected.innerHTML='A';if(selected.innerHTML==q5.value){q10.innerHTML=nxtsList[qIndex]}else{q10.innerHTML=f1List[qIndex]};
});
q2.addEventListener('click', function(){
q1.style.background = '#FFFFFF';q2.style.background = '#BAE4F5';q3.style.background = '#FFFFFF';selected.innerHTML='B';if(selected.innerHTML==q5.value){q10.innerHTML=nxtsList[qIndex]}else{q10.innerHTML=f2List[qIndex]};
});
q3.addEventListener('click', function(){
q1.style.background = '#FFFFFF';q2.style.background = '#FFFFFF';q3.style.background = '#BAE4F5';selected.innerHTML='C';if(selected.innerHTML==q5.value){q10.innerHTML=nxtsList[qIndex]}else{q10.innerHTML=f3List[qIndex]};
});

//Submit: 1. change colors Sms 2. upgrade score and q-rank 3. active NEXT button and hide SUBMIT button
q6.addEventListener('click', function(){if (q5.value == selected.innerHTML){score += 5;
}else{q9.classList.add("orange")};q7.classList.remove("hidden"); q8.classList.remove("hidden");q9.classList.remove("hidden");q6.classList.add("hidden");theScore.push(score); theCount.push(count_);count_ += 1;scorePos = count_*5; countBon = score/5;t1 = 100*score/scorePos; t2 = score/scorePos*100;
t.rows[1].cells[1].innerHTML = countBon ;t.rows[1].cells[2].innerHTML = count_; t.rows[2].cells[1].innerHTML = score; t.rows[2].cells[2].innerHTML = scorePos; t.rows[2].cells[3].innerHTML = t1+'%'; t.rows[1].cells[3].innerHTML = t2+'%'; });

//NEXT: 1. Load question settings based on NextQ value 2. reset backgrounds: Prs 3. increase nextQ
q7.addEventListener('click', function(){
q1.style.background = '#FFFFFF';q2.style.background = '#FFFFFF';q3.style.background = '#FFFFFF';selected.innerHTML='A';q6.classList.remove("hidden"); q8.classList.add("hidden");q9.classList.add("hidden");q9.classList.remove("orange");q7.classList.add("hidden");
qIndex++;
q0.innerHTML = qList[qIindex];
q1.innerHTML = p1List[qIindex];
q2.innerHTML = p2List[qIindex];
q3.innerHTML = p3List[qIindex];
q9.innerHTML = smsList[qIindex];
q5.innerHTML = aList[qIindex];
q8.innerHTML = solList[qIindex];
})