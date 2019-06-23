from django.shortcuts import render, redirect
from basic_app.forms import Answerform, answersBaseForm
from basic_app.models import Questions
# Create your views here.
def index(request):

    return render (request, 'basic_app/home.html',)


def train(request):
    start = 0
    end = 5
    display_questions = Questions.objects.all()
    question = display_questions[start:end]
    return render (request, 'basic_app/train.html', {'question':question})

def comers(request):
    start = 0
    end = 3
    question = Questions.objects.all()
    question = question[start:end]
    return render (request, 'basic_app/console.html', {'question':question})

def tester(request):
    return render(request,'basic_app/tester.html',)

def console(request):
    start = 0
    end = 1

    start +=1
    form = answersBaseForm()
    if request.method == 'POST':
        form = answersBaseForm(request.POST or None)
        if form.is_valid():
            form.save()
            question = Questions.objects.all()
            question = display_questions[start:end]
            form = answersBaseForm()
            #context = {'question':question, 'form':form}
            #end+=1
            return render (request,'basic_app/console.html', {'form':form})
    else:
        form = answersBaseForm()
        return render (request,'basic_app/console.html', {'form':form})

#def AnswerformView(request):
#    if request.method=='POST':
#        form = Answerform(request.POST)
#        if form.is_valid():
#            #qID=?
#        else:
#            form = Answerform()
#        return render (request,'basic_app/train.html', {'form':form})
