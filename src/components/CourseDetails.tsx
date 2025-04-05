
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, ArrowRight } from "lucide-react";

const CourseDetails = () => {
  // Sample course data
  const currentCourse = {
    title: "Advanced Data Analysis for Business Leaders",
    progress: 65,
    timeRemaining: "3 weeks",
    modules: [
      { name: "Introduction to Business Analytics", completed: true },
      { name: "Data Collection Methods", completed: true },
      { name: "Statistical Analysis Fundamentals", completed: false },
      { name: "Data Visualization Techniques", completed: false },
      { name: "Decision Making with Data", completed: false }
    ],
    nextSession: "Tomorrow at 10:00 AM"
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-odigos-blue" />
        <h2 className="text-xl font-semibold">Current Course</h2>
      </div>
      
      <h3 className="font-bold text-lg mb-2">{currentCourse.title}</h3>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Your progress</span>
          <span className="font-medium">{currentCourse.progress}%</span>
        </div>
        <Progress value={currentCourse.progress} className="h-2" />
      </div>
      
      <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-6">
        <Clock className="h-4 w-4" />
        <span>{currentCourse.timeRemaining} remaining</span>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-3">Course Modules</h4>
        <ul className="space-y-2">
          {currentCourse.modules.map((module, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
                module.completed 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {module.completed ? (
                  <Award className="h-3 w-3" />
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
              </div>
              <span className={module.completed ? 'line-through text-gray-500' : ''}>
                {module.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <h4 className="font-medium text-odigos-blue mb-1">Next Session</h4>
        <p className="text-sm">{currentCourse.nextSession}</p>
      </div>
      
      <Button className="w-full bg-odigos-blue hover:bg-blue-600">
        Continue Learning
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default CourseDetails;
