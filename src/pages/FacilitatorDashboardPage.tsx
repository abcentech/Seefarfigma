import { useState } from 'react';
import {
  Upload,
  Users,
  BookOpen,
  TrendingUp,
  Download,
  FileText,
  Video,
  Image as ImageIcon,
  CheckCircle,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { toast } from 'sonner@2.0.3';

export function FacilitatorDashboardPage() {
  const { t } = useLanguage();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Mock data for learner progress
  const learnerProgress = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      enrolledModules: 3,
      completedLessons: 12,
      averageScore: 85,
      lastActive: '2025-10-26',
      status: 'active',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      enrolledModules: 2,
      completedLessons: 8,
      averageScore: 92,
      lastActive: '2025-10-27',
      status: 'active',
    },
    {
      id: '3',
      name: 'Ahmed Hassan',
      email: 'ahmed@example.com',
      enrolledModules: 1,
      completedLessons: 3,
      averageScore: 78,
      lastActive: '2025-10-20',
      status: 'inactive',
    },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast.success('File selected: ' + file.name);
    }
  };

  const handleSubmitContent = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Content uploaded successfully!');
    setSelectedFile(null);
  };

  const handleExportProgress = () => {
    toast.success('Exporting learner progress data...');
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-white mb-2">Facilitator Dashboard</h1>
          <p className="text-purple-100 text-lg">
            Manage training content and track learner progress
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Learners</p>
                  <h3>{learnerProgress.length}</h3>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">+12% this month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Modules</p>
                  <h3>8</h3>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600">All published</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Completion</p>
                  <h3>68%</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-2">
                <Progress value={68} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Quiz Score</p>
                  <h3>85%</h3>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">+5% improvement</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="upload">
              <Upload className="h-4 w-4 mr-2" />
              Upload Content
            </TabsTrigger>
            <TabsTrigger value="learners">
              <Users className="h-4 w-4 mr-2" />
              Learner Progress
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <TrendingUp className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Upload Content Tab */}
          <TabsContent value="upload" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upload Form */}
              <Card>
                <CardHeader>
                  <h2>Upload New Content</h2>
                  <p className="text-gray-600 text-sm">
                    Add lessons, videos, or documents to training modules
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitContent} className="space-y-4">
                    <div>
                      <Label htmlFor="module">Select Module</Label>
                      <Select>
                        <SelectTrigger id="module">
                          <SelectValue placeholder="Choose a module" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Safe Migration Fundamentals</SelectItem>
                          <SelectItem value="2">Prévention de la Traite</SelectItem>
                          <SelectItem value="3">حقوق العمال المهاجرين</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="content-type">Content Type</Label>
                      <Select>
                        <SelectTrigger id="content-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Text Lesson</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="document">Document</SelectItem>
                          <SelectItem value="quiz">Quiz</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter content title" />
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Brief description of the content"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="file-upload">Upload File (Optional)</Label>
                      <div className="mt-2">
                        <Input
                          id="file-upload"
                          type="file"
                          onChange={handleFileUpload}
                          accept=".pdf,.doc,.docx,.mp4,.mov,.jpg,.png"
                        />
                        {selectedFile && (
                          <p className="text-sm text-gray-600 mt-2">
                            Selected: {selectedFile.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Content
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Content Guidelines */}
              <Card>
                <CardHeader>
                  <h3>Content Guidelines</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Video className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm mb-1">Video Content</p>
                        <p className="text-sm text-gray-600">
                          Max 100MB, MP4 format, 1080p recommended. Keep videos under 15
                          minutes.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <FileText className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm mb-1">Documents</p>
                        <p className="text-sm text-gray-600">
                          PDF or DOCX, max 10MB. Ensure text is accessible and searchable.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <ImageIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm mb-1">Images</p>
                        <p className="text-sm text-gray-600">
                          JPG or PNG, max 5MB. Use descriptive alt text for accessibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="mb-2">Best Practices</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Break complex topics into 5-10 minute segments</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Include practical examples relevant to migration</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Add quizzes to reinforce key concepts</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Ensure content works offline for low-bandwidth users</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Learner Progress Tab */}
          <TabsContent value="learners" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <h2>Learner Progress Tracking</h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Monitor individual learner performance and engagement
                    </p>
                  </div>
                  <Button onClick={handleExportProgress} variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export Data
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Learner</TableHead>
                        <TableHead>Enrolled Modules</TableHead>
                        <TableHead>Completed Lessons</TableHead>
                        <TableHead>Avg Score</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {learnerProgress.map((learner) => (
                        <TableRow key={learner.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{learner.name}</p>
                              <p className="text-sm text-gray-600">{learner.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>{learner.enrolledModules}</TableCell>
                          <TableCell>{learner.completedLessons}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{learner.averageScore}%</span>
                              <Progress value={learner.averageScore} className="h-2 w-16" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              {new Date(learner.lastActive).toLocaleDateString()}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={learner.status === 'active' ? 'default' : 'secondary'}
                            >
                              {learner.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3>Completion Rates by Module</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Safe Migration Fundamentals</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Prévention de la Traite</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>حقوق العمال المهاجرين</span>
                      <span className="font-medium">52%</span>
                    </div>
                    <Progress value={52} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3>Recent Activity</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Jane Smith completed a module</p>
                        <p className="text-xs text-gray-600">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">New enrollment: John Doe</p>
                        <p className="text-xs text-gray-600">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Ahmed Hassan inactive for 7 days</p>
                        <p className="text-xs text-gray-600">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
