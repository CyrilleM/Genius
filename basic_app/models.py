from django.db import models
# Create your models here.

class Questions(models.Model):
    qID = models.CharField(max_length=50)
    qText = models.CharField(max_length=50)
    qPrompt1 = models.CharField(max_length=50)
    qPrompt2 = models.CharField(max_length=50)
    qPrompt3 = models.CharField(max_length=50)
    qAnswer = models.CharField(max_length=50)
    qFailNext1 = models.CharField(max_length=50)
    qFailNext2 = models.CharField(max_length=50)
    qFailNext3 = models.CharField(max_length=50)
    qSuccessNext = models.CharField(max_length=50)
    qSms = models.CharField(max_length=50, null=True)
    qSmsFail1 = models.CharField(max_length=50, null=True)
    qSmsFail2 = models.CharField(max_length=50, null=True)
    qSmsFail3 = models.CharField(max_length=50, null=True)
    qSol = models.CharField(max_length=50, null=True)

class answersBase(models.Model):
    studenID = models.CharField(max_length = 50)
    qID = models.CharField(max_length = 50)
    questionScore = models.PositiveIntegerField()
