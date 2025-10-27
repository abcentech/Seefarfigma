// i18n Configuration for Multi-Language Support

import { LANGUAGES } from './constants';
import type { Language } from '../types';

// Translation keys structure
export interface Translations {
  common: {
    loading: string;
    error: string;
    retry: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
    search: string;
    filter: string;
    share: string;
    download: string;
    readMore: string;
    backToHome: string;
  };
  navigation: {
    home: string;
    infoHub: string;
    campaigns: string;
    training: string;
    analytics: string;
    profile: string;
    login: string;
    logout: string;
  };
  infoHub: {
    title: string;
    subtitle: string;
    selectCountry: string;
    categories: {
      legal: string;
      safety: string;
      employment: string;
      health: string;
      rights: string;
    };
    faq: string;
    decisionTree: string;
    mythVsFact: string;
  };
  campaigns: {
    title: string;
    subtitle: string;
    allCampaigns: string;
    featured: string;
    mediaTypes: {
      video: string;
      audio: string;
      infographic: string;
      document: string;
    };
    views: string;
    downloads: string;
    shares: string;
  };
  training: {
    title: string;
    modules: string;
    myProgress: string;
    startLesson: string;
    continueLesson: string;
    takeQuiz: string;
    viewCertificate: string;
    completionRate: string;
    duration: string;
    difficulty: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
  };
  analytics: {
    title: string;
    overview: string;
    engagement: string;
    geography: string;
    devices: string;
    metrics: {
      pageViews: string;
      uniqueVisitors: string;
      avgSessionDuration: string;
      bounceRate: string;
    };
  };
  dataGovernance: {
    consent: string;
    consentMessage: string;
    acceptAll: string;
    rejectAll: string;
    customize: string;
    exportData: string;
    deleteAccount: string;
    privacyPolicy: string;
  };
  accessibility: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    changeLanguage: string;
    toggleTheme: string;
  };
}

// English Translations
export const translationsEN: Translations = {
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Retry',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    search: 'Search',
    filter: 'Filter',
    share: 'Share',
    download: 'Download',
    readMore: 'Read More',
    backToHome: 'Back to Home',
  },
  navigation: {
    home: 'Home',
    infoHub: 'Information Hub',
    campaigns: 'Campaign Library',
    training: 'Training',
    analytics: 'Analytics',
    profile: 'Profile',
    login: 'Login',
    logout: 'Logout',
  },
  infoHub: {
    title: 'Information Hub',
    subtitle: 'Access trusted migration information for your country',
    selectCountry: 'Select Your Country',
    categories: {
      legal: 'Legal Requirements',
      safety: 'Safety & Security',
      employment: 'Employment',
      health: 'Health Services',
      rights: 'Your Rights',
    },
    faq: 'Frequently Asked Questions',
    decisionTree: 'Decision Guide',
    mythVsFact: 'Myths vs Facts',
  },
  campaigns: {
    title: 'Campaign Library',
    subtitle: 'Explore multimedia campaigns and resources',
    allCampaigns: 'All Campaigns',
    featured: 'Featured',
    mediaTypes: {
      video: 'Video',
      audio: 'Audio',
      infographic: 'Infographic',
      document: 'Document',
    },
    views: 'views',
    downloads: 'downloads',
    shares: 'shares',
  },
  training: {
    title: 'Training Modules',
    modules: 'Available Modules',
    myProgress: 'My Progress',
    startLesson: 'Start Lesson',
    continueLesson: 'Continue Lesson',
    takeQuiz: 'Take Quiz',
    viewCertificate: 'View Certificate',
    completionRate: 'Completion Rate',
    duration: 'Duration',
    difficulty: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
    },
  },
  analytics: {
    title: 'Analytics Dashboard',
    overview: 'Overview',
    engagement: 'Engagement',
    geography: 'Geography',
    devices: 'Devices',
    metrics: {
      pageViews: 'Page Views',
      uniqueVisitors: 'Unique Visitors',
      avgSessionDuration: 'Avg. Session Duration',
      bounceRate: 'Bounce Rate',
    },
  },
  dataGovernance: {
    consent: 'Consent Management',
    consentMessage: 'We value your privacy. Please choose your data preferences.',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All',
    customize: 'Customize',
    exportData: 'Export My Data',
    deleteAccount: 'Delete Account',
    privacyPolicy: 'Privacy Policy',
  },
  accessibility: {
    skipToContent: 'Skip to main content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    changeLanguage: 'Change language',
    toggleTheme: 'Toggle theme',
  },
};

