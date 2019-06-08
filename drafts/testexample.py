class Question:
    def __init__(self, qID, qText,  qPrompt1, qPrompt2, qPrompt3, qAnswer, qFailNext1, qFailNext2, qFailNext3, qSuccessNext):
        self.qID = qID
        self.qText = qText
        self.qPrompt1 = qPrompt1
        self.qPrompt2 = qPrompt2
        self.qPrompt3 = qPrompt3
        self.qAnswer = qAnswer
        self.qFailNext1 = qFailNext1
        self.qFailNext2 = qFailNext2
        self.qFailNext3 = qFailNext3
        self.qSuccessNext = qSuccessNext

    def exam(self):
        answer = input(self.qID '\n' self.qPrompt1 '\n' self.qPrompt2 '\n' self.qPrompt3 '\n')
        text = self.qAnswer[0]
        counter = 0

        if answer == text:
            counter+=5
            qID = self.qSuccessNext

        elif answer == self.qPrompt1[0]:
            qID = self.qFailNext1

        elif answer == self.qPrompt2[0]:
            qID = self.qFailNext2

        else:
            qID = self.qFailNext1
        return (qID, counter)