// LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = ({ mobile = false }) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
          mobile ? 'justify-center w-full' : ''
        }`}
        aria-label="Change language"
      >
        <Globe size={18} className="text-gray-700 dark:text-gray-300" />
        {!mobile && (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {currentLanguage.name}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute ${
              mobile ? 'relative mt-2 w-full' : 'right-0 mt-2 w-48'
            } bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50`}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  if (i18n.language !== language.code) {
                    i18n.changeLanguage(language.code);
                  }
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  i18n.language === language.code
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </button>
            ))}
            {/* Support for new languages not in the list */}
            {!languages.some(lang => lang.code === i18n.language) && (
              <button
                key={i18n.language}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                disabled
              >
                <span className="text-lg">🌐</span>
                <span className="font-medium">{i18n.language}</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
