import { useState } from 'react';
import { Menu, X, Globe, User, LogOut } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface HeaderProps {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export function Header({ onMobileMenuToggle, isMobileMenuOpen }: HeaderProps) {
  const { t, isRTL } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900">SAFE-MIT</span>
              <span className="text-xs text-gray-600">Digital Platform</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t.navigation.home}
            </a>
            <a
              href="/info-hub"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t.navigation.infoHub}
            </a>
            <a
              href="/campaigns"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t.navigation.campaigns}
            </a>
            <a
              href="/training"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t.navigation.training}
            </a>
            {user && ['analyst', 'admin'].includes(user.role) && (
              <a
                href="/analytics"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.navigation.analytics}
              </a>
            )}
            {user && ['facilitator', 'admin'].includes(user.role) && (
              <a
                href="/facilitator"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                Facilitator
              </a>
            )}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">{user?.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={isRTL ? 'start' : 'end'} className="w-56">
                  <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <a href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      {t.navigation.profile}
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    {t.navigation.logout}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button size="sm" asChild>
                <a href="/auth/login">{t.navigation.login}</a>
              </Button>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={onMobileMenuToggle}
              aria-label={isMobileMenuOpen ? t.accessibility.closeMenu : t.accessibility.openMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t py-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              <a
                href="/"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.navigation.home}
              </a>
              <a
                href="/info-hub"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.navigation.infoHub}
              </a>
              <a
                href="/campaigns"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.navigation.campaigns}
              </a>
              <a
                href="/training"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.navigation.training}
              </a>
              {user && ['analyst', 'admin'].includes(user.role) && (
                <a
                  href="/analytics"
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {t.navigation.analytics}
                </a>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
