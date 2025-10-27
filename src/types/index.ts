// Core Type Definitions for SAFE-MIT Platform

export type Language = 'en' | 'fr' | 'ar' | 'sw';
export type Country = 'nigeria' | 'senegal' | 'morocco' | 'kenya';
export type UserRole = 'public' | 'editor' | 'partner' | 'analyst' | 'admin' | 'facilitator';

// Country Configuration
export interface CountryConfig {
  code: Country;
  name: string;
  language: Language;
  flag: string;
  rtl: boolean;
}

// User & Authentication
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  country: Country;
  language: Language;
  consentGiven: boolean;
  consentDate?: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  notifications: boolean;
  dataSharing: boolean;
  offlineMode: boolean;
}

// Information Hub
export interface InfoArticle {
  id: string;
  country: Country;
  category: 'legal' | 'safety' | 'employment' | 'health' | 'rights';
  title: string;
  slug: string;
  content: string;
  lastUpdated: string;
  author: string;
  readTime: number;
  tags: string[];
}

export interface FAQ {
  id: string;
  country: Country;
  question: string;
  answer: string;
  category: string;
  votes: number;
  isMyth: boolean;
}

export interface DecisionNode {
  id: string;
  question: string;
  type: 'question' | 'result';
  options?: {
    text: string;
    nextNodeId: string;
  }[];
  result?: {
    title: string;
    description: string;
    resources: string[];
  };
}

// Campaign Library
export interface Campaign {
  id: string;
  country: Country[];
  title: string;
  slug: string;
  description: string;
  mediaType: 'video' | 'audio' | 'infographic' | 'document';
  thumbnailUrl: string;
  mediaUrl: string;
  duration?: number;
  fileSize?: number;
  tags: string[];
  category: string;
  publishedDate: string;
  views: number;
  downloads: number;
  shares: number;
}

export interface Toolkit {
  id: string;
  country: Country;
  name: string;
  description: string;
  resources: Campaign[];
  downloadUrl: string;
}

// Training Modules
export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  slug: string;
  description: string;
  duration: number;
  order: number;
  content: LessonContent[];
  quiz?: Quiz;
  prerequisites: string[];
  completionRate?: number;
}

export interface LessonContent {
  type: 'text' | 'image' | 'video' | 'interactive';
  content: string;
  duration?: number;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'multi-select';
  options: string[];
  correctAnswer: number | number[];
  explanation: string;
  points: number;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  answers: Record<string, number | number[]>;
  completedAt: string;
  passed: boolean;
}

export interface Certificate {
  id: string;
  userId: string;
  lessonId: string;
  moduleName: string;
  issuedDate: string;
  certificateUrl: string;
  verificationCode: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  country: Country[];
  lessons: Lesson[];
  totalDuration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  enrollmentCount: number;
}

// Analytics
export interface AnalyticsMetric {
  id: string;
  metric: string;
  value: number;
  change: number;
  period: 'day' | 'week' | 'month';
}

export interface EngagementData {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
  avgSessionDuration: number;
  bounceRate: number;
}

export interface GeoData {
  country: Country;
  sessions: number;
  users: number;
  avgDuration: number;
}

export interface DeviceData {
  deviceType: 'mobile' | 'tablet' | 'desktop';
  percentage: number;
  sessions: number;
}

// Data Governance
export interface ConsentRecord {
  id: string;
  userId: string;
  consentType: 'analytics' | 'marketing' | 'data-sharing' | 'essential';
  given: boolean;
  timestamp: string;
  ipAddress?: string;
  version: string;
}

export interface DataExportRequest {
  id: string;
  userId: string;
  requestDate: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  exportUrl?: string;
  expiresAt?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
