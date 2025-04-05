
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Users, Code, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import ChatAssistant from "@/components/ChatAssistant";
import WeeklyTimetable from "@/components/WeeklyTimetable";
import CourseDetails from "@/components/CourseDetails";
import PracticeQuestions from "@/components/PracticeQuestions";

// Sample data for employee performance chart
const employeeData = [
  { month: 'Jan', myScore: 65, targetScore: 75 },
  { month: 'Feb', myScore: 70, targetScore: 75 },
  { month: 'Mar', myScore: 76, targetScore: 75 },
  { month: 'Apr', myScore: 82, targetScore: 80 },
  { month: 'May', myScore: 85, targetScore: 80 },
  { month: 'Jun', myScore: 88, targetScore: 85 },
];

const EmployeeDashboard = () => {
  const [showChatAssistant, setShowChatAssistant] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Your Training Dashboard</h1>
            <Button 
              onClick={() => setShowChatAssistant(!showChatAssistant)}
              className="bg-odigos-blue hover:bg-blue-600"
            >
              {showChatAssistant ? "Close Odigo" : "Ask Odigo"}
            </Button>
          </div>

          {showChatAssistant && (
            <div className="mb-8">
              <ChatAssistant />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link to="/community" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
                <Users className="h-12 w-12 text-odigos-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Join Community</h3>
                <p className="text-gray-600 mb-4">Connect with peers, participate in discussions, and join study groups</p>
                <Button className="bg-odigos-blue hover:bg-blue-600 mt-auto group-hover:translate-y-[-2px] transition-transform">
                  Connect Now
                </Button>
              </div>
            </Link>
            
            <Link to="/practice" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
                <Code className="h-12 w-12 text-odigos-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Practice Problems</h3>
                <p className="text-gray-600 mb-4">Apply your skills to real-world problems and build your portfolio</p>
                <Button className="bg-odigos-blue hover:bg-blue-600 mt-auto group-hover:translate-y-[-2px] transition-transform">
                  Start Practicing
                </Button>
              </div>
            </Link>
            
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
                <MessageSquare className="h-12 w-12 text-odigos-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Talk to Odigo AI</h3>
                <p className="text-gray-600 mb-4">Get personalized learning assistance and answers to your questions</p>
                <Button 
                  className="bg-odigos-blue hover:bg-blue-600 mt-auto group-hover:translate-y-[-2px] transition-transform"
                  onClick={() => setShowChatAssistant(true)}
                >
                  Ask Odigo
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-semibold mb-4">Your Performance Trend</h2>
                <ChartContainer config={{}} className="h-64">
                  <LineChart data={employeeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip />
                    <Line type="monotone" dataKey="myScore" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="targetScore" stroke="#82ca9d" strokeDasharray="5 5" />
                    <Legend />
                  </LineChart>
                </ChartContainer>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Skill Growth Areas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Technical Skills</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Problem Solving</span>
                        <span className="font-semibold text-green-600">+15%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Technical Knowledge</span>
                        <span className="font-semibold text-green-600">+23%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Soft Skills</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Communication</span>
                        <span className="font-semibold text-green-600">+8%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Project Management</span>
                        <span className="font-semibold text-green-600">+12%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <CourseDetails />
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-6">
            <Tabs defaultValue="timetable" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="timetable">Weekly Timetable</TabsTrigger>
                <TabsTrigger value="practice">Practice Questions</TabsTrigger>
              </TabsList>
              <TabsContent value="timetable" className="bg-white p-6 rounded-lg shadow-sm mt-2">
                <WeeklyTimetable />
              </TabsContent>
              <TabsContent value="practice" className="bg-white p-6 rounded-lg shadow-sm mt-2">
                <PracticeQuestions />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
