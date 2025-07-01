import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, Home, Info, DollarSign, Mail } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { WEBSITE } from '@/utils/websiteInfo';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/images/logo.png';

// Array of colorful background gradients
const BACKGROUNDS = [
  'bg-gradient-to-r from-purple-500 to-pink-500',
  'bg-gradient-to-r from-blue-500 to-teal-400',
  'bg-gradient-to-r from-red-500 to-orange-500',
  'bg-gradient-to-r from-green-500 to-emerald-500',
  'bg-gradient-to-r from-indigo-500 to-purple-600'
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [currentBg, setCurrentBg] = useState(0);

  // Rotate backgrounds every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const navigation = React.useMemo(
    () => [
      { name: t('nav.pricing'), href: '/pricing', icon: DollarSign },
      { name: t('nav.contact'), href: '/contact', icon: Mail },
      { name: t('Article'), href: '/about', icon: Mail },
      { name: t('Movies Now'), href: '/explore', icon: Mail },
    ],
    [t]
  );

  const [logoError, setLogoError] = useState(false);
  const logoSrc = logoError ? '/fallback-logo.png' : logo;

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  }, [logout, navigate]);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredNavigation = React.useMemo(
    () => navigation.filter((item) => !item.protected || user?.isAuthenticated),
    [navigation, user?.isAuthenticated]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        BACKGROUNDS[currentBg]
      } ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/20 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo and Website Name */}
          <div className="flex items-center justify-center md:justify-start flex-1 md:flex-none">
            <Link
              to="/"
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-white rounded-md"
              aria-label="Home"
            >
              <img
                src={logoSrc}
                onError={() => setLogoError(true)}
                alt={`${WEBSITE.NAME} Logo`}
                className="h-12 w-auto object-contain"
                width={48}
                height={48}
                loading="eager"
              />
              <span className="text-2xl font-extrabold text-white hover:text-gray-100 transition-colors">
                {WEBSITE.NAME}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {filteredNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg font-medium transition-colors px-3 py-2 rounded-lg ${
                  location.pathname === item.href
                    ? 'bg-white/20'
                    : 'hover:bg-white/10'
                }`}
                aria-current={location.pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher and User Actions */}
          <div className="flex items-center space-x-6">
            <LanguageSwitcher darkMode />

            {user?.isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none"
                  aria-expanded={isUserMenuOpen}
                  aria-label="User menu"
                >
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-white md:inline hidden">
                    {user.name}
                  </span>
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                    >
                      <div className="p-2 space-y-1">
                        <div className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 truncate">
                          {t('header.welcome')}, {user.name}
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-2 px-4 py-3 text-left text-sm hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <LogOut className="h-5 w-5 text-blue-600" />
                          <span>{t('header.logout')}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="hidden md:inline-flex items-center px-6 py-2 text-lg font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-6 py-2 text-lg font-medium text-blue-600 bg-white hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
                >
                  {t('nav.signup')}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden ${BACKGROUNDS[currentBg]} shadow-lg`}
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {filteredNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                    location.pathname === item.href
                      ? 'bg-white/20'
                      : 'hover:bg-white/10'
                  }`}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  <div className="flex items-center space-x-4">
                    <item.icon className="h-6 w-6" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}

              <div className="pt-4 border-t border-white/20">
                {user?.isAuthenticated ? (
                  <>
                    <div className="px-4 py-3 text-lg font-medium text-white/80">
                      {t('header.welcome')}, {user.name}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg text-lg font-medium hover:bg-white/10"
                    >
                      <LogOut className="h-6 w-6" />
                      <span>{t('header.logout')}</span>
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-3 text-lg font-medium text-white hover:bg-white/10 rounded-lg"
                    >
                      {t('nav.login')}
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-3 text-lg font-medium text-blue-600 bg-white hover:bg-gray-100 rounded-lg"
                    >
                      {t('nav.signup')}
                    </Link>
                  </div>
                )}
              </div>

              <div className="px-4 py-3">
                <LanguageSwitcher mobile darkMode />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;