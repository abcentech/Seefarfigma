import { useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import type { Quiz, QuizQuestion } from '../../types';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { useLanguage } from '../../contexts/LanguageContext';

interface QuizComponentProps {
  quiz: Quiz;
  onComplete: (score: number, passed: boolean) => void;
}

export function QuizComponent({ quiz, onComplete }: QuizComponentProps) {
  const { t } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | number[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswer = (questionId: string, answer: number | number[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    quiz.questions.forEach((question) => {
      maxScore += question.points;
      const userAnswer = answers[question.id];
      const correctAnswer = question.correctAnswer;

      if (question.type === 'multi-select') {
        // Check if arrays are equal
        const correct = Array.isArray(correctAnswer) && Array.isArray(userAnswer);
        if (
          correct &&
          correctAnswer.length === userAnswer.length &&
          correctAnswer.every((val) => userAnswer.includes(val))
        ) {
          totalScore += question.points;
        }
      } else {
        if (userAnswer === correctAnswer) {
          totalScore += question.points;
        }
      }
    });

    const percentage = Math.round((totalScore / maxScore) * 100);
    setScore(percentage);
    setShowResults(true);
    onComplete(percentage, percentage >= quiz.passingScore);
  };

  const isAnswered = currentQuestion && answers[currentQuestion.id] !== undefined;

  if (showResults) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="text-center space-y-4">
            {score >= quiz.passingScore ? (
              <>
                <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto" />
                <h2 className="text-green-600">Congratulations!</h2>
                <p className="text-gray-600">You passed the quiz</p>
              </>
            ) : (
              <>
                <XCircle className="h-16 w-16 text-red-600 mx-auto" />
                <h2 className="text-red-600">Not Quite There</h2>
                <p className="text-gray-600">Keep learning and try again</p>
              </>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-2">{score}%</div>
            <p className="text-gray-600">
              Passing score: {quiz.passingScore}%
            </p>
          </div>

          <div className="space-y-4">
            {quiz.questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const isCorrect =
                question.type === 'multi-select'
                  ? Array.isArray(question.correctAnswer) &&
                    Array.isArray(userAnswer) &&
                    question.correctAnswer.length === userAnswer.length &&
                    question.correctAnswer.every((val) => userAnswer.includes(val))
                  : userAnswer === question.correctAnswer;

              return (
                <div key={question.id} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="mb-2">
                        {index + 1}. {question.question}
                      </p>
                      <p className="text-sm text-gray-600">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Button className="w-full" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span>{currentQuestion.points} points</span>
          </div>
          <Progress value={progress} />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-4">{currentQuestion.question}</h3>

          {currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'true-false' ? (
            <RadioGroup
              value={
                answers[currentQuestion.id] !== undefined
                  ? String(answers[currentQuestion.id])
                  : undefined
              }
              onValueChange={(value) => handleAnswer(currentQuestion.id, parseInt(value))}
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value={String(index)} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          ) : (
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg">
                  <Checkbox
                    id={`option-${index}`}
                    checked={
                      Array.isArray(answers[currentQuestion.id]) &&
                      answers[currentQuestion.id].includes(index)
                    }
                    onCheckedChange={(checked) => {
                      const current = (answers[currentQuestion.id] as number[]) || [];
                      if (checked) {
                        handleAnswer(currentQuestion.id, [...current, index]);
                      } else {
                        handleAnswer(
                          currentQuestion.id,
                          current.filter((i) => i !== index)
                        );
                      }
                    }}
                  />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                <AlertCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">Select all that apply</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 pt-4 border-t">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex-1"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex-1"
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
