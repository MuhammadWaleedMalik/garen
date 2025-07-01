import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie as CookieIcon, Shield, Settings, Info } from 'lucide-react';
import { WEBSITE } from '@/utils/websiteInfo';

const Cookie = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'What Are Cookies?',
      icon: CookieIcon,
      content: `Cookies are small text files stored on your device when you visit ${WEBSITE.NAME}. They help us remember your preferences, improve site performance, and provide personalized movie recommendations.`,
    },
    {
      title: 'How We Use Cookies',
      icon: Settings,
      content: `We use cookies for essential functions (e.g., login sessions), analytics (to track usage), and advertising (to show relevant movie promotions). You can manage your cookie preferences through your account settings.`,
    },
    {
      title: 'Your Cookie Choices',
      icon: Shield,
      content: `You can accept or decline non-essential cookies via our consent banner. To opt-out or adjust settings, visit your browser settings or contact us at ${WEBSITE.EMAIL}. Note that blocking essential cookies may affect site functionality.`,
    },
    {
      title: 'Cookie Security',
      icon: Info,
      content: `We ensure cookies are transmitted securely using encryption. Third-party cookies are used with strict privacy controls, and we comply with regulations like GDPR and ePrivacy Directive.`,
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="min-h-screen mt-24 bg-gray-100 text-gray-900 font-sans flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-white shadow-lg p-6 lg:h-screen lg:sticky lg:top-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Cookie Policy</h2>
        <nav className="space-y-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.title}
                onClick={() => toggleSection(index)}
                className={`w-full text-left p-3 rounded-lg flex items-center gap-3 text-gray-700 hover:bg-gray-100 transition-colors ${activeSection === index ? 'bg-yellow-50 text-yellow-600' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={20} />
                <span>{section.title}</span>
              </motion.button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900">Cookie Policy</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
            Understand how ${WEBSITE.NAME} uses cookies to enhance your movie streaming experience.
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="space-y-6"
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex items-center gap-3 font-semibold text-gray-800 mb-2"
                >
                  <Icon size={24} className="text-yellow-600" />
                  <span>{section.title}</span>
                  <span className="ml-auto text-gray-500">
                    {activeSection === index ? '−' : '+'}
                  </span>
                </button>
                {activeSection === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 mt-4 text-sm"
                  >
                    {section.content}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Manage Cookies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Manage Your Cookies</h2>
          <p className="text-gray-600 mb-4">
            Adjust your cookie preferences in your account settings or browser. For assistance, contact ${WEBSITE.EMAIL}.
          </p>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="w-full bg-gray-800 text-white p-6 mt-auto"
      >
        <p className="text-center text-sm">
          Cookie Policy last updated: {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })} at 12:22 AM PKT
        </p>
      </motion.footer>
    </div>
  );
};

export default Cookie;