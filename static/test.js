var q1 = document.querySelector('#pr1')
var q2 = document.querySelector('#pr2')
var q3 = document.querySelector('#pr3')
var selected = document.querySelector('#rel')
var q5 = document.querySelector('#pr1')

q1.addEventListener('click', function(){
q1.style.background = '#65909A';q2.style.background = '#ADD8E6';q3.style.background = '#ADD8E6';
});

q2.addEventListener('click', function(){
q1.style.background = '#ADD8E6';q2.style.background = '#65909A';q3.style.background = '#ADD8E6';
});

q3.addEventListener('click', function(){
q1.style.background = '#ADD8E6';q2.style.background = '#ADD8E6';q3.style.background = '#65909A';
});

q1.addEventListener('mouseover', function(){
q1.style.background = '#65909A';}

q2.addEventListener('mouseover', function(){
q2.style.background = '#65909A';}

q3.addEventListener('mouseover', function(){
q3.style.background = '#65909A';}





var q1 = document.querySelector('#pr1')
var q2 = document.querySelector('#pr2')
var q3 = document.querySelector('#pr3')
var selected = document.querySelector('#rel')
var q5 = document.querySelector('#ans')
var q6 = document.querySelector('#btn1')
var score = 0
var myScore = document.querySelector('#score')

q1.addEventListener('click', function(){
q1.style.background = '#65909A';q2.style.background = '#ADD8E6';q3.style.background = '#ADD8E6';selected.innerHTML='A';
});

q2.addEventListener('click', function(){
q1.style.background = '#ADD8E6';q2.style.background = '#65909A';q3.style.background = '#ADD8E6';selected.innerHTML='B';
});

q3.addEventListener('click', function(){
q1.style.background = '#ADD8E6';q2.style.background = '#ADD8E6';q3.style.background = '#65909A';selected.innerHTML='C';
});

q6.addEventListener('click', function(){if (q5.innerHTML = selected.innerHTML){score += 5; myScore.innerHTML = score
}});