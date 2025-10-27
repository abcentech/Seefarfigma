import { CheckCircle, Circle, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import type { Lesson } from '../../types';

interface ProgressTrackerProps {
  lessons: Lesson[];
  completedLessonIds: string[];
  currentLessonId?: string;
  onLessonClick: (lessonId: string) => void;
}

export function ProgressTracker({
  lessons,
  completedLessonIds,
  currentLessonId,
  onLessonClick,
}: ProgressTrackerProps) {
  const overallProgress = (completedLessonIds.length / lessons.length) * 100;

  const isLessonAccessible = (lesson: Lesson): boolean => {
    if (lesson.prerequisites.length === 0) return true;
    return lesson.prerequisites.every((prereqId) =>
      completedLessonIds.includes(prereqId)
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3>Module Progress</h3>
              <p className="text-gray-600 text-sm mt-1">
                {completedLessonIds.length} of {lessons.length} lessons completed
              </p>
            </div>
            <Badge variant={overallProgress === 100 ? 'default' : 'secondary'} className="text-lg px-4 py-2">
              {Math.round(overallProgress)}%
            </Badge>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessonIds.includes(lesson.id);
            const isCurrent = lesson.id === currentLessonId;
            const isAccessible = isLessonAccessible(lesson);

            return (
              <div
                key={lesson.id}
                className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${
                  isCurrent
                    ? 'border-blue-600 bg-blue-50'
                    : isCompleted
                    ? 'border-green-200 bg-green-50'
                    : isAccessible
                    ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    : 'border-gray-100 bg-gray-50 opacity-60'
                }`}
              >
                {/* Status Icon */}
                <div className="flex-shrink-0 mt-1">
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : isAccessible ? (
                    <Circle className="h-6 w-6 text-gray-400" />
                  ) : (
                    <Lock className="h-6 w-6 text-gray-400" />
                  )}
                </div>

                {/* Lesson Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          Lesson {lesson.order}
                        </Badge>
                        {isCurrent && (
                          <Badge variant="default" className="text-xs">
                            In Progress
                          </Badge>
                        )}
                      </div>
                      <h4 className="text-sm">{lesson.title}</h4>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {lesson.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{Math.floor(lesson.duration / 60)} min</span>
                      {isCompleted && (
                        <span className="text-green-600">✓ Completed</span>
                      )}
                      {!isAccessible && lesson.prerequisites.length > 0 && (
                        <span className="text-gray-400">
                          Requires previous lessons
                        </span>
                      )}
                    </div>

                    {isAccessible && (
                      <Button
                        size="sm"
                        variant={isCurrent ? 'default' : 'outline'}
                        onClick={() => onLessonClick(lesson.id)}
                      >
                        {isCompleted ? 'Review' : isCurrent ? 'Continue' : 'Start'}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