// French Translations
export const translationsFR: Translations = {
  common: {
    loading: 'Chargement...',
    error: 'Une erreur est survenue',
    retry: 'Réessayer',
    cancel: 'Annuler',
    save: 'Enregistrer',
    delete: 'Supprimer',
    edit: 'Modifier',
    search: 'Rechercher',
    filter: 'Filtrer',
    share: 'Partager',
    download: 'Télécharger',
    readMore: 'Lire la suite',
    backToHome: "Retour à l'accueil",
  },
  navigation: {
    home: 'Accueil',
    infoHub: "Centre d'information",
    campaigns: 'Bibliothèque de campagnes',
    training: 'Formation',
    analytics: 'Analytique',
    profile: 'Profil',
    login: 'Connexion',
    logout: 'Déconnexion',
  },
  infoHub: {
    title: "Centre d'information",
    subtitle: 'Accédez à des informations fiables sur la migration pour votre pays',
    selectCountry: 'Sélectionnez votre pays',
    categories: {
      legal: 'Exigences légales',
      safety: 'Sécurité et sûreté',
      employment: 'Emploi',
      health: 'Services de santé',
      rights: 'Vos droits',
    },
    faq: 'Foire aux questions',
    decisionTree: 'Guide de décision',
    mythVsFact: 'Mythes vs Faits',
  },
  campaigns: {
    title: 'Bibliothèque de campagnes',
    subtitle: 'Explorez des campagnes multimédia et des ressources',
    allCampaigns: 'Toutes les campagnes',
    featured: 'En vedette',
    mediaTypes: {
      video: 'Vidéo',
      audio: 'Audio',
      infographic: 'Infographie',
      document: 'Document',
    },
    views: 'vues',
    downloads: 'téléchargements',
    shares: 'partages',
  },
  training: {
    title: 'Modules de formation',
    modules: 'Modules disponibles',
    myProgress: 'Mon progrès',
    startLesson: 'Commencer la leçon',
    continueLesson: 'Continuer la leçon',
    takeQuiz: 'Passer le quiz',
    viewCertificate: 'Voir le certificat',
    completionRate: "Taux d'achèvement",
    duration: 'Durée',
    difficulty: {
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé',
    },
  },
  analytics: {
    title: "Tableau de bord d'analyse",
    overview: 'Aperçu',
    engagement: 'Engagement',
    geography: 'Géographie',
    devices: 'Appareils',
    metrics: {
      pageViews: 'Pages vues',
      uniqueVisitors: 'Visiteurs uniques',
      avgSessionDuration: 'Durée moyenne de session',
      bounceRate: 'Taux de rebond',
    },
  },
  dataGovernance: {
    consent: 'Gestion du consentement',
    consentMessage: 'Nous respectons votre vie privée. Veuillez choisir vos préférences de données.',
    acceptAll: 'Tout accepter',
    rejectAll: 'Tout refuser',
    customize: 'Personnaliser',
    exportData: 'Exporter mes données',
    deleteAccount: 'Supprimer le compte',
    privacyPolicy: 'Politique de confidentialité',
  },
  accessibility: {
    skipToContent: 'Passer au contenu principal',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    changeLanguage: 'Changer de langue',
    toggleTheme: 'Changer le thème',
  },
};

