import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { MessageSquare, Users, ArrowUp, ArrowDown, MessageSquarePlus } from "lucide-react";
import Navigation from "@/components/Navigation";

const CommunityPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How do you approach data visualization for complex datasets?",
      author: "Jane Smith",
      avatar: "JS",
      content: "I've been working with multi-dimensional datasets and struggling to find the best visualization approach. Any recommendations for tools or techniques that have worked well for you?",
      votes: 24,
      comments: 8,
      tags: ["Data Analysis", "Visualization"]
    },
    {
      id: 2,
      title: "Best practices for team communication during remote projects",
      author: "Alex Rodriguez",
      avatar: "AR",
      content: "My team has recently gone fully remote and I'm looking for advice on maintaining effective communication. What tools and practices have helped your teams stay connected and productive?",
      votes: 18,
      comments: 12,
      tags: ["Communication", "Remote Work"]
    },
    {
      id: 3,
      title: "Resource recommendations for advanced SQL techniques",
      author: "Michael Chen",
      avatar: "MC",
      content: "I've completed the basic SQL module in our training program and want to dive deeper. Looking for books, courses or other resources that cover advanced queries, optimization, and database design.",
      votes: 31,
      comments: 15,
      tags: ["SQL", "Database", "Learning Resources"]
    }
  ]);
  
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  
  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) return;
    
    const newPost = {
      id: posts.length + 1,
      title: newPostTitle,
      author: "Current User",
      avatar: "CU",
      content: newPostContent,
      votes: 0,
      comments: 0,
      tags: ["Discussion"]
    };
    
    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <Button className="bg-odigos-blue hover:bg-blue-600">
              <Users className="mr-2 h-4 w-4" />
              Find Peers
            </Button>
          </div>

          <Tabs defaultValue="discussions" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Start a Discussion</CardTitle>
                      <CardDescription>Share your thoughts or questions with the community</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handlePostSubmit}>
                        <div className="space-y-4">
                          <div>
                            <Input
                              placeholder="Title of your discussion"
                              value={newPostTitle}
                              onChange={(e) => setNewPostTitle(e.target.value)}
                            />
                          </div>
                          <div>
                            <Textarea
                              placeholder="Share your thoughts, questions or insights..."
                              rows={4}
                              value={newPostContent}
                              onChange={(e) => setNewPostContent(e.target.value)}
                            />
                          </div>
                        </div>
                        <Button type="submit" className="mt-4 bg-odigos-blue hover:bg-blue-600">
                          <MessageSquarePlus className="mr-2 h-4 w-4" />
                          Post Discussion
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                  
                  {posts.map(post => (
                    <Card key={post.id} className="hover-card">
                      <CardContent className="pt-6">
                        <div className="flex">
                          <div className="flex flex-col items-center mr-4">
                            <Button variant="ghost" size="sm">
                              <ArrowUp className="h-5 w-5" />
                            </Button>
                            <span className="font-semibold">{post.votes}</span>
                            <Button variant="ghost" size="sm">
                              <ArrowDown className="h-5 w-5" />
                            </Button>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <Avatar className="h-6 w-6 mr-2">
                                <div className="bg-gray-300 rounded-full flex items-center justify-center h-full w-full text-xs">
                                  {post.avatar}
                                </div>
                              </Avatar>
                              <span className="text-sm text-gray-600">{post.author}</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-4">{post.content}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span className="text-sm">{post.comments} comments</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Community Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>Be respectful and constructive in your discussions</li>
                        <li>Share knowledge and help others learn</li>
                        <li>Provide attribution for content that isn't your own</li>
                        <li>Focus on professional development topics</li>
                        <li>Avoid sharing personal or confidential information</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Popular Topics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm">Data Analysis</Button>
                        <Button variant="outline" size="sm">Career Growth</Button>
                        <Button variant="outline" size="sm">Leadership</Button>
                        <Button variant="outline" size="sm">Communication</Button>
                        <Button variant="outline" size="sm">Technical Skills</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="study-groups">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <Card className="hover-card">
                  <CardHeader>
                    <CardTitle>Data Analysis Study Group</CardTitle>
                    <CardDescription>15 members • Active</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Weekly sessions focused on data visualization techniques and statistical analysis</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-odigos-blue hover:bg-blue-600">Join Group</Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-card">
                  <CardHeader>
                    <CardTitle>Leadership Skills</CardTitle>
                    <CardDescription>22 members • Active</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Biweekly discussions on effective team management and leadership principles</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-odigos-blue hover:bg-blue-600">Join Group</Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-card">
                  <CardHeader>
                    <CardTitle>Project Management</CardTitle>
                    <CardDescription>18 members • Active</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Practice agile methodologies and discuss project management case studies</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-odigos-blue hover:bg-blue-600">Join Group</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
