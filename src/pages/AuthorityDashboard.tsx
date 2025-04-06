
import React, { useState } from 'react';
import { 
  Award, 
  Users, 
  ArrowUp, 
  ThumbsUp, 
  MessageSquare 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";

// Sample data for the authority dashboard
const topPerformers = [
  { id: 1, name: "Alex Johnson", department: "Engineering", score: 98, improvement: "+15%", avatar: "AJ" },
  { id: 2, name: "Sarah Chen", department: "Product", score: 96, improvement: "+12%", avatar: "SC" },
  { id: 3, name: "Michael Brown", department: "Sales", score: 94, improvement: "+10%", avatar: "MB" },
  { id: 4, name: "Emma Watson", department: "Marketing", score: 92, improvement: "+8%", avatar: "EW" },
];

const topTeams = [
  { id: 1, name: "Engineering Team Alpha", score: 95, improvement: "+12%", members: 8 },
  { id: 2, name: "Sales Dream Team", score: 92, improvement: "+10%", members: 6 },
  { id: 3, name: "Product Innovation Group", score: 90, improvement: "+9%", members: 5 },
];

const recentFeedback = [
  { 
    id: 1, 
    employeeName: "David Kim", 
    employeeId: "EMP1023", 
    department: "Engineering", 
    feedback: "Excellent problem-solving skills. Resolved a critical production bug ahead of schedule.", 
    rating: 5,
    date: "2025-04-03"
  },
  { 
    id: 2, 
    employeeName: "Lisa Wong", 
    employeeId: "EMP985", 
    department: "Customer Support", 
    feedback: "Outstanding client communication. Received commendation from three enterprise clients this month.", 
    rating: 5,
    date: "2025-04-02"
  },
  { 
    id: 3, 
    employeeName: "Ryan Martinez", 
    employeeId: "EMP1122", 
    department: "Sales", 
    feedback: "Met quarterly targets two weeks early. Excellent performance but could improve on documentation.", 
    rating: 4,
    date: "2025-04-01"
  },
];

const AuthorityDashboard = () => {
  const { toast } = useToast();
  const [activeFeedbackId, setActiveFeedbackId] = useState<number | null>(null);
  
  const handleSendEncouragement = (type: 'individual' | 'team', id: number, name: string) => {
    toast({
      title: "Encouragement Sent",
      description: `Your message of encouragement has been sent to ${name}.`,
    });
  };
  
  const handleAddFeedback = (employeeId: string, employeeName: string) => {
    setActiveFeedbackId(activeFeedbackId === Number(employeeId) ? null : Number(employeeId));
    toast({
      title: "Feedback Form Opened",
      description: `You can now add feedback for ${employeeName}.`,
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Authority Dashboard</h1>
            <p className="text-gray-600 mt-1">Overview of team performance and feedback</p>
          </div>
          <div className="text-sm text-gray-500 mt-4 md:mt-0">
            Last updated: Today at 9:30 AM
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-xl">Training Completion</CardTitle>
                <CardDescription>Overall program progress</CardDescription>
              </div>
              <Award className="h-6 w-6 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">87%</div>
              <p className="text-sm text-gray-500 mt-1">+5% from last month</p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{width: '87%'}}></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-xl">Employee Engagement</CardTitle>
                <CardDescription>Active participation rate</CardDescription>
              </div>
              <Users className="h-6 w-6 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">92%</div>
              <p className="text-sm text-gray-500 mt-1">+3% from last month</p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{width: '92%'}}></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-xl">Performance Growth</CardTitle>
                <CardDescription>Average skill improvement</CardDescription>
              </div>
              <ArrowUp className="h-6 w-6 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">+18%</div>
              <p className="text-sm text-gray-500 mt-1">+2% from last month</p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full" style={{width: '78%'}}></div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-amber-500" />
                Top Performing Individuals
              </CardTitle>
              <CardDescription>Employees with highest scores this week</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="text-right">Growth</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPerformers.map((performer) => (
                    <TableRow key={performer.id}>
                      <TableCell className="font-medium">{performer.name}</TableCell>
                      <TableCell>{performer.department}</TableCell>
                      <TableCell className="text-right">{performer.score}/100</TableCell>
                      <TableCell className="text-right text-green-600">{performer.improvement}</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="flex items-center text-blue-600 hover:text-blue-800"
                          onClick={() => handleSendEncouragement('individual', performer.id, performer.name)}
                        >
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Encourage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-500" />
                Top Performing Teams
              </CardTitle>
              <CardDescription>Teams with highest collective scores</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Team Name</TableHead>
                    <TableHead className="text-right">Members</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="text-right">Growth</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topTeams.map((team) => (
                    <TableRow key={team.id}>
                      <TableCell className="font-medium">{team.name}</TableCell>
                      <TableCell className="text-right">{team.members}</TableCell>
                      <TableCell className="text-right">{team.score}/100</TableCell>
                      <TableCell className="text-right text-green-600">{team.improvement}</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="ghost" 
                          className="flex items-center text-blue-600 hover:text-blue-800"
                          onClick={() => handleSendEncouragement('team', team.id, team.name)}
                        >
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Encourage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-indigo-500" />
              Recent Employee Feedback
            </CardTitle>
            <CardDescription>Latest performance reviews and notes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentFeedback.map((feedback) => (
                <div key={feedback.id} className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{feedback.employeeName}</h3>
                      <p className="text-sm text-gray-500">{feedback.employeeId} • {feedback.department}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`h-5 w-5 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{feedback.feedback}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{feedback.date}</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleAddFeedback(feedback.employeeId, feedback.employeeName)}
                    >
                      Add Follow-up
                    </Button>
                  </div>
                  
                  {activeFeedbackId === feedback.id && (
                    <div className="mt-3 pt-3 border-t">
                      <textarea 
                        className="w-full p-2 border rounded-md" 
                        placeholder="Add your follow-up feedback here..."
                        rows={2}
                      />
                      <div className="flex justify-end mt-2 space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setActiveFeedbackId(null)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => {
                            toast({
                              title: "Feedback Submitted",
                              description: `Your follow-up for ${feedback.employeeName} has been recorded.`
                            });
                            setActiveFeedbackId(null);
                          }}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">View All Feedback</Button>
            <Button>Create New Feedback</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AuthorityDashboard;