// Arabic Translations (RTL)
export const translationsAR: Translations = {
  common: {
    loading: 'جاري التحميل...',
    error: 'حدث خطأ',
    retry: 'إعادة المحاولة',
    cancel: 'إلغاء',
    save: 'حفظ',
    delete: 'حذف',
    edit: 'تعديل',
    search: 'بحث',
    filter: 'تصفية',
    share: 'مشاركة',
    download: 'تحميل',
    readMore: 'اقرأ المزيد',
    backToHome: 'العودة إلى الصفحة الرئيسية',
  },
  navigation: {
    home: 'الرئيسية',
    infoHub: 'مركز المعلومات',
    campaigns: 'مكتبة الحملات',
    training: 'التدريب',
    analytics: 'التحليلات',
    profile: 'الملف الشخصي',
    login: 'تسجيل الدخول',
    logout: 'تسجيل الخروج',
  },
  infoHub: {
    title: 'مركز المعلومات',
    subtitle: 'الوصول إلى معلومات موثوقة حول الهجرة لبلدك',
    selectCountry: 'اختر بلدك',
    categories: {
      legal: 'المتطلبات القانونية',
      safety: 'السلامة والأمن',
      employment: 'التوظيف',
      health: 'الخدمات الصحية',
      rights: 'حقوقك',
    },
    faq: 'الأسئلة الشائعة',
    decisionTree: 'دليل القرار',
    mythVsFact: 'الخرافات مقابل الحقائق',
  },
  campaigns: {
    title: 'مكتبة الحملات',
    subtitle: 'استكشف الحملات والموارد متعددة الوسائط',
    allCampaigns: 'جميع الحملات',
    featured: 'مميز',
    mediaTypes: {
      video: 'فيديو',
      audio: 'صوت',
      infographic: 'رسم معلوماتي',
      document: 'وثيقة',
    },
    views: 'مشاهدات',
    downloads: 'تحميلات',
    shares: 'مشاركات',
  },
  training: {
    title: 'وحدات التدريب',
    modules: 'الوحدات المتاحة',
    myProgress: 'تقدمي',
    startLesson: 'ابدأ الدرس',
    continueLesson: 'تابع الدرس',
    takeQuiz: 'خذ الاختبار',
    viewCertificate: 'عرض الشهادة',
    completionRate: 'معدل الإكمال',
    duration: 'المدة',
    difficulty: {
      beginner: 'مبتدئ',
      intermediate: 'متوسط',
      advanced: 'متقدم',
    },
  },
  analytics: {
    title: 'لوحة التحليلات',
    overview: 'نظرة عامة',
    engagement: 'التفاعل',
    geography: 'الجغرافيا',
    devices: 'الأجهزة',
    metrics: {
      pageViews: 'مشاهدات الصفحة',
      uniqueVisitors: 'الزوار الفريدون',
      avgSessionDuration: 'متوسط مدة الجلسة',
      bounceRate: 'معدل الارتداد',
    },
  },
  dataGovernance: {
    consent: 'إدارة الموافقة',
    consentMessage: 'نحن نقدر خصوصيتك. يرجى اختيار تفضيلات البيانات الخاصة بك.',
    acceptAll: 'قبول الكل',
    rejectAll: 'رفض الكل',
    customize: 'تخصيص',
    exportData: 'تصدير بياناتي',
    deleteAccount: 'حذف الحساب',
    privacyPolicy: 'سياسة الخصوصية',
  },
  accessibility: {
    skipToContent: 'تخطي إلى المحتوى الرئيسي',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    changeLanguage: 'تغيير اللغة',
    toggleTheme: 'تبديل المظهر',
  },
};

