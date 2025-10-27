import { useState } from 'react';
import { ArrowLeft, Award, BookOpen, Clock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ProgressTracker } from '../components/training/ProgressTracker';
import { LessonViewer } from '../components/training/LessonViewer';
import { QuizComponent } from '../components/training/QuizComponent';
import { CertificateViewer } from '../components/training/CertificateViewer';
import { mockLessons, mockQuiz } from '../lib/mockData';
import type { TrainingModule, Certificate } from '../types';

interface ModuleDetailPageProps {
  module: TrainingModule;
  onNavigateBack: () => void;
}

type ViewState = 'overview' | 'lesson' | 'quiz' | 'certificate';

export function ModuleDetailPage({ module, onNavigateBack }: ModuleDetailPageProps) {
  const { t } = useLanguage();
  const [currentView, setCurrentView] = useState<ViewState>('overview');
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizPassed, setQuizPassed] = useState(false);

  // Mock lessons for this module
  const moduleLessons = mockLessons.filter((lesson) => lesson.moduleId === module.id);

  // Mock certificate
  const mockCertificate: Certificate = {
    id: '1',
    userId: 'user-123',
    lessonId: module.id,
    moduleName: module.title,
    issuedDate: new Date().toISOString(),
    certificateUrl: '#',
    verificationCode: 'SAFE-MIT-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
  };

  const handleLessonClick = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setCurrentView('lesson');
  };

  const handleLessonComplete = () => {
    if (currentLessonId && !completedLessonIds.includes(currentLessonId)) {
      setCompletedLessonIds([...completedLessonIds, currentLessonId]);
    }

    const currentIndex = moduleLessons.findIndex((l) => l.id === currentLessonId);
    if (currentIndex < moduleLessons.length - 1) {
      // Navigate to next lesson
      const nextLesson = moduleLessons[currentIndex + 1];
      setCurrentLessonId(nextLesson.id);
    } else {
      // All lessons completed, show quiz option
      setCurrentView('overview');
    }
  };

  const handleQuizComplete = (score: number, passed: boolean) => {
    setQuizScore(score);
    setQuizPassed(passed);
    
    if (passed) {
      // Show certificate
      setTimeout(() => {
        setCurrentView('certificate');
      }, 2000);
    }
  };

  const handleDownloadCertificate = () => {
    alert('Certificate download functionality would be implemented here');
  };

  const handleShareCertificate = () => {
    alert('Certificate sharing functionality would be implemented here');
  };

  const currentLesson = moduleLessons.find((l) => l.id === currentLessonId);
  const allLessonsCompleted = moduleLessons.every((l) => completedLessonIds.includes(l.id));
  const overallProgress = (completedLessonIds.length / moduleLessons.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        {currentView === 'overview' && (
          <div className="mb-8">
            <Button variant="ghost" onClick={onNavigateBack} className="gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Training
            </Button>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Module Info */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">
                      {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
                    </Badge>
                    <h1 className="mb-2">{module.title}</h1>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                </div>

                {/* Module Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Clock className="h-5 w-5 text-gray-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">{Math.floor(module.totalDuration / 3600)}h</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <BookOpen className="h-5 w-5 text-gray-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Lessons</p>
                      <p className="font-semibold">{moduleLessons.length}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Users className="h-5 w-5 text-gray-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Enrolled</p>
                      <p className="font-semibold">{module.enrollmentCount.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        {currentView === 'overview' && (
          <Tabs defaultValue="lessons" className="w-full">
            <TabsList>
              <TabsTrigger value="lessons">Lessons</TabsTrigger>
              <TabsTrigger value="quiz" disabled={!allLessonsCompleted}>
                Final Quiz {!allLessonsCompleted && '(Complete all lessons)'}
              </TabsTrigger>
              {quizPassed && (
                <TabsTrigger value="certificate">
                  <Award className="h-4 w-4 mr-2" />
                  Certificate
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="lessons" className="mt-6">
              <ProgressTracker
                lessons={moduleLessons}
                completedLessonIds={completedLessonIds}
                currentLessonId={currentLessonId || undefined}
                onLessonClick={handleLessonClick}
              />
            </TabsContent>

            <TabsContent value="quiz" className="mt-6">
              {allLessonsCompleted ? (
                <div className="max-w-2xl mx-auto">
                  <Card className="mb-6">
                    <CardHeader>
                      <h2>Final Assessment</h2>
                      <p className="text-gray-600">
                        Test your knowledge and earn your certificate
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <span>Passing Score</span>
                          <Badge>{mockQuiz.passingScore}%</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <span>Time Limit</span>
                          <Badge>{mockQuiz.timeLimit} minutes</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <span>Questions</span>
                          <Badge>{mockQuiz.questions.length}</Badge>
                        </div>
                        <Button
                          className="w-full"
                          size="lg"
                          onClick={() => setCurrentView('quiz')}
                        >
                          Start Quiz
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="mb-2">Complete All Lessons First</h3>
                    <p className="text-gray-600">
                      You need to complete all lessons before taking the final quiz.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Progress: {completedLessonIds.length} of {moduleLessons.length} lessons
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {quizPassed && (
              <TabsContent value="certificate" className="mt-6">
                <CertificateViewer
                  certificate={mockCertificate}
                  onDownload={handleDownloadCertificate}
                  onShare={handleShareCertificate}
                />
              </TabsContent>
            )}
          </Tabs>
        )}

        {currentView === 'lesson' && currentLesson && (
          <LessonViewer
            lesson={currentLesson}
            onComplete={handleLessonComplete}
            onNavigateBack={() => setCurrentView('overview')}
            onNavigateNext={
              moduleLessons.findIndex((l) => l.id === currentLessonId) <
              moduleLessons.length - 1
                ? () => {
                    const currentIndex = moduleLessons.findIndex(
                      (l) => l.id === currentLessonId
                    );
                    const nextLesson = moduleLessons[currentIndex + 1];
                    setCurrentLessonId(nextLesson.id);
                  }
                : undefined
            }
            isLastLesson={
              moduleLessons.findIndex((l) => l.id === currentLessonId) ===
              moduleLessons.length - 1
            }
          />
        )}

        {currentView === 'quiz' && (
          <div>
            <Button
              variant="ghost"
              onClick={() => setCurrentView('overview')}
              className="gap-2 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Overview
            </Button>
            <QuizComponent quiz={mockQuiz} onComplete={handleQuizComplete} />
          </div>
        )}

        {currentView === 'certificate' && (
          <div>
            <Button
              variant="ghost"
              onClick={() => setCurrentView('overview')}
              className="gap-2 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Overview
            </Button>
            <CertificateViewer
              certificate={mockCertificate}
              onDownload={handleDownloadCertificate}
              onShare={handleShareCertificate}
            />
          </div>
        )}
      </div>
    </div>
  );
}
