
import React, { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, LineChart, Line, BarChart, Bar } from "recharts";

// Sample data for charts
const enterpriseData = [
  { month: 'Jan', completion: 65, efficiency: 72, retention: 81 },
  { month: 'Feb', completion: 68, efficiency: 74, retention: 82 },
  { month: 'Mar', completion: 75, efficiency: 79, retention: 85 },
  { month: 'Apr', completion: 80, efficiency: 82, retention: 87 },
  { month: 'May', completion: 85, efficiency: 86, retention: 90 },
  { month: 'Jun', completion: 90, efficiency: 90, retention: 93 },
];

const individualData = [
  { month: 'Jan', score: 72, avgScore: 65 },
  { month: 'Feb', score: 75, avgScore: 68 },
  { month: 'Mar', score: 80, avgScore: 75 },
  { month: 'Apr', score: 85, avgScore: 78 },
  { month: 'May', score: 88, avgScore: 80 },
  { month: 'Jun', score: 92, avgScore: 83 },
];

const employeeData = [
  { month: 'Jan', myScore: 65, targetScore: 75 },
  { month: 'Feb', myScore: 70, targetScore: 75 },
  { month: 'Mar', myScore: 76, targetScore: 75 },
  { month: 'Apr', myScore: 82, targetScore: 80 },
  { month: 'May', myScore: 85, targetScore: 80 },
  { month: 'Jun', myScore: 88, targetScore: 85 },
];

const departmentData = [
  { name: 'Sales', score: 82 },
  { name: 'Marketing', score: 75 },
  { name: 'Engineering', score: 90 },
  { name: 'Customer Support', score: 79 },
  { name: 'Product', score: 85 },
  { name: 'HR', score: 72 },
];

// Form schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["authority", "employee"], {
    required_error: "Please select your role",
  }),
});

const Login = () => {
  const [showDashboardPreview, setShowDashboardPreview] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: undefined,
    },
  });
  
  const role = form.watch("role");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setShowDashboardPreview(true);
    // In a real app, you would handle authentication here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="py-12 flex-1 flex flex-col md:flex-row gap-8 container mx-auto px-4">
        <div className="md:w-1/2 max-w-md mx-auto md:mx-0">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Welcome to Odigos</h1>
            <p className="text-gray-600">
              Sign in to access your role-based training platform
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>I am a:</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="authority" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Organization Leader / Manager
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="employee" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Employee / Team Member
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full bg-odigos-blue">
                Sign In
              </Button>
              
              <div className="text-center mt-4">
                <a href="#" className="text-odigos-blue hover:underline text-sm">
                  Forgot password?
                </a>
              </div>
            </form>
          </Form>
        </div>
        
        <div className="md:w-1/2 flex flex-col justify-center">
          {!showDashboardPreview ? (
            <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-center justify-center h-full">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  Your personalized dashboard awaits
                </h2>
                <p className="text-gray-600">
                  Sign in to see your role-specific training analytics
                </p>
              </div>
              {role === "authority" && (
                <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">Enterprise Dashboard Preview</span>
                </div>
              )}
              {role === "employee" && (
                <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">Personal Progress Dashboard Preview</span>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">
                {role === "authority" ? "Enterprise Training Overview" : "Your Training Progress"}
              </h2>
              
              {role === "authority" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Enterprise Training Metrics</h3>
                    <ChartContainer config={{}} className="h-64">
                      <AreaChart data={enterpriseData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip />
                        <Area type="monotone" dataKey="completion" stroke="#8884d8" fill="#8884d8" fillOpacity={0.1} />
                        <Area type="monotone" dataKey="efficiency" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.1} />
                        <Area type="monotone" dataKey="retention" stroke="#ffc658" fill="#ffc658" fillOpacity={0.1} />
                        <Legend />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Individual Performance</h3>
                      <ChartContainer config={{}} className="h-64">
                        <LineChart data={individualData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip />
                          <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="avgScore" stroke="#82ca9d" />
                          <Legend />
                        </LineChart>
                      </ChartContainer>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Department Performance</h3>
                      <ChartContainer config={{}} className="h-64">
                        <BarChart data={departmentData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip />
                          <Bar dataKey="score" fill="#82ca9d" />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  </div>
                </div>
              )}
              
              {role === "employee" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Your Performance Trend</h3>
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
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Skill Growth Areas</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Problem Solving</span>
                          <span className="font-semibold text-green-600">+15%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Technical Knowledge</span>
                          <span className="font-semibold text-green-600">+23%</span>
                        </li>
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
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
