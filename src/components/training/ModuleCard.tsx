import { BookOpen, Clock, Users, Award } from 'lucide-react';
import type { TrainingModule } from '../../types';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { useLanguage } from '../../contexts/LanguageContext';

interface ModuleCardProps {
  module: TrainingModule;
  userProgress?: number;
  onEnroll?: () => void;
  onClick?: () => void;
}

export function ModuleCard({ module, userProgress, onEnroll, onClick }: ModuleCardProps) {
  const { t } = useLanguage();

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const isEnrolled = userProgress !== undefined;

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge className={difficultyColors[module.difficulty]}>
            {t.training.difficulty[module.difficulty]}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{formatDuration(module.totalDuration)}</span>
          </div>
        </div>
        <h3 className="line-clamp-2">{module.title}</h3>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="text-gray-600 line-clamp-3">{module.description}</p>

        {/* Module Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{module.lessons.length} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{module.enrollmentCount.toLocaleString()}</span>
          </div>
        </div>

        {/* Countries */}
        <div className="flex flex-wrap gap-1">
          {module.country.map((country) => (
            <Badge key={country} variant="outline" className="text-xs">
              {country}
            </Badge>
          ))}
        </div>

        {/* Progress Bar (if enrolled) */}
        {isEnrolled && (
          <div className="space-y-2 pt-2 border-t">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{t.training.completionRate}</span>
              <span>{userProgress}%</span>
            </div>
            <Progress value={userProgress} />
          </div>
        )}
      </CardContent>

      <CardFooter className="border-t pt-4">
        <Button
          className="w-full gap-2"
          variant={isEnrolled ? 'default' : 'outline'}
          onClick={onClick || onEnroll}
        >
          <BookOpen className="h-4 w-4" />
          <span>
            {isEnrolled ? t.training.continueLesson : t.training.startLesson}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}
