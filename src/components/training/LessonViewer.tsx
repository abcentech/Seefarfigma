import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Play, BookOpen, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import type { Lesson, LessonContent } from '../../types';

interface LessonViewerProps {
  lesson: Lesson;
  onComplete: () => void;
  onNavigateBack: () => void;
  onNavigateNext?: () => void;
  isLastLesson?: boolean;
}

export function LessonViewer({
  lesson,
  onComplete,
  onNavigateBack,
  onNavigateNext,
  isLastLesson = false,
}: LessonViewerProps) {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());

  const currentContent = lesson.content[currentContentIndex];
  const progress = ((currentContentIndex + 1) / lesson.content.length) * 100;

  const handleNext = () => {
    const newCompleted = new Set(completedSections);
    newCompleted.add(currentContentIndex);
    setCompletedSections(newCompleted);

    if (currentContentIndex < lesson.content.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
    }
  };

  const renderContent = (content: LessonContent) => {
    switch (content.type) {
      case 'text':
        return (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{content.content}</p>
          </div>
        );
      case 'video':
        return (
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Play className="h-8 w-8 text-white" />
              </div>
              <p className="text-gray-600">Video Content</p>
              <p className="text-sm text-gray-500">{content.content}</p>
              {content.duration && (
                <Badge variant="secondary">
                  <Clock className="h-3 w-3 mr-1" />
                  {Math.floor(content.duration / 60)} min
                </Badge>
              )}
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="rounded-lg overflow-hidden">
            <img
              src={content.content}
              alt="Lesson content"
              className="w-full h-auto"
            />
          </div>
        );
      case 'interactive':
        return (
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3>Interactive Activity</h3>
                <p className="text-gray-600">{content.content}</p>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <Button variant="ghost" onClick={onNavigateBack} className="gap-2">
          <ChevronLeft className="h-4 w-4" />
          Back to Module
        </Button>

        <div>
          <h1>{lesson.title}</h1>
          <p className="text-gray-600 mt-2">{lesson.description}</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              Section {currentContentIndex + 1} of {lesson.content.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <Separator />

      {/* Content Display */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="outline">
              {currentContent.type.charAt(0).toUpperCase() + currentContent.type.slice(1)}
            </Badge>
            {completedSections.has(currentContentIndex) && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Completed</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {renderContent(currentContent)}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentContentIndex === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {currentContentIndex === lesson.content.length - 1 ? (
              <div className="flex gap-3">
                <Button onClick={handleNext} className="gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Complete Lesson
                </Button>
                {!isLastLesson && onNavigateNext && (
                  <Button onClick={onNavigateNext} variant="outline" className="gap-2">
                    Next Lesson
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ) : (
              <Button onClick={handleNext} className="gap-2">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Lesson Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Duration</p>
              <p className="font-medium">{Math.floor(lesson.duration / 60)} minutes</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Order</p>
              <p className="font-medium">Lesson {lesson.order}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Completion Rate</p>
              <p className="font-medium">{lesson.completionRate}%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
