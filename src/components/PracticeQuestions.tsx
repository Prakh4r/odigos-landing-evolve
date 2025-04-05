
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, ArrowRight, Filter } from "lucide-react";

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
};

const PracticeQuestions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Sample practice questions
  const questions: Question[] = [
    {
      id: 1,
      text: "Which statistical method is most appropriate for predicting continuous outcomes based on multiple predictor variables?",
      options: [
        "Chi-square test",
        "Multiple linear regression",
        "Logistic regression",
        "One-way ANOVA"
      ],
      correctAnswer: 1,
      category: "Statistics",
      difficulty: "medium"
    },
    {
      id: 2,
      text: "In a database context, what does ACID stand for?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Analysis, Composition, Integration, Development",
        "Assist, Create, Implement, Design",
        "Application, Command, Interface, Database"
      ],
      correctAnswer: 0,
      category: "Databases",
      difficulty: "hard"
    },
    {
      id: 3,
      text: "Which chart type is best suited for showing the distribution of a continuous variable?",
      options: [
        "Pie chart",
        "Bar chart",
        "Histogram",
        "Scatter plot"
      ],
      correctAnswer: 2,
      category: "Data Visualization",
      difficulty: "easy"
    },
    {
      id: 4,
      text: "What is the purpose of a data dictionary in a business intelligence context?",
      options: [
        "To translate data between languages",
        "To document the meaning and context of data elements",
        "To compress large datasets",
        "To generate random test data"
      ],
      correctAnswer: 1,
      category: "Data Management",
      difficulty: "medium"
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];
  
  const handleAnswerSelection = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswer(index);
    }
  };
  
  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    
    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const getDifficultyColor = (difficulty: Question['difficulty']) => {
    switch(difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Practice Questions</h2>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <Button variant="outline" size="sm">
            Filter Topics
          </Button>
        </div>
      </div>
      
      <div className="flex justify-between mb-4 text-sm">
        <div>Question {currentQuestionIndex + 1} of {questions.length}</div>
        <div>Score: {score}/{questions.length}</div>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="mb-2">{currentQuestion.category}</Badge>
            <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
              {currentQuestion.difficulty}
            </Badge>
          </div>
          <CardTitle className="text-lg">{currentQuestion.text}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswer?.toString()} className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-2 p-3 border rounded-md cursor-pointer ${
                  isAnswered && index === currentQuestion.correctAnswer 
                    ? 'border-green-500 bg-green-50' 
                    : isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer
                    ? 'border-red-500 bg-red-50'
                    : selectedAnswer === index
                    ? 'border-blue-500'
                    : ''
                }`}
                onClick={() => handleAnswerSelection(index)}
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={isAnswered} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
                {isAnswered && index === currentQuestion.correctAnswer && (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                )}
                {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>
          
          {isAnswered && selectedAnswer !== currentQuestion.correctAnswer && (
            <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-md text-sm">
              <p className="font-medium">Explanation:</p>
              <p>The correct answer is "{currentQuestion.options[currentQuestion.correctAnswer]}".</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {!isAnswered ? (
            <Button 
              onClick={handleCheckAnswer}
              disabled={selectedAnswer === null}
              className="bg-odigos-blue hover:bg-blue-600 w-full"
            >
              Check Answer
            </Button>
          ) : (
            <Button 
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex >= questions.length - 1}
              className="bg-odigos-blue hover:bg-blue-600 w-full"
            >
              Next Question
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default PracticeQuestions;
