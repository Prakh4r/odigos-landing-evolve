
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Code, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

const ProblemSolvingPage = () => {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  
  // Sample problems data
  const problems = [
    {
      id: 1,
      title: "Data Transformation Challenge",
      category: "Data Analysis",
      difficulty: "Medium",
      completionRate: 68,
      description: "Transform the given raw data into a structured format suitable for visualization. You need to clean the data, handle missing values, and create appropriate aggregations.",
      constraints: "The solution should use only the standard data manipulation libraries and handle edge cases properly."
    },
    {
      id: 2,
      title: "Customer Segmentation Problem",
      category: "Business Analysis",
      difficulty: "Hard",
      completionRate: 42,
      description: "Given a dataset of customer transactions, identify meaningful customer segments based on purchasing behavior, frequency, and value. Propose a segmentation strategy that could be used for targeted marketing.",
      constraints: "Your solution should include a justification for the chosen segmentation method and visualization of the segments."
    },
    {
      id: 3,
      title: "Process Optimization Challenge",
      category: "Operations",
      difficulty: "Easy",
      completionRate: 85,
      description: "Analyze the given business process workflow and identify bottlenecks. Suggest at least three optimization strategies that could improve efficiency without requiring additional resources.",
      constraints: "Your suggestions should be practical and include estimates of potential time savings."
    },
    {
      id: 4,
      title: "Communication Strategy Scenario",
      category: "Leadership",
      difficulty: "Medium",
      completionRate: 62,
      description: "You're leading a team implementing a major change in company procedures. Design a communication strategy to ensure all stakeholders are informed and supportive of the change.",
      constraints: "Your strategy should address potential resistance and include a timeline for communications."
    }
  ];

  // Sample user progress data
  const userProgress = {
    totalCompleted: 12,
    totalAttempted: 18,
    skillLevels: {
      "Data Analysis": 65,
      "Business Strategy": 48,
      "Communication": 82,
      "Problem Solving": 74
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold">Practical Problem Solving</h1>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-grow md:flex-grow-0 md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <input
                  type="search"
                  placeholder="Search problems..."
                  className="pl-9 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-odigos-blue focus:border-transparent"
                />
              </div>
              <Button variant="outline">Filters</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full md:w-[400px] grid-cols-3">
                  <TabsTrigger value="all">All Problems</TabsTrigger>
                  <TabsTrigger value="attempted">Attempted</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="space-y-4">
                    {problems.map(problem => (
                      <Card 
                        key={problem.id}
                        className={`hover-card cursor-pointer transition-all ${selectedProblem === problem.id ? 'ring-2 ring-odigos-blue' : ''}`}
                        onClick={() => setSelectedProblem(problem.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                  {problem.category}
                                </span>
                                <span className={`${getDifficultyColor(problem.difficulty)} text-xs px-2 py-1 rounded`}>
                                  {problem.difficulty}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-500">Completion Rate</div>
                              <div className="font-semibold">{problem.completionRate}%</div>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 text-sm mt-3 mb-4">{problem.description.substring(0, 100)}...</p>
                          
                          <Button 
                            className="bg-odigos-blue hover:bg-blue-600 w-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProblem(problem.id);
                            }}
                          >
                            <Code className="mr-2 h-4 w-4" />
                            Solve Challenge
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="attempted">
                  <div className="flex items-center justify-center h-32 bg-white rounded-lg border border-gray-200 mt-6">
                    <p className="text-gray-500">Your attempted problems will appear here</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="flex items-center justify-center h-32 bg-white rounded-lg border border-gray-200 mt-6">
                    <p className="text-gray-500">Your completed problems will appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Problems Completed</span>
                        <span className="text-sm font-medium">{userProgress.totalCompleted}/{userProgress.totalAttempted}</span>
                      </div>
                      <Progress value={(userProgress.totalCompleted / userProgress.totalAttempted) * 100} className="h-2" />
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-medium mb-3">Skill Proficiency</h4>
                      {Object.entries(userProgress.skillLevels).map(([skill, level]) => (
                        <div key={skill} className="mb-3">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">{skill}</span>
                            <span className="text-sm font-medium">{level}%</span>
                          </div>
                          <Progress value={level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-md flex flex-col items-center justify-center text-center">
                      <Award className="h-8 w-8 text-yellow-500 mb-1" />
                      <span className="text-sm font-medium">Problem Solver</span>
                      <span className="text-xs text-gray-500">Completed 10 problems</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md flex flex-col items-center justify-center text-center opacity-50">
                      <BookOpen className="h-8 w-8 text-blue-500 mb-1" />
                      <span className="text-sm font-medium">Quick Learner</span>
                      <span className="text-xs text-gray-500">Solve 3 problems in a day</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md flex flex-col items-center justify-center text-center opacity-50">
                      <Code className="h-8 w-8 text-purple-500 mb-1" />
                      <span className="text-sm font-medium">Code Master</span>
                      <span className="text-xs text-gray-500">Complete all hard problems</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md flex flex-col items-center justify-center text-center opacity-50">
                      <Badge className="h-8 w-8 text-green-500 mb-1" />
                      <span className="text-sm font-medium">All-Rounder</span>
                      <span className="text-xs text-gray-500">Solve in every category</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {selectedProblem && (
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between">
                    <div>
                      <CardTitle>{problems.find(p => p.id === selectedProblem)?.title}</CardTitle>
                      <CardDescription>
                        {problems.find(p => p.id === selectedProblem)?.category} • 
                        {problems.find(p => p.id === selectedProblem)?.difficulty}
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setSelectedProblem(null)}>
                      Close
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Problem Description</h4>
                      <p className="text-gray-700">
                        {problems.find(p => p.id === selectedProblem)?.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Constraints</h4>
                      <p className="text-gray-700">
                        {problems.find(p => p.id === selectedProblem)?.constraints}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium mb-1">Your Solution</h4>
                      <textarea 
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md min-h-[200px] focus:outline-none focus:ring-2 focus:ring-odigos-blue focus:border-transparent" 
                        placeholder="Write your solution here..."
                      ></textarea>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save Draft</Button>
                  <Button className="bg-odigos-blue hover:bg-blue-600">Submit Solution</Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolvingPage;
