// Global Constants for SAFE-MIT Platform

import type { CountryConfig } from '../types';

// Country Configurations
export const COUNTRIES: Record<string, CountryConfig> = {
  nigeria: {
    code: 'nigeria',
    name: 'Nigeria',
    language: 'en',
    flag: '🇳🇬',
    rtl: false,
  },
  senegal: {
    code: 'senegal',
    name: 'Senegal',
    language: 'fr',
    flag: '🇸🇳',
    rtl: false,
  },
  morocco: {
    code: 'morocco',
    name: 'Morocco',
    language: 'ar',
    flag: '🇲🇦',
    rtl: true,
  },
  kenya: {
    code: 'kenya',
    name: 'Kenya',
    language: 'sw',
    flag: '🇰🇪',
    rtl: false,
  },
};

// Language Configurations
export const LANGUAGES = {
  en: { code: 'en', name: 'English', nativeName: 'English' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  sw: { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
} as const;

// Role Permissions
export const ROLE_PERMISSIONS = {
  public: ['view:info', 'view:campaigns', 'enroll:training'],
  editor: ['view:info', 'view:campaigns', 'edit:content', 'publish:content'],
  partner: ['view:info', 'view:campaigns', 'view:analytics:basic'],
  facilitator: ['view:info', 'view:campaigns', 'enroll:training', 'manage:learners', 'view:progress'],
  analyst: ['view:info', 'view:campaigns', 'view:analytics:full', 'export:data'],
  admin: ['*'],
} as const;

// Navigation Routes
export const ROUTES = {
  HOME: '/',
  INFO_HUB: '/info-hub',
  INFO_COUNTRY: '/info-hub/:country',
  CAMPAIGNS: '/campaigns',
  CAMPAIGN_DETAIL: '/campaigns/:id',
  TRAINING: '/training',
  TRAINING_MODULE: '/training/:moduleId',
  LESSON: '/training/:moduleId/lesson/:lessonId',
  CERTIFICATE: '/training/certificate/:certificateId',
  ANALYTICS: '/analytics',
  PROFILE: '/profile',
  CONSENT: '/data-governance/consent',
  DATA_EXPORT: '/data-governance/export',
  ADMIN: '/admin',
  LOGIN: '/auth/login',
} as const;

// API Endpoints (mock structure)
export const API_ENDPOINTS = {
  INFO: '/api/info',
  CAMPAIGNS: '/api/campaigns',
  TRAINING: '/api/training',
  ANALYTICS: '/api/analytics',
  USER: '/api/user',
  AUTH: '/api/auth',
  CONSENT: '/api/consent',
  EXPORT: '/api/export',
} as const;

// Performance Thresholds
export const PERFORMANCE_TARGETS = {
  INITIAL_LOAD: 2500, // 2.5s on 3G
  FCP: 1800, // First Contentful Paint
  LCP: 2500, // Largest Contentful Paint
  TTI: 3800, // Time to Interactive
  CLS: 0.1, // Cumulative Layout Shift
  FID: 100, // First Input Delay
} as const;

// PWA Configuration
export const PWA_CONFIG = {
  CACHE_NAME: 'safe-mit-v1',
  CACHE_DURATION: 7 * 24 * 60 * 60 * 1000, // 7 days
  OFFLINE_FALLBACK: '/offline',
  CACHE_STRATEGIES: {
    IMAGES: 'CacheFirst',
    API: 'NetworkFirst',
    STATIC: 'CacheFirst',
    DYNAMIC: 'StaleWhileRevalidate',
  },
} as const;

// Accessibility
export const A11Y_CONFIG = {
  SKIP_LINK_ID: 'main-content',
  MIN_CONTRAST_RATIO: 4.5,
  MIN_TOUCH_TARGET: 44, // pixels
  FOCUS_VISIBLE_OUTLINE: '2px solid #0066cc',
} as const;

// Media Breakpoints (Tailwind default)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Info Hub Categories
export const INFO_CATEGORIES = [
  'legal',
  'safety',
  'employment',
  'health',
  'rights',
] as const;

// Campaign Categories
export const CAMPAIGN_CATEGORIES = [
  'awareness',
  'prevention',
  'protection',
  'community',
  'resources',
] as const;

// Training Difficulty Levels
export const TRAINING_DIFFICULTY = [
  'beginner',
  'intermediate',
  'advanced',
] as const;

// Quiz Configuration
export const QUIZ_CONFIG = {
  DEFAULT_PASSING_SCORE: 70,
  MAX_ATTEMPTS: 3,
  TIME_LIMIT_DEFAULT: 30, // minutes
} as const;

// Date Formats
export const DATE_FORMATS = {
  SHORT: 'MMM d, yyyy',
  LONG: 'MMMM d, yyyy',
  FULL: 'EEEE, MMMM d, yyyy',
  TIME: 'h:mm a',
  DATETIME: 'MMM d, yyyy h:mm a',
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'safe-mit-auth',
  USER_DATA: 'safe-mit-user',
  LANGUAGE: 'safe-mit-lang',
  THEME: 'safe-mit-theme',
  CONSENT: 'safe-mit-consent',
  OFFLINE_DATA: 'safe-mit-offline',
} as const;

// Feature Flags (for phased rollout)
export const FEATURES = {
  TRAINING_MODULE: true, // Phase 2
  ANALYTICS_DASHBOARD: false, // Phase 2
  DATA_GOVERNANCE: false, // Phase 3
  ROLE_BASED_ACCESS: false, // Phase 3
  OFFLINE_TRAINING: false, // Phase 2
  CERTIFICATE_GENERATION: false, // Phase 2
} as const;
