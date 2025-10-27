import { useState } from 'react';
import { Award, BookOpen, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ModuleCard } from '../components/training/ModuleCard';
import { ModuleDetailPage } from './ModuleDetailPage';
import { mockTrainingModules } from '../lib/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import type { TrainingModule } from '../types';

export function TrainingPage() {
  const { t } = useLanguage();
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);

  // If a module is selected, show the detail page
  if (selectedModule) {
    return (
      <ModuleDetailPage
        module={selectedModule}
        onNavigateBack={() => setSelectedModule(null)}
      />
    );
  }

  // Mock user progress data
  const userProgress = {
    '1': 45,
    '2': 0,
    '3': 78,
  };

  const enrolledModules = mockTrainingModules.filter(
    (module) => userProgress[module.id as keyof typeof userProgress] !== undefined && userProgress[module.id as keyof typeof userProgress] > 0
  );

  const availableModules = mockTrainingModules.filter(
    (module) => !enrolledModules.includes(module)
  );

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="container mx-auto text-center space-y-4">
          <h1>{t.training.title}</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Interactive micro-learning modules with quizzes and certifications
          </p>
        </div>
      </div>

      {/* Progress Overview (if enrolled) */}
      {enrolledModules.length > 0 && (
        <div className="container mx-auto px-4">
          <div className="bg-green-50 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3>Your Learning Progress</h3>
                <p className="text-gray-600">Keep up the great work!</p>
              </div>
              <Award className="h-12 w-12 text-green-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Enrolled Modules</span>
                </div>
                <div className="text-2xl">{enrolledModules.length}</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Total Learning Time</span>
                </div>
                <div className="text-2xl">
                  {Math.floor(
                    enrolledModules.reduce((sum, m) => sum + m.totalDuration, 0) / 3600
                  )}h
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Award className="h-4 w-4" />
                  <span>Certificates Earned</span>
                </div>
                <div className="text-2xl">
                  {enrolledModules.filter((m) => userProgress[m.id as keyof typeof userProgress] === 100).length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Training Modules */}
      <div className="container mx-auto px-4">
        <Tabs defaultValue={enrolledModules.length > 0 ? 'enrolled' : 'all'} className="w-full">
          <TabsList>
            {enrolledModules.length > 0 && (
              <TabsTrigger value="enrolled">
                {t.training.myProgress}
                <Badge variant="secondary" className="ml-2">
                  {enrolledModules.length}
                </Badge>
              </TabsTrigger>
            )}
            <TabsTrigger value="all">
              {t.training.modules}
              <Badge variant="secondary" className="ml-2">
                {availableModules.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          {enrolledModules.length > 0 && (
            <TabsContent value="enrolled" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    userProgress={userProgress[module.id as keyof typeof userProgress]}
                    onClick={() => setSelectedModule(module)}
                  />
                ))}
              </div>
            </TabsContent>
          )}

          <TabsContent value="all" className="mt-6">
            <div className="space-y-8">
              {/* Difficulty Levels */}
              {['beginner', 'intermediate', 'advanced'].map((difficulty) => {
                const modulesForLevel = availableModules.filter(
                  (m) => m.difficulty === difficulty
                );

                if (modulesForLevel.length === 0) return null;

                return (
                  <div key={difficulty}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="capitalize">{t.training.difficulty[difficulty as keyof typeof t.training.difficulty]}</h3>
                      <Badge variant="outline">{modulesForLevel.length}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {modulesForLevel.map((module) => (
                        <ModuleCard
                          key={module.id}
                          module={module}
                          onClick={() => setSelectedModule(module)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-white mb-4">Earn Your Certificate</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Complete training modules and pass quizzes to earn certificates that demonstrate 
            your knowledge of safe migration practices.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white/20 rounded-lg px-6 py-3">
              ✓ Interactive Lessons
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              ✓ Knowledge Assessments
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              ✓ Verified Certificates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
