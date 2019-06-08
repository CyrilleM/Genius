from basic_app.models import Questions
from django import forms

class Answerform(forms.ModelForm):
    qanswr = forms.CharField(max_length=1)
    class Meta():
        model = Questions
        fields = ['qID', 'qText',  'qPrompt1', 'qPrompt2', 'qPrompt3', 'qAnswer', 'qFailNext1', 'qFailNext2', 'qFailNext3', 'qSuccessNext']
    def __str__(self):
        return self.qID