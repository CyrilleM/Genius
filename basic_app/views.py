from django.shortcuts import render
from basic_app.forms import Answerform
from basic_app.models import Questions
# Create your views here.
def index(request):

    return render (request, 'basic_app/home.html',)


def train(request):
    start = 0
    end = 5
    display_questions = Questions.objects.all()
    question = display_questions[start:end]
    return render (request, 'basic_app/train.html',{'question':question})

#def AnswerformView(request):
#    if request.method=='POST':
#        form = Answerform(request.POST)
#        if form.is_valid():
#            #qID=?
#        else:
#            form = Answerform()
#        return render (request,'basic_app/train.html', {'form':form})