// Swahili Translations
export const translationsSW: Translations = {
  common: {
    loading: 'Inapakia...',
    error: 'Hitilafu imetokea',
    retry: 'Jaribu tena',
    cancel: 'Ghairi',
    save: 'Hifadhi',
    delete: 'Futa',
    edit: 'Hariri',
    search: 'Tafuta',
    filter: 'Chuja',
    share: 'Shiriki',
    download: 'Pakua',
    readMore: 'Soma Zaidi',
    backToHome: 'Rudi Mwanzo',
  },
  navigation: {
    home: 'Nyumbani',
    infoHub: 'Kituo cha Habari',
    campaigns: 'Maktaba ya Kampeni',
    training: 'Mafunzo',
    analytics: 'Uchanganuzi',
    profile: 'Wasifu',
    login: 'Ingia',
    logout: 'Toka',
  },
  infoHub: {
    title: 'Kituo cha Habari',
    subtitle: 'Pata habari za kuaminika za uhamiaji kwa nchi yako',
    selectCountry: 'Chagua Nchi Yako',
    categories: {
      legal: 'Mahitaji ya Kisheria',
      safety: 'Usalama na Ulinzi',
      employment: 'Ajira',
      health: 'Huduma za Afya',
      rights: 'Haki Zako',
    },
    faq: 'Maswali Yanayoulizwa Mara kwa Mara',
    decisionTree: 'Mwongozo wa Maamuzi',
    mythVsFact: 'Hadithi dhidi ya Ukweli',
  },
  campaigns: {
    title: 'Maktaba ya Kampeni',
    subtitle: 'Gundua kampeni za multimedia na rasilimali',
    allCampaigns: 'Kampeni Zote',
    featured: 'Zilizoangaziwa',
    mediaTypes: {
      video: 'Video',
      audio: 'Sauti',
      infographic: 'Infographic',
      document: 'Hati',
    },
    views: 'mitazamo',
    downloads: 'upakuaji',
    shares: 'kushiriki',
  },
  training: {
    title: 'Moduli za Mafunzo',
    modules: 'Moduli Zinazopatikana',
    myProgress: 'Maendeleo Yangu',
    startLesson: 'Anza Somo',
    continueLesson: 'Endelea na Somo',
    takeQuiz: 'Fanya Jaribio',
    viewCertificate: 'Angalia Cheti',
    completionRate: 'Kiwango cha Ukamilishaji',
    duration: 'Muda',
    difficulty: {
      beginner: 'Mwanzo',
      intermediate: 'Kati',
      advanced: 'Juu',
    },
  },
  analytics: {
    title: 'Dashibodi ya Uchanganuzi',
    overview: 'Muhtasari',
    engagement: 'Ushiriki',
    geography: 'Jiografia',
    devices: 'Vifaa',
    metrics: {
      pageViews: 'Mitazamo ya Kurasa',
      uniqueVisitors: 'Wageni wa Kipekee',
      avgSessionDuration: 'Wastani wa Muda wa Kipindi',
      bounceRate: 'Kiwango cha Kuruka',
    },
  },
  dataGovernance: {
    consent: 'Usimamizi wa Idhini',
    consentMessage: 'Tunathamini faragha yako. Tafadhali chagua mapendeleo yako ya data.',
    acceptAll: 'Kubali Yote',
    rejectAll: 'Kataa Yote',
    customize: 'Binafsisha',
    exportData: 'Hamisha Data Yangu',
    deleteAccount: 'Futa Akaunti',
    privacyPolicy: 'Sera ya Faragha',
  },
  accessibility: {
    skipToContent: 'Ruka kwenda kwa maudhui makuu',
    openMenu: 'Fungua menyu',
    closeMenu: 'Funga menyu',
    changeLanguage: 'Badilisha lugha',
    toggleTheme: 'Badilisha mandhari',
  },
};

// Translation getter utility
export function getTranslations(language: Language): Translations {
  switch (language) {
    case 'en':
      return translationsEN;
    case 'fr':
      return translationsFR;
    case 'ar':
      return translationsAR;
    case 'sw':
      return translationsSW;
    default:
      return translationsEN;
  }
}

// Check if language is RTL
export function isRTL(language: Language): boolean {
  return language === 'ar';
}

// Get language metadata
export function getLanguageInfo(language: Language) {
  return LANGUAGES[language];
}
