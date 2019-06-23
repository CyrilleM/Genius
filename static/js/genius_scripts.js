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